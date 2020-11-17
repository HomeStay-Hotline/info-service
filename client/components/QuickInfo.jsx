import React from 'react';
import PropTypes from 'prop-types';

const QuickInfo = (props) => {
  const {
    data: {
      checkIn,
      checkOut,
      selfCheckIn,
      kidFriend,
      infantFriendly,
      pets,
      smoking,
      partiesEvents,
      additionalRules,
      enhancedClean,
      superhost,
    },
  } = props;

  return (
    <div className="main">
      <div>
        {}
      </div>
    </div>
  );
};

QuickInfo.propTypes = {
  data: PropTypes.shape({
    checkIn: PropTypes.number.isRequired,
    checkOut: PropTypes.number.isRequired,
    selfCheckIn: PropTypes.string.isRequired,
    kidFriend: PropTypes.string.isRequired,
    infantFriendly: PropTypes.string.isRequired,
    pets: PropTypes.string.isRequired,
    smoking: ,
    partiesEvents,
    additionalRules,
    enhancedClean,
    superhost,
  }).isRequired,
};

export default QuickInfo;
