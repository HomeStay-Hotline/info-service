import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../public/style/BedInfos_style.css';

const BedInfos = ({ data }) => {
  const bedroomArray = Array(data.bedroom).fill().map((e, i) => i + 1);

  return (
    <div className={styles.bi_body}>
      <h4>Sleeping Arrangements</h4>
      <div className={styles.bi_table}>
        {bedroomArray.map((item) => (
          <div className={styles.bi_part} key={item}>
            <div><FontAwesomeIcon icon="bed" size="lg" /></div>
            <div className={styles.bi_bed}>
              Bedroom
              {' '}
              {item}
            </div>
            <div className={styles.bi_beddesc}>1 king bed</div>
          </div>
        ))}
      </div>
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

// return (
//   <div>
//     <h4>Sleeping Arrangements</h4>
//     <table className={styles.table}>
//       {bedroomArray.map((item, index) => (
//         <th className={styles.part}>
//           <tr>
//             <td><FontAwesomeIcon icon="bed" size="lg" /></td>
//           </tr>
//           <tr>
//             <div className={styles.bed}>
//               Bedroom
//               {' '}
//               {item}
//             </div>
//           </tr>
//           <tr className={styles.beddesc}>1 king bed</tr>
//         </th>
//       ))}
//     </table>
//   </div>
// );
