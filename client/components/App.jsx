import React, { useState, useEffect } from 'react';
import BedInfos from './BedInfos';
import Description from './Description';
import LodgeHeader from './LodgeHeader';
import QuickInfo from './QuickInfo';

const axios = require('axios');

const App = () => {
  const [data, setData] = useState([]);

  const randomId = () => {
    const randomNum = Math.floor(Math.random() * Math.floor(100)) + 1;
    return randomNum;
  };

  const loadData = (id) => {
    axios.get(`/api/homes/${id}/info`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error, 'this is an error get');
      });
  };

  useEffect(() => {
    console.log('use effect worked');
    loadData(randomId());
  }, []);

  return (
    <div>
      <text>hellooooooo</text>
      <LodgeHeader />
      <text>--------------</text>
      <QuickInfo />
      <text>--------------</text>
      <Description />
      <text>--------------</text>
      <BedInfos />
    </div>
  );
};

export default App;
