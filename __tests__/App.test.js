import { shallow, mount, render } from 'enzyme';

import React from 'react';

import App from '../client/components/App';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('should call componentDidMount()', () => {
    const fakeMounting = jest.spyOn(App.prototype, 'componentDidMount');
    expect(fakeMounting).toHaveBeenCalledTimes(1);
  });

  test('should call getListingInfo()', () => {
    const fakeCallListing = jest.spyOn(App.prototype, 'getListingInfo()');
    expect(fakeCallListing).toHaveBeenCalledTimes(1);
  });

  test('render the initial value of state in a div', () => {});
});
