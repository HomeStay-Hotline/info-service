import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/components/App';
import BedInfos from '../client/components/BedInfos';
import Description from '../client/components/Description';
import LodgeHeader from '../client/components/LodgeHeader';
import QuickInfo from '../client/components/QuickInfo';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('should have child component <LodgeHeader />', () => {
    expect(wrapper.containsMatchingElement(<LodgeHeader />)).toEqual(true);
  });

  test('should have child component <Description />', () => {
    expect(wrapper.containsMatchingElement(<Description />)).toEqual(true);
  });

  test('should have child components <QuickInfo />', () => {
    expect(wrapper.containsMatchingElement(<QuickInfo />)).toEqual(true);
  });

  test('should have child component <BedInfos />', () => {
    expect(wrapper.containsMatchingElement(<BedInfos />)).toEqual(true);
  });

  test('render the initial value of state in a div', () => {});
});
