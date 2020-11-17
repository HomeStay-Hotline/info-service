import React, { useState, useEffect } from 'react';
import BedInfos from './BedInfos';
import Description from './Description';
import LodgeHeader from './LodgeHeader';
import QuickInfo from './QuickInfo';
import styles from '../../public/style/App_style.css';

const axios = require('axios');

const App = () => {
  const [data, setData] = useState([]);
  const [info, updateInfo] = useState([]);

  const randomId = () => {
    const randomNum = Math.floor(Math.random() * Math.floor(100)) + 1;
    return randomNum;
  };

  const loadData = (id) => {
    axios.get(`/api/homes/${id}/info`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log(error, 'this is an error get');
      });
  };

  useEffect(() => {
    loadData(randomId());
  }, []);

  if (!data) {
    return 'load....ing';
  }



  console.log(data, info, 'from app');

  return (
    <div>
      <LodgeHeader data={data} />
      <hr />
      <QuickInfo data={data} />
      <hr />
      <Description data={data}/>
      <hr />
      <BedInfos />
    </div>
  );
};

export default App;
