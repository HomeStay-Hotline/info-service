import { shallow, mount } from 'enzyme';
import React from 'react';
import QuickInfo from '../client/components/QuickInfo';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

const exampleData = {
  checkIn: 3,
  checkOut: 4,
  selfCheckIn: true,
  kidFriendly: false,
  infantFriendly: false,
  pets: false,
  smoking: false,
  partiesEvents: false,
  additionalRules: 'just do not',
  enhancedClean: false,
  superhost: false,
  entireLodge: true,
  type: 'yurt',
  hostname: 'linda',
};

describe('<QuickInfo />', () => {
  let wrapper;
  let setShowClean;

  test('should render QuickInfo component on the browser', () => {
    wrapper = shallow(<QuickInfo data={exampleData} />);
    expect(wrapper).toBeTruthy();
  });

  //doesn't work (child is undefined in line 40)
  test('should setShowClean to be true when clicked', () => {
    const handleClick = jest.spyOn(React, 'useState');
    setShowClean = jest.fn();
    wrapper = shallow(<QuickInfo data={exampleData} />);
    handleClick.mockImplementation((showClean) => [showClean, setShowClean]);

    wrapper.find('#clean-button').simulate('click');
    expect(setShowClean).toHaveBeenCalled();

    jest.clearAllMocks();
  });

  test.todo('should setShowDetails to true when clicked');

  test.todo('should setShowDetails to be true when parties button is clicked');

  test.todo('should render icon and info if data is true');

  test.todo('should render null if data is false');
});
