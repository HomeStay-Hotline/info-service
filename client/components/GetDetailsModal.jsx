import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../public/style/Modal_style.css';

const GetDetailsModal = (props) => {
  const {
    checkin,
    checkout,
    selfcheckin,
    kidfriendly,
    infantfriendly,
    pets,
    smoking,
    partiesevents,
    additionalrules,
    closeModal,
  } = props;

  const handleClick = () => {
    closeModal(false, 1);
  };

  return (
    <div id="modalBG" className={styles.m_modalmain}>
      <div className={styles.m_modalContent}>
        <div>
          <button
            type="button"
            className={styles.m_button}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
        <span className={styles.m_heading}>
          House rules
        </span>
        <table id="rules">
          <tr>
            <div className={styles.m_rulegroup}>
              <div><FontAwesomeIcon icon="clock" size="1px" /></div>
              <div className={styles.m_rules}>
                Check-In:
                {' '}
                After
                {' '}
                {checkin}
                :00 PM
              </div>
            </div>
          </tr>
          <tr>
            <div className={styles.m_rulegroup}>
              <div><FontAwesomeIcon icon="clock" /></div>
              <div className={styles.m_rules}>
                Check-Out:
                {checkout}
                :00 AM
              </div>
            </div>
          </tr>
          { selfcheckin
            ? (
              <tr>
                <div className={styles.m_rulegroup}>
                  <div><FontAwesomeIcon icon="key" /></div>
                  <div className={styles.m_rules}>Self check-in with lockbox</div>
                </div>
              </tr>
            )
            : null}
          { kidfriendly
            ? null
            : (
              <tr>
                <div className={styles.m_rulegroup}>
                  <div><FontAwesomeIcon icon="times" /></div>
                  <div className={styles.m_rules}>Not suitable for (2-12years)</div>
                </div>
                {' '}

              </tr>
            )}
          { infantfriendly
            ? null
            : (
              <tr>
                <div className={styles.m_rulegroup}>
                  <div><FontAwesomeIcon icon="times" /></div>
                  <div className={styles.m_rules}>Not suitable for (0-2years)</div>
                </div>
              </tr>
            )}
          { pets
            ? (
              <tr>
                <div className={styles.m_rulegroup}>
                  <div><FontAwesomeIcon icon="paw" /></div>
                  <div className={styles.m_rules}>Pets are allowed</div>
                </div>
              </tr>
            )
            : (
              <tr>
                <div className={styles.m_rulegroup}>
                  <div><FontAwesomeIcon icon="times" /></div>
                  <div className={styles.m_rules}>No pets allowed</div>
                </div>
              </tr>
            )}
          { smoking
            ? (
              <tr>
                <div className={styles.m_rulegroup}>
                  <div><FontAwesomeIcon icon="smoking" /></div>
                  <div className={styles.m_rules}>Smoking is allowed</div>
                </div>
              </tr>
            )
            : (
              <tr>
                <div className={styles.m_rulegroup}>
                  <div><FontAwesomeIcon icon="smoking-ban" /></div>
                  <div className={styles.m_rules}>Smoking is not allowed</div>
                </div>
              </tr>
            )}
          { partiesevents
            ? null
            : (
              <tr>
                <div className={styles.m_rulegroup}>
                  <div><FontAwesomeIcon icon="bell" /></div>
                  <div className={styles.m_rules}>No parties or events</div>
                </div>
              </tr>
            )}
        </table>
        { (additionalrules.length > 0)
          ? (
            <div>
              <h4>Additional rules</h4>
              <p className={styles.m_rules}>{additionalrules}</p>
            </div>
          )
          : null}
      </div>
    </div>
  );
};

GetDetailsModal.propTypes = {
  checkin: PropTypes.number.isRequired,
  checkout: PropTypes.number.isRequired,
  selfcheckin: PropTypes.bool.isRequired,
  kidfriendly: PropTypes.bool.isRequired,
  infantfriendly: PropTypes.bool.isRequired,
  pets: PropTypes.bool.isRequired,
  smoking: PropTypes.bool.isRequired,
  partiesevents: PropTypes.bool.isRequired,
  additionalrules: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default GetDetailsModal;
