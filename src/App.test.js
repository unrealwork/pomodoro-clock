import React from 'react';
import App from './App';
import {configure, mount, render} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App', () => {

    const wrapper = mount(<App/>);

    test('renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });

});
