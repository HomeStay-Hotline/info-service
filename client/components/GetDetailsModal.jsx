import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../public/style/CleanModal_style.css';

const GetDetailsModal = (props) => {
  const {
    checkIn,
    checkOut,
    selfCheckIn,
    kidFriendly,
    infantFriendly,
    pets,
    smoking,
    partiesEvents,
    additionalRules,
  } = props;

  return (
    <div>
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={handleClick}
        />
      </div>
      <span className={styles.heading}>
        House rules
      </span>
      <table>
        {data}
      </table>
      <p>additional rules</p>
    </div>
  );
};

GetDetailsModal.propTypes = {
  checkIn: PropTypes.number.isRequired,
  checkOut: PropTypes.number.isRequired,
  selfCheckIn: PropTypes.bool.isRequired,
  kidFriendly: PropTypes.bool.isRequired,
  infantFriendly: PropTypes.bool.isRequired,
  pets: PropTypes.bool.isRequired,
  smoking: PropTypes.bool.isRequired,
  partiesEvents: PropTypes.bool.isRequired,
  additionalRules: PropTypes.string.isRequired,
};

export default GetDetailsModal;
