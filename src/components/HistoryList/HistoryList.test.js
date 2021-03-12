import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HistoryList from "./";
import HistoryItem from "./HistoryItem";
import sinon from 'sinon';
import { IconButton } from '@material-ui/core';
configure({ adapter: new Adapter() });

describe('<HistoryList />', () => {
    const list = [
        { id: '123', timestamp: '12/03/12DGMT', result: 'one two tree' },
        { id: '1243', timestamp: '12/03/12GMT', result: 'one two tree' },
        { id: '13563', timestamp: '12/03/12GMT', result: 'one two tree' },]
    let wrapper;
    const onButtonClick = sinon.spy();
    beforeEach(() => {
        wrapper = mount(<HistoryList list={list} onDeleteItem={onButtonClick} />);
    });

    it('should render 3 itemHistory components', () => {

        expect(wrapper.find(HistoryItem)).toHaveLength(3);
    });
    

});