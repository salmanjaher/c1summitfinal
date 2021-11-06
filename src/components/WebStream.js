import React from 'react';
import WatchItem from './WatchItem';

// Deliverable 2 Webpage handler
function WebStream({ watchHandle, watchListData, removeFromList }) {
  // Conditional rendering and listing of watchlist items based on user addition.
  if (watchListData.length === 0) {
    return (
      <>
        <br />
        <button onClick={watchHandle}>Back</button>
        <h1>You have nothing on your watchlist!</h1>
        <h2>Please add some on the previous page.</h2>
      </>
    );
  } else {
    return (
      <>
        <br />
        <button onClick={watchHandle}>Back</button>
        {watchListData.map((item) => {
          return (
            <WatchItem
              removeFromList={removeFromList}
              key={item}
              parkCode={item}
            />
          );
        })}
      </>
    );
  }
}

export default WebStream;
