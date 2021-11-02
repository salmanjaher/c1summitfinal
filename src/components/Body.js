import React, { useState, useEffect } from 'react';
import Activities from './Activities';
import Parks from './Parks';
import WebStream from './WebStream';

const url =
  'https://developer.nps.gov/api/v1/parks?limit=496&api_key=wbakT9pi2jO0k5wzrWTRx9F3FbElu7z0alH59mqz';

function Body() {
  const [isLoading, setIsLoading] = useState(true);
  const [parkList, setParkList] = useState([]);
  const [choices, setChoices] = useState([]);
  const [watchList, setWatchList] = useState(false);
  const [watchListData, setWatchListData] = useState([]);

  const addChoices = (name) => {
    if (!choices.includes(name)) {
      setChoices([...choices, name]);
    }
  };

  const watchHandle = () => {
    setWatchList(!watchList);
  };

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

  const fetchData = async () => {
    const data = await fetch(url);
    const info = await data.json();
    setParkList(info.data);
    setIsLoading(false);
  };

  const reset = () => {
    fetchData();
    setChoices([]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (parkList.length === 0) {
    return (
      <>
        <Activities
          key={parkList.id}
          addChoices={addChoices}
          reset={reset}
          filterActivity={filterActivity}
          choices={choices}
        />
        <h1>No matching results...</h1>
      </>
    );
  }
  if (watchList) {
    return (
      <>
        <WebStream watchHandle={watchHandle} watchListData={watchListData} />
      </>
    );
  }
  if (!isLoading) {
    return (
      <div>
        <button onClick={watchHandle}>To Watchlist</button>
        <Activities
          key={parkList.id}
          addChoices={addChoices}
          reset={reset}
          filterActivity={filterActivity}
          choices={choices}
        />
        {parkList.map((park) => {
          return <Parks key={park.id} data={park} />;
        })}
      </div>
    );
  } else {
    return <h1>Loading data...</h1>;
  }
}

export default Body;
