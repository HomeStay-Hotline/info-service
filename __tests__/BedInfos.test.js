import { shallow } from 'enzyme';
import React from 'react';
import BedInfos from '../client/components/BedInfos';

const fakedata = {
  bedroom: 3,
  beds: 2,
};

describe('<BedInfos>', () => {
  let wrapper;

  test('should render bedinfos component', () => {
    wrapper = shallow(<BedInfos data={fakedata} />);
    expect(wrapper).toBeTruthy();
  });
});