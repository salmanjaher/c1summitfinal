import React from 'react';
import WatchItem from './WatchItem';

function WebStream({ watchHandle, watchListData }) {
  if (watchListData.length === 0) {
    return (
      <>
        <button onClick={watchHandle}>Back</button>
        <h1>You have nothing on your watchlist!</h1>
        <h2>Please add some on the previous page.</h2>
      </>
    );
  } else {
    return (
      <>
        <button onClick={watchHandle}>Back</button>
        {watchListData.map((item) => {
          return <WatchItem key={item} parkCode={item} />;
        })}
      </>
    );
  }
}

export default WebStream;
