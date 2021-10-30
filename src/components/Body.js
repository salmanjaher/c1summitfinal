import React, { useState, useEffect } from 'react';
import Activities from './Activities';
import Parks from './Parks';

const url =
  'https://developer.nps.gov/api/v1/parks?limit=496&api_key=wbakT9pi2jO0k5wzrWTRx9F3FbElu7z0alH59mqz';

function Body() {
  const [parkData, setParkData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const data = await fetch(url);
    const info = await data.json();
    setParkData(info);
    setIsLoading(false);
    console.log(info.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <div>
        <Activities />
        {parkData.data.map((park) => {
          return <Parks key={park.id} data={park} />;
        })}
      </div>
    );
  } else {
    return <h1>Loading data...</h1>;
  }
}

export default Body;
