import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../public/style/lodgeheader_style.css';

const LodgeHeader = (props) => {
  const {
    data: {
      entireLodge, hostname, type, maxGuests, bedroom, beds, bath, hostimg,
    },
  } = props;
  const [lodgetype, changeType] = useState(true);

  useEffect(() => {
    if (entireLodge) {
      changeType(false);
    }
  });

  return (
    <div className={styles.border}>
      <div className={styles.divider}>
        <div className={styles.header}>
          {lodgetype ? 'Entire ' : 'Private Room in '}
          {type}
          {' '}
          by
          {' '}
          {hostname}
        </div>
        <div className={styles.subheader}>
          <span>
            {maxGuests}
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
      <div className={styles.hostimage}>
        <img className={styles.imagesize} src={hostimg} alt="host" />
      </div>
    </div>
  );
};

LodgeHeader.propTypes = {
  data: PropTypes.shape({
    entireLodge: PropTypes.number.isRequired,
    hostname: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    maxGuests: PropTypes.number.isRequired,
    bedroom: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
    bath: PropTypes.number.isRequired,
    hostimg: PropTypes.string.isRequired,
  }).isRequired,
};

export default LodgeHeader;
