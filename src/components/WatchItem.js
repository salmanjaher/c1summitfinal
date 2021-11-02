import React, { useState, useEffect } from 'react';

function WatchItem({ parkCode }) {
  const [imageData, setImageData] = useState([]);
  const [parkData, setParkData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let defaultImage =
    'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg';

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

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading Images...</h1>;
  } else if (imageData.length === 0) {
    return (
      <>
        <h2>{parkData[0].fullName}</h2>
        <h3>Unfortunately there is no active images for this park. :(</h3>
        <button>Remove Park</button>
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
        <button>Remove Park</button>
      </>
    );
  }
}

export default WatchItem;
