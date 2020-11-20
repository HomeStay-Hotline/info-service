import { shallow } from 'enzyme';
import React from 'react';
import BedInfos from '../client/components/BedInfos';

describe('<BedInfos>', () => {
  let wrapper;

  test('should render bedinfos component', () => {
    wrapper = shallow(<BedInfos />);
    expect(wrapper).toBeTruthy();
  });
});