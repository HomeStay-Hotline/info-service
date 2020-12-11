import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../public/style/Description_style.css';

const Description = ({ data }) => {
  const [link, changeLink] = useState(false);
  const [isLong, changeIsLong] = useState(false);
  const [truncateStr, changeTruncateStr] = useState('');

  let descriptionLength = [data.description, data.desspace, data.guestaccess, data.otherthings];

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
    if (data.desspace) {
      groupedInfo.push('The Space', data.desspace);
    }
    if (data.guestaccess) {
      groupedInfo.push('Guest Access', data.guestaccess);
    }
    if (data.otherthings) {
      groupedInfo.push('Other Things To Note', data.otherthings);
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
          data.desspace
            ? (
              <div>
                <p />
                <span className={styles.d_header}>The space</span>
                <br />
                <span className={styles.d_details}>{data.desspace}</span>
              </div>
            )
            : null
        }
        {
          data.guestaccess
            ? (
              <div>
                <p />
                <span className={styles.d_header}>Guest Access</span>
                <br />
                <span className={styles.d_details}>{data.guestaccess}</span>
              </div>
            )
            : null
        }
        {
          data.otherthings
            ? (
              <div>
                <p />
                <span className={styles.d_header}>Other Things To Note</span>
                <p />
                <span className={styles.d_details}>{data.otherthings}</span>
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
    desspace: PropTypes.string.isRequired,
    guestaccess: PropTypes.string.isRequired,
    otherthings: PropTypes.string.isRequired,
  }).isRequired,
};

export default Description;
