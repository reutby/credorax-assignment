import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConvertNumberForm from "./";


configure({ adapter: new Adapter() });

describe('<ConvertNumberForm />', () => {
    let wrapper;
    beforeEach(() => {
      
        wrapper = mount(<ConvertNumberForm value={22}  />);
    });

    it('input souled get the value 22', () => { 
        expect(wrapper.find("input")).toHaveLength(1);
        expect(wrapper.find("input").get(0).props.value).toEqual(22);
    });
    

});