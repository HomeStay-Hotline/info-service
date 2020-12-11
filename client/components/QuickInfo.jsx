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
    <div className={styles.qfmain}>
      <div>
        {// check if entireLodge
          data.entirelodge
            ? (
              <div className={styles.qfsection}>
                {' '}
                <FontAwesomeIcon icon="home" size="1x" />
                <div className={styles.qfdescription}>
                  <div className={styles.qfinfo}>
                    Entire
                    {' '}
                    {data.type}
                  </div>
                  <div className={styles.qfcomment}>
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
            data.enhancedclean
              ? (
                <div className={styles.qfsection}>
                  {' '}
                  <FontAwesomeIcon icon="star" />
                  <div className={styles.qfdescription}>
                    <div className={styles.qfinfo}>Enhanced Clean</div>
                    <div className={styles.qfcomment}>
                      This host committed to Airbnb's 5-step enhanced cleaning process.
                      <button
                        type="button"
                        id="clean-button"
                        className={styles.qfbutton}
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
        {// check if selfcheckin
            data.selfcheckin
              ? (
                <div className={styles.qfsection}>
                  {' '}
                  <FontAwesomeIcon icon="door-closed" />
                  <div className={styles.qfdescription}>
                    <div className={styles.qfinfo}>Self check-in</div>
                    <div className={styles.qfcomment}>Check yourself in with the lockbox.</div>
                  </div>
                </div>
              )
              : null
}
        {
            data.superhost
              ? (
                <div className={styles.qfsection}>
                  {' '}
                  <FontAwesomeIcon icon="medal" />
                  <div className={styles.qfdescription}>
                    <div className={styles.qfinfo}>
                      {data.hostname}
                      {' '}
                      is a Superhost
                    </div>
                    <div className={styles.qfcomment}>
                      Superhosts are experienced, highly rated hosts who are
                      committed to providing great stays for guests.
                    </div>
                  </div>
                </div>
              )
              : null
}
        {
            !data.partiesevents
              ? (
                <div className={styles.qfsection}>
                  {' '}
                  <FontAwesomeIcon icon="book-open" />
                  <div className={styles.qfdescription}>
                    <div className={styles.qfinfo}>House rules</div>
                    <div className={styles.qfcomment}>
                      The host doesn’t allow
                      parties or smoking.
                      <button
                        type="button"
                        className={styles.qfbutton}
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
                            checkin={data.checkin}
                            checkout={data.checkout}
                            selfcheckin={data.selfcheckin}
                            kidfriendly={data.kidfriendly}
                            infantfriendly={data.infantfriendly}
                            pets={data.pets}
                            smoking={data.smoking}
                            partiesevents={data.partiesevents}
                            additionalrules={data.additionalrules}
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
    checkin: PropTypes.string.isRequired,
    checkout: PropTypes.string.isRequired,
    selfcheckin: PropTypes.number.isRequired,
    kidfriendly: PropTypes.number.isRequired,
    infantfriendly: PropTypes.number.isRequired,
    pets: PropTypes.number.isRequired,
    smoking: PropTypes.number.isRequired,
    partiesevents: PropTypes.number.isRequired,
    additionalrules: PropTypes.string.isRequired,
    enhancedclean: PropTypes.number.isRequired,
    superhost: PropTypes.number.isRequired,
    entireLodge: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    hostname: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuickInfo;
