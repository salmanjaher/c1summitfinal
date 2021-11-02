import React from 'react';

function WebStream({ watchHandle, watchListData }) {
  return (
    <>
      <button onClick={watchHandle}>Back</button>
      <h1>Watch list</h1>
    </>
  );
}

export default WebStream;
