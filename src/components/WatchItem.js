import React, { useState, useEffect } from 'react';

/**
 * Second functional element. Creates and pulls a data dynmically based on a park code.
 * Recieves webcam data to display non-streaming elements.
 * GIVES REASON IF THERE ARE NO IMAGES FOR CERTAIN PARK.
 */
function WatchItem({ parkCode, removeFromList }) {
  // State variables
  const [imageData, setImageData] = useState([]);
  const [parkData, setParkData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Renders item once intially.
  useEffect(() => {
    // Dynamically queries API and pulls data based on parkCode.
    const fetchData = async () => {
      const imageData = await fetch(
        `https://developer.nps.gov/api/v1/webcams?parkCode=${parkCode}&api_key=wbakT9pi2jO0k5wzrWTRx9F3FbElu7z0alH59mqz`
      );
      const parkData = await fetch(
        `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=wbakT9pi2jO0k5wzrWTRx9F3FbElu7z0alH59mqz`
      );
      const info = await imageData.json();
      const info2 = await parkData.json();
      setImageData(info.data);
      setParkData(info2.data);
      setIsLoading(false);
    };
    fetchData();
  }, [parkCode]);

  // Conditional rendering
  if (isLoading) {
    return <h1>Loading Images...</h1>;
  } else if (imageData.length === 0) {
    return (
      <>
        <h2>{parkData[0].fullName}</h2>
        <h5>Unfortunately there are no active images for this park. :(</h5>
        <button onClick={() => removeFromList(parkCode)}>Remove Park</button>
      </>
    );
  } else {
    return (
      <>
        <h1>{parkData[0].fullName}</h1>
        {imageData.map((img) => {
          return img.images.map((item) => {
            return <img src={item.url} alt='' />;
          });
        })}
        <button onClick={() => removeFromList(parkCode)}>Remove Park</button>
      </>
    );
  }
}

export default WatchItem;
