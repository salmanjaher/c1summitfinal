import React from 'react';
import WatchItem from './WatchItem';

// Deliverable 2 Webpage handler
function WebStream({ watchHandle, watchListData, removeFromList }) {
  // Conditional rendering and listing of watchlist items based on user addition.
  if (watchListData.length === 0) {
    return (
      <>
        <br />
        <button
          class='bg-yellow-700 hover:bg-yellow-800 font-thin text-white py-1 px-20 rounded text-2xl'
          onClick={watchHandle}
        >
          Back
        </button>
        <h1 class='pt-2 text-3xl font-sans font-bold'>
          You have nothing on your watchlist!
        </h1>
        <h2 class='text-lg font-mono underline pb-6 '>
          Please add some on the previous page.
        </h2>
      </>
    );
  } else {
    return (
      <>
        <br />
        <button
          className='bg-yellow-700 hover:bg-yellow-800 font-thin text-white py-1 px-20 rounded text-2xl'
          onClick={watchHandle}
        >
          Back
        </button>
        <div class='grid grid-cols-3 gap-x-4 p-4 gap-y-3'>
          {watchListData.map((item) => {
            return (
              <WatchItem
                removeFromList={removeFromList}
                key={item}
                parkCode={item}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default WebStream;
