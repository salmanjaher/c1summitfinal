import React from 'react';
import '../styles/main.css';

/**
 * Basic HTML Header that displayed the title of the page as long with a question.
 */
const Header = () => {
  return (
    <div class='align-center flex-auto bg-yellow-800 text-white'>
      <h1 class='font-bold text-7xl pt-5 font-sans'>National Parks</h1>
      <h4 class='text-xl p-5 italic font-thin underline'>
        What would you like to do today?
      </h4>
    </div>
  );
};

export default Header;
