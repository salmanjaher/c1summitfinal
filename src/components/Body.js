import React, { useState, useEffect } from 'react';
import Activities from './Activities';
import Parks from './Parks';
import WebStream from './WebStream';
import '../styles/main.css';

// API acess to full list of parks.
const url =
  'https://developer.nps.gov/api/v1/parks?limit=496&api_key=wbakT9pi2jO0k5wzrWTRx9F3FbElu7z0alH59mqz';

/**
 * Function that handles all of the hard work and logic behind the web app.
 * Utilizes state variales to conditionally render different aspects of the website.
 * Many functions are created and used in deeper sub functions via prop drilling.
 */
function Body() {
  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [parkList, setParkList] = useState([]);
  const [choices, setChoices] = useState([]);
  const [watchList, setWatchList] = useState(false);
  const [watchListData, setWatchListData] = useState([]);

  // Adds an activity to the activity list when clicking it.
  const addChoices = (name) => {
    if (!choices.includes(name)) {
      setChoices([...choices, name]);
    }
  };

  // Manages state of page and wether or not to switch to the watchList page.
  const watchHandle = () => {
    setWatchList(!watchList);
  };

  // Removes a park from the watchList. (Deliverable 2)
  const removeFromList = (parkCode) => {
    setWatchListData(watchListData.filter((park) => park !== parkCode));
  };

  // Adds a park to the watchList. (Deliverable 2)
  const addToList = (parkCode) => {
    if (!watchListData.includes(parkCode)) {
      setWatchListData([...watchListData, parkCode]);
    }
  };

  // Filters list of activities based on activities chosen. (Deliverable 1)
  const filterActivity = (id) => {
    setParkList((parkList) => {
      return parkList.filter(
        (park) =>
          park.activities
            .map((parkItem) => parkItem.id === id)
            .includes(true) === true
      );
    });
  };

  // Fetchs data from NPS Api.
  const fetchData = async () => {
    const data = await fetch(url);
    const info = await data.json();
    setParkList(info.data);
    setIsLoading(false);
  };

  // Clears activity selection and resets data displayed on page.
  const reset = () => {
    fetchData();
    setChoices([]);
  };

  // Calls once during initial render to receive data from API.
  useEffect(() => {
    fetchData();
  }, []);

  // Conditional rendering of website.
  // If data is being loaded
  if (isLoading) {
    return (
      <h1 class='text-5xl p-10  text-xlfont-bold font-mono'>Loading data...</h1>
    );
  } else if (watchList) {
    // If on the watchList page
    return (
      <>
        <WebStream
          removeFromList={removeFromList}
          watchHandle={watchHandle}
          watchListData={watchListData}
        />
      </>
    );
  } else if (parkList.length === 0) {
    // If there are no parks after choosing the activities
    return (
      <>
        <br />
        <button
          class='bg-yellow-700 hover:bg-yellow-800 font-thin text-white text-xl py-1 px-2 rounded-l'
          onClick={watchHandle}
        >
          To Watchlist
        </button>
        <Activities
          key={parkList.id}
          addChoices={addChoices}
          reset={reset}
          filterActivity={filterActivity}
          choices={choices}
        />
        <h1 class='text-5xl p-10 font-bold font-mono'>
          No matching results...
        </h1>
      </>
    );
  } else {
    // Show list of parks
    return (
      <div>
        <br />
        <button
          class='bg-yellow-700 hover:bg-yellow-800 font-thin text-xl text-white py-1 px-2 rounded-l'
          onClick={watchHandle}
        >
          To Watchlist
        </button>
        <Activities
          key={parkList.id}
          addChoices={addChoices}
          reset={reset}
          filterActivity={filterActivity}
          choices={choices}
        />
        <div class='grid grid-cols-3 justify-items-center gap-x-4 p-4 gap-y-3'>
          {parkList.map((park) => {
            return <Parks addToList={addToList} key={park.id} data={park} />;
          })}
        </div>
      </div>
    );
  }
}

export default Body;
