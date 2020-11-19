import { shallow } from 'enzyme';
import { TestScheduler } from 'jest';
import React, { useState as useStateMock } from 'react';
import QuickInfo from '../client/components/QuickInfo';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

let exampleData = {
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
  beforeEach(() => {
    wrapper = shallow(<QuickInfo data={exampleData} />);
    // useStateMock.mockImplementation((init) => [init, useState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render QuickInfo component on the browser', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should call setShowDetails with false', () => {
      const setShowDetails = jest.fn();
      const useStateSpy = jest.spyOn(React, 'useState');
      useStateSpy.mockImplementation((init) => [init, setShowDetails]);
      wrapper.find('#rules-button').simulate('click');
      expect(setShowDetails).toHaveBeenCalledWith(false);
  });
});
