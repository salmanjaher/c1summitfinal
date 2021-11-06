import React from 'react';

// Component that displays activities as different buttons based on paramateres passed in.
const Activity = ({ id, name, filterActivity, addChoices }) => {
  return (
    <button
      class='bg-yellow-700 hover:bg-yellow-800 font-thin text-white py-1 px-2 '
      onClick={() => {
        filterActivity(id);
        addChoices(name);
      }}
    >
      {name}
    </button>
  );
};

export default Activity;
