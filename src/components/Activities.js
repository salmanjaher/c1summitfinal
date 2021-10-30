import React, { useEffect, useState } from 'react';
import Activity from './Activity';

const url =
  'https://developer.nps.gov/api/v1/activities?api_key=wbakT9pi2jO0k5wzrWTRx9F3FbElu7z0alH59mqz';
/*  ACTIVITES API CALL */

function Activities() {
  const [parkData, setParkData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const data = await fetch(url);
    const info = await data.json();
    setParkData(info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  if (!isLoading) {
    return (
      <>
        <button onClick={handleClick}>View Activities</button>
        <p>
          {parkData.data.map((park) => {
            return <Activity key={park.id} {...park} />;
          })}
        </p>
      </>
    );
  } else {
    return (
      <>
        <button onClick={handleClick}>View Activities</button>
      </>
    );
  }
}

export default Activities;
