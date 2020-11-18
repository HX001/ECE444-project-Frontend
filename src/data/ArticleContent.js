import React from "react";
import {DisplayComments} from "../components/ArticleItem";

export default {
    articles: [
        {
            src: "https://www.takaski.com/wp-content/uploads/2015/08/Tokyo-Banana-Cake-Original-Miitsuketa-Made-in-Japan.jpg",
            title: "21 Easy Banana Desserts",
            rating: "&hearts;&hearts;&hearts;&hearts;",
            author: "Author Name",
            mainText: "Etiam posuere quam ac quam. Maecenas aliquet ac",
            comments: [{
                userName: "Nezuko",
                avatar: "https://i1.kknews.cc/SIG=3fkqf01/ctp-vzntr/q139s13n8q494on38p4751928qs4229s.jpg",
                comment: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat."
            },
                {
                    userName: "Tanjirou",
                    avatar: "https://cdn.anisearch.com/images/character/cover/full/81/81988.jpg",
                    comment: "Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. "
                },
                {
                    userName: "Muzan",
                    avatar: "http://img.duoziwang.com/2019/08/03111416998672.jpg",
                    comment: "Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna"
                },
                {
                    userName: "Kanao",
                    avatar: "https://moe.shikimori.one/system/characters/original/151142.jpg",
                    comment: "Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit."
                }]
        }
        // {
        //     src: "https://www.chopstickchronicles.com/wp-content/uploads/2020/03/Takoyaki-2020-update-34.jpg",
        //     title:"Secret of Takoyaki",
        //     rating:"&hearts;&hearts;&hearts;",
        //     author:"Author Name",
        //     mainText:"test",
        //     comments: [{
        //         userName: "test1",
        //         avatar: "https://i1.kknews.cc/SIG=3fkqf01/ctp-vzntr/q139s13n8q494on38p4751928qs4229s.jpg",
        //         comment: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat."
        //     },
        //         {
        //             userName: "test2",
        //             avatar: "https://cdn.anisearch.com/images/character/cover/full/81/81988.jpg",
        //             comment: "Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. "
        //         },
        //         {
        //             userName: "test3",
        //             avatar: "http://img.duoziwang.com/2019/08/03111416998672.jpg",
        //             comment: "Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna"
        //         },
        //         {
        //             userName: "test4",
        //             avatar: "https://moe.shikimori.one/system/characters/original/151142.jpg",
        //             comment: "Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit."
        //         }]
        // }
    ]
}