import React, { useState, useEffect } from 'react';

/**
 * Second functional element. Creates and pulls a data dynmically based on a park code.
 * Recieves webcam data to display non-streaming elements.
 * GIVES REASON IF THERE ARE NO IMAGES FOR CERTAIN PARK.
 */
const API_KEY = process.env.REACT_APP_API_KEY;

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
        `https://developer.nps.gov/api/v1/webcams?parkCode=${parkCode}&api_key=${API_KEY}`
      );
      const parkData = await fetch(
        `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${API_KEY}`
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
  // Checks if website is loading images
  if (isLoading) {
    return <h1 class='text-5xl p-10 font-bold font-mono'>Loading Images...</h1>;
  } else if (imageData.length === 0) {
    // If there is no imageData at all for the park
    return (
      <>
        <div class='block ring-2 ring-green-700 bg-yellow-800 rounded-lg text-white text-center'>
          <h2 class='text-4xl font-sans pt-4 font-bold px-2'>
            {parkData[0].fullName}
          </h2>
          <h5 class='p-3 text underline font-thin'>
            Unfortunately there are no active images for this park. ☹️
          </h5>
          <button
            class='bg-white hover:bg-gray-200 font-bold text-yellow-700  py-1 px-2 rounded'
            onClick={() => removeFromList(parkCode)}
          >
            Remove Park
          </button>
          <br />
          <br />
        </div>
      </>
    );
  } else {
    // If there is images, print them.
    return (
      <>
        <div class='block ring-2 ring-green-700 bg-yellow-800 rounded-lg'>
          <h1 class='text-4xl font-sans pt-4 px-2 text-white font-bold'>
            {parkData[0].fullName}
          </h1>
          <div>
            {imageData.length !== 0 ? (
              imageData.map((img) => {
                return img.images.map((item) => {
                  return (
                    <div>
                      <img
                        class='h-30 w-30 object-cover px-5 py-3'
                        src={item.url}
                        alt=''
                      />
                    </div>
                  );
                });
              })
            ) : (
              <h5 class='p-3 text underline font-thin'>
                Unfortunately there are no active images for this park. ☹️
              </h5>
            )}
          </div>
          <button
            class='bg-white hover:bg-gray-200 font-bold text-yellow-700  py-1 px-2 rounded'
            onClick={() => removeFromList(parkCode)}
          >
            Remove Park
          </button>
          <br />
          <br />
        </div>
      </>
    );
  }
}

export default WatchItem;
