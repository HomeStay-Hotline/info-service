import { shallow } from 'enzyme';
import { TestScheduler } from 'jest';
import React, { useState as useStateMock } from 'react';
import QuickInfo from '../client/components/QuickInfo';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

// let exampleData = {
//     data: {
//     checkIn: 3,
//     checkOut: 4,
//     selfCheckIn: true,
//     kidFriendly: false,
//     infantFriendly: false,
//     pets: false,
//     smoking: false,
//     partiesEvents: false,
//     additionalRules: 'just do not',
//     enhancedClean: false,
//     superhost: false,
//     entireLodge: true,
//     type: 'yurt',
//     hostname: 'linda',
//   },
// };

// let exampleData = {
//     data: {
//     additionalRules: "Aspernatur non molestiae eum aut omnis iusto sint iure. Quasi consequatur aut quisquam. Sit cumque accusamus impedit eveniet enim voluptates cupiditate unde unde. Qui sunt qui temporibus non ut alias dolores et. Vero aliquam ut et qui. Cupiditate consequuntur ut quam voluptatem delectus dolorem harum.",
//     bath: 2,
//     bedroom: 2,
//     beds: 1,
//     checkIn: "1",
//     checkOut: "0",
//     desSpace: "Distinctio minima et nihil iusto ut laborum distinctio aspernatur.",
//     description: "Delectus a dicta rem. Culpa consequuntur officiis. Quasi iste delectus quae quas atque. Enim aperiam non.",
//     enhancedClean: 1,
//     entireLodge: 0,
//     guestAccess: "Possimus doloribus esse suscipit ut magni rerum. Sunt numquam sed eligendi esse et. Eum consequatur quaerat omnis ea.",
//     hostimg: "https://loremflickr.com/320/240/face,human/all",
//     hostname: "Valentin Jerde",
//     houserules_id: 95,
//     id: 95,
//     infantFriendly: 0,
//     kidFriendly: 1,
//     lodgename: "Refined Metal Computer",
//     lodgetype_id: 95,
//     maxGuests: 8,
//     otherThings: "Earum voluptates nemo ipsum et officiis beatae blanditiis repellendus qui. Possimus harum exercitationem molestias optio voluptates veniam aut aliquam qui. Blanditiis vel minima fugit excepturi. Ut nulla voluptatum nam libero. Porro sunt possimus minus. Eaque quod adipisci placeat ut nihil explicabo praesentium maxime.",
//     partiesEvents: 0,
//     pets: 0,
//     selfCheckIn: 1,
//     smoking: 0,
//     superhost: 1,
//     type: "House",
//     }
// }

let exampleData = [1, 2, 3, 4];

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
});
