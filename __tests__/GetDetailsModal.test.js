import { shallow, ShallowWrapper } from 'enzyme';
import { TestScheduler } from 'jest';
import React, { useState as useStateMock } from 'react';
import GetDetailsModal from '../client/components/GetDetailsModal';

const exdata = {
  checkIn: 3,
  checkOut: 4,
  selfCheckIn: true,
  kidFriendly: true,
  infantFriendly: true,
  pets: true,
  smoking: true,
  partiesEvents: true,
  additionalRules: '',
  closeModal: () => {},
};

describe('<GetDetailsModal >', () => {
  let wrapper;

  test('should render QuickInfo component on the browser', () => {
    wrapper = shallow(<GetDetailsModal
      checkIn={exdata.checkIn}
      checkOut={exdata.checkOut}
      selfCheckIn={exdata.selfCheckIn}
      kidFriendly={exdata.kidFriendly}
      infantFriendly={exdata.infantFriendly}
      pets={exdata.pets}
      smoking={exdata.smoking}
      partiesEvents={exdata.partiesEvents}
      additionalRules={exdata.additionalRules}
      closeModal={exdata.closeModal}
    />);

    expect(wrapper).toBeTruthy();
  });
});
