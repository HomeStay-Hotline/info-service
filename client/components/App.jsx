import React, { useState, useEffect } from 'react';
// imported icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faStar,
  faDoorClosed,
  faMedal,
  faTimes,
  faClipboardCheck,
  faClock,
  faBed,
  faKey,
  faSmokingBan,
  faSmoking,
  faChild,
  faBaby,
  faPaw,
  faUsersSlash,
  faBell,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

import BedInfos from './BedInfos';
import Description from './Description';
import LodgeHeader from './LodgeHeader';
import QuickInfo from './QuickInfo';
import styles from '../../public/style/App_style.css';

const axios = require('axios');

const App = () => {
  const [data, setData] = useState({});

  // const randomId = () => {
  //   const randomNum = Math.floor(Math.random() * Math.floor(100)) + 1;
  //   return randomNum;
  // };

  const loadData = (id) => {
    axios.get(`/api/homes/${id}/info`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error, 'this is an error get');
      });
    console.log(data)
  };

  useEffect(() => {
    const name = window.location.pathname;
    const newN = name.split('/');
    loadData(newN[1]);
  }, []);

  if (!data) {
    return 'load....ing';
  }

  library.add(
    faHome,
    faStar,
    faTimes,
    faDoorClosed,
    faMedal,
    faBed,
    faClipboardCheck,
    faMedal,
    faBookOpen,
    faClock,
    faKey,
    faSmokingBan,
    faSmoking,
    faChild,
    faBaby,
    faPaw,
    faUsersSlash,
    faBell,
  );

  return (
    <div className={styles.aentirebody}>
      <LodgeHeader data={data} />
      <hr className={styles.aborder} />
      <QuickInfo data={data} />
      <hr className={styles.aborder} />
      <Description data={data} />
      <hr className={styles.aborder} />
      <BedInfos data={data} />
    </div>
  );
};

export default App;
