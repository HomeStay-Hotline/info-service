import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../public/style/Description_style.css';

const Description = (props) => {
  const {
    data: {
      description,
      desSpace,
      guestAccess,
      otherThings,
    },
  } = props;
  return (
    <div className="body">
      <div>
        <span className={styles.details}>{description}</span>
        <span className={styles.header}>The space</span>
        <span className={styles.details}>{desSpace}</span>
        <span className={styles.header}>Guest Access</span>
        <span className={styles.details}>{guestAccess}</span>
        <span className={styles.header}>Other Things To Note</span>
        <span className={styles.details}>{otherThings}</span>
        <button type="button" className="expand">read more</button>
      </div>
      <div className="login"><a href="www.airbnb.com">Contact Host</a></div>
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    desSpace: PropTypes.string.isRequired,
    guestAccess: PropTypes.string.isRequired,
    otherThings: PropTypes.string.isRequired,
  }).isRequired,
};

export default Description;
