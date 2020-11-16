import { shallow, mount, render } from 'enzyme';

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

  test('should call componentDidMount()', () => {
    const fakeMounting = jest.spyOn(App.prototype, 'componentDidMount');
    expect(fakeMounting).toHaveBeenCalledTimes(1);
  });

  test('should call getListingInfo()', () => {
    const fakeCallListing = jest.spyOn(App.prototype, 'getListingInfo()');
    expect(fakeCallListing).toHaveBeenCalledTimes(1);
  });

  test('should have child components', () => {
    expect(wrapper.containsMatchingElement(<LodgeHeader />).to.equal(true));
  });

  test('should have child components', () => {
    expect(wrapper.containsMatchingElement(<Description />).to.equal(true));
  });

  test('should have child components', () => {
    expect(wrapper.containsMatchingElement(<QuickInfo />).to.equal(true));
  });

  test('should have child components', () => {
    expect(wrapper.containsMatchingElement(<BedInfos />).to.equal(true));
  });

  test('render the initial value of state in a div', () => {});
});
