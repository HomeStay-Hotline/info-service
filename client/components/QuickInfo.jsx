import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../public/style/QuickInfo_style.css';
import CleanModal from './CleanModal';
import GetDetailsModal from './GetDetailsModal';

const QuickInfo = (props) => {
  const {
    data: {
      checkIn,
      checkOut,
      selfCheckIn,
      kidFriendly,
      infantFriendly,
      pets,
      smoking,
      partiesEvents,
      additionalRules,
      enhancedClean,
      superhost,
      entireLodge,
      type,
      hostname,
    },
  } = props;
  const [showClean, setShowClean] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const closeModal = (state, int) => {
    if (int === 0) {
      return setShowClean(state);
    }
    return setShowDetails(state);
  };

  return (
    <div className={styles.main}>
      <div>
        {// check if entireLodge
          entireLodge
            ? (
              <div className={styles.section}>
                {' '}
                <FontAwesomeIcon icon="home" />
                <div className={styles.description}>
                  <div className={styles.info}>
                    Entire
                    {type}
                  </div>
                  <div className={styles.comment}>
                    You'll have the
                    {type}
                    {' '}
                    to yourself
                  </div>
                </div>
              </div>
            )
            : null
}
        {// check if enhancedclean
            enhancedClean
              ? (
                <div className={styles.section}>
                  {' '}
                  <FontAwesomeIcon icon="star" />
                  <div className={styles.description}>
                    <div className={styles.info}>Enhanced Clean</div>
                    <div className={styles.comment}>
                      This host committed to Airbnb's 5-step enhanced cleaning process.
                      <button
                        type="button"
                        className={styles.button}
                        onClick={
                          () => {
                            setShowClean(true);
                          }
                        }
                      >
                        Learn more
                      </button>
                      {showClean ? <CleanModal closeModal={closeModal} />
                        : null}
                    </div>
                  </div>
                </div>
              )
              : null
}
        {// check if selfcheckIn
            selfCheckIn
              ? (
                <div className={styles.section}>
                  {' '}
                  <FontAwesomeIcon icon="door-closed" />
                  <div className={styles.description}>
                    <div className={styles.info}>Self check-in</div>
                    <div className={styles.comment}>Check yourself in with the lockbox.</div>
                  </div>
                </div>
              )
              : null
}
        {
            superhost
              ? (
                <div className={styles.section}>
                  {' '}
                  <FontAwesomeIcon icon="medal" />
                  <div className={styles.description}>
                    <div className={styles.info}>
                      {hostname}
                      {' '}
                      is a Superhost
                    </div>
                    <div className={styles.comment}>
                      Superhosts are experienced, highly rated hosts who are
                      committed to providing great stays for guests.
                    </div>
                  </div>
                </div>
              )
              : null
}
        {
            !partiesEvents
              ? (
                <div className={styles.section}>
                  {' '}
                  <FontAwesomeIcon icon="book-open" />
                  <div className={styles.description}>
                    <div className={styles.info}>House rules</div>
                    <div className={styles.comment}>
                      The host doesn’t allow
                      parties or smoking.
                      <button
                        type="button"
                        className={styles.button}
                        onClick={
                          () => {
                            setShowDetails(true);
                          }
                        }
                      >
                        Get Details
                      </button>
                      {showDetails
                        ? (
                          <GetDetailsModal
                            checkIn={checkIn}
                            checkOut={checkOut}
                            selfCheckIn={selfCheckIn}
                            kidFriendly={kidFriendly}
                            infantFriendly={infantFriendly}
                            pets={pets}
                            smoking={smoking}
                            partiesEvents={partiesEvents}
                            additionalRules={additionalRules}
                            closeModal={closeModal}
                          />
                        )
                        : null}
                    </div>
                  </div>
                </div>
              )
              : null
}
      </div>
    </div>
  );
};

QuickInfo.propTypes = {
  data: PropTypes.shape({
    checkIn: PropTypes.number.isRequired,
    checkOut: PropTypes.number.isRequired,
    selfCheckIn: PropTypes.bool.isRequired,
    kidFriendly: PropTypes.bool.isRequired,
    infantFriendly: PropTypes.bool.isRequired,
    pets: PropTypes.bool.isRequired,
    smoking: PropTypes.bool.isRequired,
    partiesEvents: PropTypes.bool.isRequired,
    additionalRules: PropTypes.string.isRequired,
    enhancedClean: PropTypes.bool.isRequired,
    superhost: PropTypes.bool.isRequired,
    entireLodge: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    hostname: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuickInfo;
