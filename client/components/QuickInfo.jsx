import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../public/style/QuickInfo_style.css';
import CleanModal from './CleanModal';
import GetDetailsModal from './GetDetailsModal';

const QuickInfo = ({ data }) => {
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
          data.entireLodge
            ? (
              <div className={styles.section}>
                {' '}
                <FontAwesomeIcon icon="home" size="1x" />
                <div className={styles.description}>
                  <div className={styles.info}>
                    Entire
                    {' '}
                    {data.type}
                  </div>
                  <div className={styles.comment}>
                    You'll have the
                    {' '}
                    {data.type}
                    {' '}
                    to yourself
                  </div>
                </div>
              </div>
            )
            : null
}
        {// check if enhancedclean
            data.enhancedClean
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
                        id="clean-button"
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
            data.selfCheckIn
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
            data.superhost
              ? (
                <div className={styles.section}>
                  {' '}
                  <FontAwesomeIcon icon="medal" />
                  <div className={styles.description}>
                    <div className={styles.info}>
                      {data.hostname}
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
            !data.partiesEvents
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
                        id="rules-button"
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
                            checkIn={data.checkIn}
                            checkOut={data.checkOut}
                            selfCheckIn={data.selfCheckIn}
                            kidFriendly={data.kidFriendly}
                            infantFriendly={data.infantFriendly}
                            pets={data.pets}
                            smoking={data.smoking}
                            partiesEvents={data.partiesEvents}
                            additionalRules={data.additionalRules}
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
    checkIn: PropTypes.string.isRequired,
    checkOut: PropTypes.string.isRequired,
    selfCheckIn: PropTypes.number.isRequired,
    kidFriendly: PropTypes.number.isRequired,
    infantFriendly: PropTypes.number.isRequired,
    pets: PropTypes.number.isRequired,
    smoking: PropTypes.number.isRequired,
    partiesEvents: PropTypes.number.isRequired,
    additionalRules: PropTypes.string.isRequired,
    enhancedClean: PropTypes.number.isRequired,
    superhost: PropTypes.number.isRequired,
    entireLodge: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    hostname: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuickInfo;
