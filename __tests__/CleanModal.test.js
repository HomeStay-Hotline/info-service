import { shallow } from 'enzyme';
import React from 'react';
import CleanModal from '../client/components/CleanModal';


describe('<CleanModal>', () => {
  let wrapper;
  let fakeFunction;

  test('should render cleanmodal component', () => {
    fakeFunction = jest.fn();
    wrapper = shallow(<CleanModal closeModal={fakeFunction} />);
    expect(wrapper).toBeTruthy();
  });
});
