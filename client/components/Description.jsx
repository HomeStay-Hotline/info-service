import React, { useState, version } from 'react';
import PropTypes from 'prop-types';
import styles from '../../public/style/Description_style.css';

const Description = (props) => {
  const {
    data: {
      description,
      desSpace,
      guestAccess,
      otherThings,
    },
  } = props;
  const [link, changeLink] = useState(false);
  const [isLong, changeIsLong] = useState(false);
  const [truncateStr, changeTruncateStr] = useState('');

  // const descriptionLength = description.length + desSpace.length + guestAccess.length + otherThings.length;

  let descriptionLength = [description, desSpace, guestAccess, otherThings];
  console.log(descriptionLength, 'array version');
  descriptionLength = descriptionLength.reduce((total, str) => {
    if (str) {
      return total + str.length;
    }
    return total;
  }, 0);

  console.log(descriptionLength, 'length of description');

  const handleClick = () => {
    changeLink(true);
  };

  const stringifyAll = () => {
    const groupedInfo = [];
    if (description) {
      groupedInfo.push(description);
    }
    if (desSpace) {
      groupedInfo.push('<b>{The Space}</b>', desSpace);
    }
    if (guestAccess) {
      groupedInfo.push('<b>{Guest Access}</b>', guestAccess);
    }
    if (otherThings) {
      groupedInfo.push('<b>{Other Things To Note}</b>', otherThings);
    }
    const newInfo = groupedInfo.join('\n\n');
    const truncatedString = newInfo.slice(0, 250);
    changeIsLong(true);
    changeTruncateStr(truncatedString);
  };

  if (descriptionLength > 250 && truncateStr === '') {
    stringifyAll();
  }

  if (isLong && !link) {
    return (
      <div className={styles.bodyText}>
        <div className={styles.text}>
          {truncateStr}
        </div>
        <button type="button" className={styles.expand} onClick={handleClick}>{link ? null : 'read more'}</button>
        <div className={styles.contact}><a href="www.airbnb.com" className={styles.login}>Contact Host</a></div>
      </div>
    );
  }
  return (
    <div className={styles.bodyText}>
      <div className={styles.text}>
        {
         description
           ? <span className={styles.details}>{description}</span>
           : null
        }
        {
        desSpace
          ? (
            <div>
              <p />
              <span className={styles.header}>The space</span>
              <br />
              <span className={styles.details}>{desSpace}</span>
            </div>
          )
          : null
        }
        {
         guestAccess
           ? (
             <div>
               <p />
               <span className={styles.header}>Guest Access</span>
               <br />
               <span className={styles.details}>{guestAccess}</span>
             </div>
           )
           : null
        }
        {
          otherThings
            ? (
              <div>
                <p />
                <span className={styles.header}>Other Things To Note</span>
                <p />
                <span className={styles.details}>{otherThings}</span>
              </div>
            )
            : null
        }
      </div>
      <div className={styles.contact}><a href="www.airbnb.com" className={styles.login}>Contact Host</a></div>
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
