import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../public/style/Description_style.css';

const Description = ({ data }) => {
  const [link, changeLink] = useState(false);
  const [isLong, changeIsLong] = useState(false);
  const [truncateStr, changeTruncateStr] = useState('');

  let descriptionLength = [data.description, data.desSpace, data.guestAccess, data.otherThings];

  const url = 'http://www.airbnb.com';

  descriptionLength = descriptionLength.reduce((total, str) => {
    if (str) {
      return total + str.length;
    }
    return total;
  }, 0);

  const handleClick = () => {
    changeLink(true);
  };

  const stringifyAll = () => {
    const groupedInfo = [];
    if (data.description) {
      groupedInfo.push(data.description);
    }
    if (data.desSpace) {
      groupedInfo.push('The Space', data.desSpace);
    }
    if (data.guestAccess) {
      groupedInfo.push('Guest Access', data.guestAccess);
    }
    if (data.otherThings) {
      groupedInfo.push('Other Things To Note', data.otherThings);
    }
    const newInfo = groupedInfo.join('\n');
    const truncatedString = newInfo.slice(0, 250);
    changeIsLong(true);
    changeTruncateStr(`${truncatedString}...`);
  };

  if (descriptionLength > 250 && truncateStr === '') {
    stringifyAll();
  }

  if (isLong && !link) {
    return (
      <div className={styles.d_bodyText}>
        <div className={styles.d_text}>
          {truncateStr}
          <button type="button" className={styles.d_expand} onClick={handleClick}>{link ? null : 'read more'}</button>
        </div>
        <div className={styles.d_contact}>
          <a href={url} className={styles.d_login}>Contact Host</a>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.d_bodyText}>
      <div className={styles.d_text}>
        {
          data.description
            ? <span className={styles.d_details}>{data.description}</span>
            : null
        }
        {
          data.desSpace
            ? (
              <div>
                <p />
                <span className={styles.d_header}>The space</span>
                <br />
                <span className={styles.d_details}>{data.desSpace}</span>
              </div>
            )
            : null
        }
        {
          data.guestAccess
            ? (
              <div>
                <p />
                <span className={styles.d_header}>Guest Access</span>
                <br />
                <span className={styles.d_details}>{data.guestAccess}</span>
              </div>
            )
            : null
        }
        {
          data.otherThings
            ? (
              <div>
                <p />
                <span className={styles.d_header}>Other Things To Note</span>
                <p />
                <span className={styles.d_details}>{data.otherThings}</span>
              </div>
            )
            : null
        }
      </div>
      <div className={styles.d_contact}>
        <a href={url} className={styles.d_login}>Contact Host</a>
      </div>
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    desSpace: PropTypes.string.isRequired,
    guestAccess: PropTypes.string.isRequired,
    otherThings: PropTypes.string.isRequired,
  }).isRequired,
};

export default Description;
