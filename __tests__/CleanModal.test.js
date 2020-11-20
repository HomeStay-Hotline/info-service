import { shallow } from 'enzyme';
import React from 'react';
import CleanModal from '../client/components/CleanModal';

const fakeData = {
  description: 'blah',
  desSpace: 'blah',
  guestAccess: 'blah',
  otherThings: 'blah',
};

describe('<CleanModal>', () => {
  let wrapper;

  test('should render cleanmodal component', () => {
    wrapper = shallow(<CleanModal data={fakeData} />);
    expect(wrapper).toBeTruthy();
  });
});