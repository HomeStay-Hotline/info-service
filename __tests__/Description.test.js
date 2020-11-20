import { shallow } from 'enzyme';
import React from 'react';
import Description from '../client/components/Description';

const fakeData = {
  description: 'blah',
  desSpace: 'blah',
  guestAccess: 'blah',
  otherThings: 'blah',
};

describe('<Description>', () => {
  let wrapper;

  test('should render description component', () => {
    wrapper = shallow(<Description data={fakeData} />);
    expect(wrapper).toBeTruthy();
  });
});
