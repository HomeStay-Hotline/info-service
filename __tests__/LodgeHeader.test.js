import { shallow, mount, render } from 'enzyme';
import React from 'react';
import LodgeHeader from '../client/components/LodgeHeader';

describe('<LodgeHeader />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LodgeHeader />);
  });

  test('render the initial value of state in a div', () => {});
});
