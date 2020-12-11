import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../public/style/lodgeheader_style.css';

const LodgeHeader = (props) => {
  const {
    data: {
      entirelodge, hostname, type, maxguests, bedroom, superhost, beds, bath, hostimg,
    },
  } = props;
  const [lodgetype, changeType] = useState(true);

  useEffect(() => {
    if (entirelodge) {
      changeType(false);
    }
  });

  return (
    <div className={styles.l_border}>
      <div className={styles.l_divider}>
        <div className={styles.l_header}>
          {lodgetype ? 'Entire ' : 'Private Room in '}
          {type}
          {' '}
          by
          {' '}
          {hostname}
        </div>
        <div className={styles.l_subheader}>
          <span>
            {maxguests}
            {' '}
            guests
          </span>
          <span> · </span>
          <span>
            {bedroom}
            {' '}
            bedrooms
          </span>
          <span> · </span>
          <span>
            {beds}
            {' '}
            beds
          </span>
          <span> · </span>
          <span>
            {bath}
            {' '}
            bath
          </span>
        </div>
      </div>
      <div className={styles.l_hostimage}>
        <img className={styles.l_hostImageBottom} src={hostimg} alt="host" />
        {superhost
          ? <FontAwesomeIcon icon="medal" size="2x" className={styles.l_superhostImageTop} />
          : null}
      </div>
    </div>
  );
};

LodgeHeader.propTypes = {
  data: PropTypes.shape({
    entirelodge: PropTypes.number.isRequired,
    hostname: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    maxguests: PropTypes.number.isRequired,
    bedroom: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
    bath: PropTypes.number.isRequired,
    superhost: PropTypes.number.isRequired,
    hostimg: PropTypes.string.isRequired,
  }).isRequired,
};

export default LodgeHeader;
