import { shallow } from 'enzyme';
import React from 'react';
import GetDetailsModal from '../client/components/GetDetailsModal';

const bool = false;
const num = 3;
const str = 'blahblah';

describe('<GetDetailsModal >', () => {
  let wrapper;
  let mockModal;

  beforeEach(() => {
    mockModal = jest.fn();
    wrapper = shallow(<GetDetailsModal
      checkIn={num}
      checkOut={num}
      selfCheckIn={bool}
      kidFriendly={bool}
      infantFriendly={bool}
      pets={bool}
      smoking={bool}
      partiesEvents={bool}
      additionalRules={str}
      closeModal={mockModal}
    />);
  });

  test('should render QuickInfo component on the browser', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should call handleClick function when clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockModal).toHaveBeenCalled();
  });

  test.todo('should show info if kidfriendly is true');

  test.todo('should show null if kidfriendly is false');
});
