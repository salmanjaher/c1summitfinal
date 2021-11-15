import React, { useState } from 'react';

// Displays each park as a dynamic object based on data passed in.
const Parks = ({ data, addToList }) => {
  // State variables
  const [moreLess, setMoreLess] = useState(false);
  // Conditional rendering of park items.
  if (!moreLess) {
    return (
      <>
        <div class='container ring-2 ring-green-700 mx-auto bg-yellow-800 rounded-lg text-white'>
          <h2 class='text-4xl font-sans pt-4 font-bold px-2'>
            {data.fullName}
          </h2>
          <img
            class='h-30 w-30 object-cover px-5 py-3'
            src={data.images[0].url}
            alt=''
          />
          <p class='font-bold'>About Park:</p>
          <p class='font-thin px-5 pb-5'>{data.description}</p>
          <button
            class='bg-white hover:bg-gray-200 font-bold text-yellow-700 py-1 px-2 rounded-l'
            onClick={() => setMoreLess(!moreLess)}
          >
            Read More
          </button>
          <button
            class='bg-white hover:bg-gray-200 font-bold text-yellow-700  py-1 px-2 rounded-r'
            onClick={() => addToList(data.parkCode)}
          >
            Add to List
          </button>
          <br />
          <br />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class='container mx-auto bg-yellow-800 rounded-lg text-white'>
          <h2 class='text-4xl font-sans pt-4 font-bold px-2'>
            {data.fullName}
          </h2>
          <img
            class='h-30 w-30 object-cover px-5 py-3'
            src={data.images[0].url}
            alt=''
          />
          <p class='font-bold'>About Park:</p>
          <p class='font-thin px-5 pb-5'>{data.description}</p>
          <p class='font-bold'>Directions Info:</p>
          <p class='font-thin px-5 pb-5'>{data.directionsInfo}</p>
          <p class='font-bold'>Weather Info:</p>
          <p class='font-thin px-5 pb-5'>{data.weatherInfo}</p>
          <a class='underline text-xl text-blue-500' href={data.url}>
            Park Website
          </a>
          <br />
          <br />
          <button
            class='bg-white hover:bg-gray-200 font-bold text-yellow-700  py-1 px-2 rounded-l'
            onClick={() => setMoreLess(!moreLess)}
          >
            Read Less
          </button>
          <button
            class='bg-white hover:bg-gray-200 font-bold text-yellow-700  py-1 px-2 rounded-r'
            onClick={() => addToList(data.parkCode)}
          >
            Add to List
          </button>
          <br />
          <br />
        </div>
      </>
    );
  }
};
export default Parks;
