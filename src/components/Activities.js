import React, { useEffect, useState } from 'react';
import Activity from './Activity';

const url =
  'https://developer.nps.gov/api/v1/activities?api_key=wbakT9pi2jO0k5wzrWTRx9F3FbElu7z0alH59mqz';
/*  ACTIVITES API CALL */

function Activities({ filterActivity, reset, addChoices, choices }) {
  const [activityData, setActivityData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const data = await fetch(url);
    const info = await data.json();
    setActivityData(info);
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
        <br />
        <br />
        <button onClick={handleClick}>View Activities</button>
        <button onClick={reset}>Reset</button>
        <p>
          {activityData.data.map((activity) => {
            return (
              <Activity
                key={activity.id}
                addChoices={addChoices}
                filterActivity={filterActivity}
                {...activity}
              />
            );
          })}
        </p>
        {choices.map((choice) => {
          return <h5>{choice} </h5>;
        })}
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
