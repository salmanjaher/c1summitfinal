import React, { useState } from 'react';

const Parks = (props) => {
  const [moreLess, setMoreLess] = useState(false);
  const { data } = props;
  if (!moreLess) {
    return (
      <>
        <h2>{data.fullName}</h2>
        <img src={data.images[0].url} alt='' />
        <p>About park: {data.description}</p>
        <button onClick={() => setMoreLess(!moreLess)}>Read More</button>
        <button onClick={() => console.log('clicked')}>Add to List</button>
      </>
    );
  } else {
    return (
      <>
        <h2>Park Name : {data.fullName}</h2>
        <img src={data.images[0].url} alt='' />
        <p>About park: {data.description}</p>
        <p>Directions Info: {data.directionsInfo}</p>
        <p>Weather Info: {data.weatherInfo}</p>
        <a href={data.url}>Park Website</a>
        <br />
        <button onClick={() => setMoreLess(!moreLess)}>Read Less</button>
        <button onClick={() => console.log('clicked')}> Add to List</button>
      </>
    );
  }
};
export default Parks;
