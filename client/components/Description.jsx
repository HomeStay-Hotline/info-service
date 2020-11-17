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
    <div className={styles.body}>
      <div>
        {
         description
           ? <span className={styles.details}>{description}</span>
           : null
        }
        {
        desSpace
          ? (
            <div>
              <p />
              <span className={styles.header}>The space</span>
              <br />
              <span className={styles.details}>{desSpace}</span>
            </div>
          )
          : null
        }
        {
         guestAccess
           ? (
             <div>
               <p />
               <span className={styles.header}>Guest Access</span>
               <br />
               <span className={styles.details}>{guestAccess}</span>
             </div>
           )
           : null
        }
        {
          otherThings
            ? (
              <div>
                <p />
                <span className={styles.header}>Other Things To Note</span>
                <p />
                <span className={styles.details}>{otherThings}</span>
              </div>
            )
            : null
        }
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
