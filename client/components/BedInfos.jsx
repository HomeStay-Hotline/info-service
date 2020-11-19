import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../public/style/BedInfos_style.css';

const BedInfos = ({ data }) => {
  // const {
  //   data: {
  //     bedroom,
  //     beds,
  //   },
  // } = props;

  const bedroomArray = Array(data.bedroom).fill().map((e, i) => i + 1);

  return (
    <div>
      <h4>Sleeping Arrangements</h4>
      <table className={styles.table}>
        {bedroomArray.map((item) => (
          <th className={styles.part}>
            <tr>
              <td><FontAwesomeIcon icon="bed" size="lg" /></td>
            </tr>
            <tr className={styles.bed}>
              Bedroom
              {item}
            </tr>
            <tr className={styles.beddesc}>1 king bed</tr>
          </th>
        ))}
      </table>
    </div>
  );
};

BedInfos.propTypes = {
  data: PropTypes.shape({
    bedroom: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
  }).isRequired,
};

export default BedInfos;
