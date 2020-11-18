import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

import { configure, shallow} from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16';

// By Isamu Poy
// for this page, we focus on testing whether the page is going to be rendered successfully
// because the UI heavily relies on a recipe API, there are not any buttons or text to "test"
// Thus, we simply check the rendering of the page to see if it is bug free. 

configure({ adapter: new Adapter() });

it('renders learn react link', () => {
  shallow(<Recipe />);
});
