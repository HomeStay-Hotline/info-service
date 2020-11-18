import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../public/style/CleanModal_style.css';

const CleanModal = (props) => {
  const {
    closeModal,
  } = props;

  const handleClick = () => {
    closeModal(false);
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
        <div>
          <FontAwesomeIcon icon="star" size="4x" />
          <span className={styles.heading}>Enhanced Clean</span>
          <p>
            committed to Airbnb’s 5-step enhanced cleaning process—a set of standards develope
            d in partnership with experts, for the times of COVID-19 and beyond.
          </p>
          <p>Here’s what committed to doing before every stay:</p>
        </div>
        <div>
          <table>
            <tr>
              <td>
                <div><FontAwesomeIcon icon="clipboard-check" /></div>
                <div>
                  <div>Sanitize surfaces</div>
                  Sanitize every high-touch surface, down to the doorknob
                </div>
              </td>
              <td>
                <div><FontAwesomeIcon icon="clipboard-check" /></div>
                <div>
                  <div>Thoroughly clean</div>
                  Refer to our extensive checklists while cleaning room-by-room
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div><FontAwesomeIcon icon="clipboard-check" /></div>
                <div>
                  <div>Wash all linens</div>
                  Wash linens at a high heat setting
                </div>
              </td>
              <td>
                <div><FontAwesomeIcon icon="clipboard-check" /></div>
                <div>
                  <div>Use approved products</div>
                  Use cleaners approved by health experts, like disinfectants with 70% alcohol
                  or higher
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div><FontAwesomeIcon icon="clipboard-check" /></div>
                <div>
                  <div>Wear a mask and gloves</div>
                  Help avoid cross-contamination by wearing a mask and gloves
                </div>
              </td>
              <td>
                <div><FontAwesomeIcon icon="clipboard-check" /></div>
                <div>
                  <div>Follow all other local guidance</div>
                  Comply with local laws, including any additional safety or cleaning guidelines
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
