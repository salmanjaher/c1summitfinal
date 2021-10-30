import React from 'react';

const Activity = ({ id, name, filterActivity, addChoices }) => {
  return (
    <button
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
