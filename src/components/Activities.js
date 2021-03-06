import React, { useEffect, useState } from 'react';
import Activity from './Activity';
import '../styles/main.css';

// URL for list of activities from NPS Api
const API_KEY = process.env.REACT_APP_API_KEY;

// Function handles all activities and their data and buttons.
function Activities({ filterActivity, reset, addChoices, choices }) {
  // State variables
  const [activityData, setActivityData] = useState([]);
  const [showActivities, setShowActivities] = useState(true);

  // API data fetching.
  const fetchData = async () => {
    const data = await fetch(
      `https://developer.nps.gov/api/v1/activities?api_key=${API_KEY}`
    );
    const info = await data.json();
    setActivityData(info);
  };

  // Initial render of component.
  useEffect(() => {
    fetchData();
  }, []);

  // Shows all activities based on click of a button.
  const handleClick = () => {
    setShowActivities(!showActivities);
  };

  // Conditionally rendering of activity selection menu
  if (!showActivities) {
    return (
      <>
        <button
          class='bg-yellow-700 hover:bg-yellow-800 font-thin text-xl text-white py-1 px-2 rounded-r'
          onClick={handleClick}
        >
          View Activities
        </button>
        <br />
        <br />
        <button
          class='bg-yellow-700 hover:bg-yellow-800 font-thin  text-2xl text-white py-1 px-2 rounded'
          onClick={reset}
        >
          Reset
        </button>
        <br />
        <p class='pt-1'>
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
          return <h5 class='underline font-medium'>{choice} </h5>;
        })}
      </>
    );
  } else {
    return (
      <>
        <button
          class='bg-yellow-700 hover:bg-yellow-800 font-thin text-xl text-white py-1 px-2 rounded-r'
          onClick={handleClick}
        >
          View Activities
        </button>
      </>
    );
  }
}

export default Activities;
