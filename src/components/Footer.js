import React from 'react';
import '../styles/main.css';
/**
 * Simple footer with build toolkit and my name.
 */
const Footer = () => {
  return (
    <div class='bottom-0 inset-x-0 bg-yellow-700'>
      <p class=' w-full align-center font-mono text-xs pt-2 pb-1 underline bg-yellow-700'>
        Built with React by Salman Jaher
      </p>
    </div>
  );
};

export default Footer;
