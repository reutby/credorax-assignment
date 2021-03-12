import React from 'react';
import ReactDOM from "react-dom";
import { act } from 'react-dom/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./";
import { ConvertNumberForm } from "../components"

configure({ adapter: new Adapter() });

describe('<App />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />);
    });

    it('input souled get the value 22', () => {
        const input = (wrapper.find(ConvertNumberForm)).find('input');
        const buttonSubmit = (wrapper.find(ConvertNumberForm)).find('button').at(0);


        act(() => {
            input.props().onChange({ target: { value: 22 } })
        });
        buttonSubmit.simulate('click');
        wrapper.update();
        const result = (wrapper.find('p').at(0));
        expect(buttonSubmit).toHaveLength(1);
        expect(result).toHaveLength(1);

        expect(result.text()).toEqual("twenty-two ");
    });

    it('detect Too big number error', () => {
        const input = (wrapper.find(ConvertNumberForm)).find('input');
        const buttonSubmit = (wrapper.find(ConvertNumberForm)).find('button').at(0);


        act(() => {
            input.props().onChange({ target: { value: '111111111111111111111' } })
        });
        buttonSubmit.simulate('click');
        wrapper.update();
        const error = (wrapper.find('p').at(0));
        expect(buttonSubmit).toHaveLength(1);
        expect(error).toHaveLength(1);

        expect(error.text()).toEqual("The number is too big");
    });

    it('detect not a valid number error', () => {
        const input = (wrapper.find(ConvertNumberForm)).find('input');
        const buttonSubmit = (wrapper.find(ConvertNumberForm)).find('button').at(0);


        act(() => {
            input.props().onChange({ target: { value: '-aa1' } })
        });
        buttonSubmit.simulate('click');
        wrapper.update();
        const error = (wrapper.find('p').at(0));
        expect(buttonSubmit).toHaveLength(1);
        expect(error).toHaveLength(1);

        expect(error.text()).toEqual("Not a valid number");
    });

});