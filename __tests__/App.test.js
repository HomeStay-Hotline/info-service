import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/components/App';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('should render app component on the browser', () => {
    expect(wrapper).toBeTruthy();
  });

  // test('should invoke loadData on useEffect', () => {
  //   const mock = jest.fn();
  //   wrapper.instance().loadData = mock;
  //   wrapper
  //     .instance()
  //     .useEffect();
  //   expect(mock).toHaveBeenCalled();
  // });

  test('render the initial value of state in a div', ();
});
