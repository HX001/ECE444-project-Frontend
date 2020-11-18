import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        left:theme.spacing(2.7),
        top:theme.spacing(0.3),
    },
}));

export function ArticleItem(props) {
    return (
        <div className="BasicInfo">
            <h1 className="title">{props.title}</h1>
            <div className="rating">&hearts;&hearts;&hearts;&hearts;</div>
            <div className="author">{props.author}</div>
            <div className="contentBox">
                <div className="imgBox">
                    <img src={props.src} alt=""/>
                </div>
                <div className="textBox">
                    <textarea rows="16" cols="85">
                    {props.mainText}
                    </textarea>
                </div>
            </div>

        </div>
    );
}

export function DisplayComments(comments){
    const classes = useStyles();
    return (
        <div className="comment_item">
            <div className="comment_user" data-category={comments.userName}>
                    {/*<img src={comments.avatar} alt=""/>*/}
                    <Avatar alt="Remy Sharp" src={comments.avatar} className={classes.large} />
                    <p className="username">{comments.userName}</p>
            </div>
            {/*<div className="comment_text">*/}
            {/*    <p>{comments.comment}</p>*/}
            {/*</div>*/}
            <Paper elevation={3} className="comment_text">
                <p>{comments.comment}</p>
            </Paper>
        </div>
    );
}
const StyledLinearProgress = withStyles({
    colorPrimary: {
        backgroundColor: "#00695C"
    },
    barColorPrimary: {
        backgroundColor: "#B2DFDB"
    }
})(LinearProgress);

export function LinearDeterminate() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <StyledLinearProgress  value={progress} />
        </div>
    );
}