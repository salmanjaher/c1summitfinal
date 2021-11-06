import React, { useState } from 'react';

// Displays each park as a dynamic object based on data passed in.
const Parks = ({ data, addToList }) => {
  // State variables
  const [moreLess, setMoreLess] = useState(false);
  // Conditional rendering of park items.
  if (!moreLess) {
    return (
      <>
        <h2>{data.fullName}</h2>
        <img src={data.images[0].url} alt='' />
        <p>About park: {data.description}</p>
        <button onClick={() => setMoreLess(!moreLess)}>Read More</button>
        <button onClick={() => addToList(data.parkCode)}>Add to List</button>
      </>
    );
  } else {
    return (
      <>
        <h2>{data.fullName}</h2>
        <img src={data.images[0].url} alt='' />
        <p>About park: {data.description}</p>
        <p>Directions Info: {data.directionsInfo}</p>
        <p>Weather Info: {data.weatherInfo}</p>
        <a href={data.url}>Park Website</a>
        <br />
        <br />
        <button onClick={() => setMoreLess(!moreLess)}>Read Less</button>
        <button onClick={() => addToList(data.parkCode)}>Add to List</button>
      </>
    );
  }
};
export default Parks;
