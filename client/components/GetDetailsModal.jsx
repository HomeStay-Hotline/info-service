import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../public/style/Modal_style.css';

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
    closeModal,
  } = props;

  const handleClick = () => {
    closeModal(false, 1);
  };

  return (
    <div id="modalBG" className={styles.modalmain}>
      <div className={styles.modalContent}>
        <div>
          <button
            type="button"
            className={styles.button}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
        <span className={styles.heading}>
          House rules
        </span>
        <table id="rules">
          <tr>
            <div className={styles.rulegroup}>
              <div><FontAwesomeIcon icon="clock" size="1px" /></div>
              <div className={styles.rules}>
                Check-In:
                {' '}
                After
                {' '}
                {checkIn}
                :00 PM
              </div>
            </div>
          </tr>
          <tr>
            <div className={styles.rulegroup}>
              <div><FontAwesomeIcon icon="clock" /></div>
              <div className={styles.rules}>
                Check-Out:
                {checkOut}
                :00 AM
              </div>
            </div>
          </tr>
          { selfCheckIn
            ? (
              <tr>
                <div className={styles.rulegroup}>
                  <div><FontAwesomeIcon icon="key" /></div>
                  <div className={styles.rules}>Self check-in with lockbox</div>
                </div>
              </tr>
            )
            : null}
          { kidFriendly
            ? null
            : (
              <tr>
                <div className={styles.rulegroup}>
                  <div><FontAwesomeIcon icon="times" /></div>
                  <div className={styles.rules}>Not suitable for (2-12years)</div>
                </div>
                {' '}

              </tr>
            )}
          { infantFriendly
            ? null
            : (
              <tr>
                <div className={styles.rulegroup}>
                  <div><FontAwesomeIcon icon="times" /></div>
                  <div className={styles.rules}>Not suitable for (0-2years)</div>
                </div>
              </tr>
            )}
          { pets
            ? (
              <tr>
                <div className={styles.rulegroup}>
                  <div><FontAwesomeIcon icon="paw" /></div>
                  <div className={styles.rules}>Pets are allowed</div>
                </div>
              </tr>
            )
            : (
              <tr>
                <div className={styles.rulegroup}>
                  <div><FontAwesomeIcon icon="times" /></div>
                  <div className={styles.rules}>No pets allowed</div>
                </div>
              </tr>
            )}
          { smoking
            ? (
              <tr>
                <div className={styles.rulegroup}>
                  <div><FontAwesomeIcon icon="smoking" /></div>
                  <div className={styles.rules}>Smoking is allowed</div>
                </div>
              </tr>
            )
            : (
              <tr>
                <div className={styles.rulegroup}>
                  <div><FontAwesomeIcon icon="smoking-ban" /></div>
                  <div className={styles.rules}>Smoking is not allowed</div>
                </div>
              </tr>
            )}
          { partiesEvents
            ? null
            : (
              <tr>
                <div className={styles.rulegroup}>
                  <div><FontAwesomeIcon icon="bell" /></div>
                  <div className={styles.rules}>No parties or events</div>
                </div>
              </tr>
            )}
        </table>
        { (additionalRules.length > 0)
          ? (
            <div>
              <h4>Additional rules</h4>
              <p className={styles.rules}>{additionalRules}</p>
            </div>
          )
          : null}
      </div>
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
  closeModal: PropTypes.func.isRequired,
};

export default GetDetailsModal;
