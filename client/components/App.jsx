import React, { useState, useEffect } from 'react';
import BedInfos from './BedInfos';
import Description from './Description';
import LodgeHeader from './LodgeHeader';
import QuickInfo from './QuickInfo';

const axios = require('axios');

const App = (props) => {
  const [data, setData] = useState([]);

  const randomId = () => {
    const randomNum = Math.floor(Math.random() * Math.floor(100)) + 1;
    return randomNum;
  };

  const loadData = (id) => {
    axios.get(`/api/homes/${id}/info`)
      .then((response) => {
        console.log(response.data[0]);
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

  return (
    <div>
      <text>hellooooooo</text>
      <LodgeHeader data={data}/>
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
