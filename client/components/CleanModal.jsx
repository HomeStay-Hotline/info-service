import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../public/style/Modal_style.css';

const CleanModal = ({ closeModal }) => {
  // const {
  //   closeModal,
  // } = props;

  const handleClick = () => {
    closeModal(false, 0);
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
        <div className={styles.cleanheader}>
          <FontAwesomeIcon icon="star" size="4x" className={styles.staricon} />
          <div className={styles.heading}>Enhanced Clean</div>
          <p className={styles.desc}>
            committed to Airbnb’s 5-step enhanced cleaning process—a set of standards develope
            d in partnership with experts, for the times of COVID-19 and beyond.
          </p>
          <p className={styles.desc}>Here’s what committed to doing before every stay:</p>
        </div>
        <div>
          <table id="cleanModal">
            <tr>
              <td>
                <div className={styles.tablecolumn}>
                  <div className={styles.info}><FontAwesomeIcon icon="clipboard-check" size="2x" /></div>
                  <div className={styles.info}>
                    <div className={styles.maininfo}>Sanitize surfaces</div>
                    Sanitize every high-touch surface, down to the doorknob
                  </div>
                </div>
              </td>
              <td>
                <div className={styles.tablecolumn}>
                  <div className={styles.info}><FontAwesomeIcon icon="clipboard-check" size="2x" /></div>
                  <div className={styles.info}>
                    <div className={styles.maininfo}>Thoroughly clean</div>
                    Refer to our extensive checklists while cleaning room-by-room
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.tablecolumn}>
                  <div className={styles.info}><FontAwesomeIcon icon="clipboard-check" size="2x" /></div>
                  <div className={styles.info}>
                    <div className={styles.maininfo}>Wash all linens</div>
                    Wash linens at a high heat setting
                  </div>
                </div>
              </td>
              <td>
                <div className={styles.tablecolumn}>
                  <div className={styles.info}><FontAwesomeIcon icon="clipboard-check" size="2x" /></div>
                  <div className={styles.info}>
                    <div className={styles.maininfo}>Use approved products</div>
                    Use cleaners approved by health experts, like disinfectants with 70% alcohol
                    or higher
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.tablecolumn}>
                  <div className={styles.info}><FontAwesomeIcon icon="clipboard-check" size="2x" /></div>
                  <div className={styles.info}>
                    <div className={styles.maininfo}>Wear a mask and gloves</div>
                    Help avoid cross-contamination by wearing a mask and gloves
                  </div>
                </div>
              </td>
              <td>
                <div className={styles.tablecolumn}>
                  <div className={styles.info}><FontAwesomeIcon icon="clipboard-check" size="2x" /></div>
                  <div className={styles.info}>
                    <div className={styles.maininfo}>Follow all other local guidance</div>
                    Comply with local laws, including any additional safety or cleaning guidelines
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div />
      </div>
    </div>
  );
};

CleanModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default CleanModal;
