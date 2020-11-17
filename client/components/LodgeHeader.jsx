import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../public/style/lodgeheader_style.css';

const LodgeHeader = (props) => {
  const {
    data: {
      entire_lodge, hostname, type, max_guests, bedroom, beds, bath, hostimg,
    },
  } = props;
  const [lodgetype, changeType] = useState(true);

  useEffect(() => {
    if (entire_lodge === 'false') {
      changeType(false);
    }
  });

  return (
    <div className="border">
      <div className="divider">
        <div className="header">
          {lodgetype ? 'Entire ' : 'Private Room in '}
          {type}
          {' '}
          by
          {' '}
          {hostname}
        </div>
        <div className="subheader">
          <span>
            {max_guests}
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
      <div className="hostimage">
        <img className="imagesize" src={hostimg} alt="host" />
      </div>
    </div>
  );
};

LodgeHeader.propTypes = {
  data: PropTypes.shape({
    entire_lodge: PropTypes.string.isRequired,
    hostname: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    max_guests: PropTypes.number.isRequired,
    bedroom: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
    bath: PropTypes.number.isRequired,
    hostimg: PropTypes.string.isRequired,
  }).isRequired,
};

export default LodgeHeader;
