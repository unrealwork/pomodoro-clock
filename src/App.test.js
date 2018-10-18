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

    test('contains an element with id="break-label" that contains a string', () => {
        const breakLabel = wrapper.find('#break-label');
        expect(breakLabel).toHaveLength(1);
        expect(breakLabel.text()).toBe('Break Length')
    });

    test('contains an element with id="session-label" that contains a string', () => {
       const sessionLabel = wrapper.find('#session-label');
       expect(sessionLabel).toHaveLength(1);
       expect(sessionLabel.text()).toBe('Session Length');
    })

});
