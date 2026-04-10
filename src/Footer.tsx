import React from 'react';

import './Footer.css';

/**
 * Footer component for the application.
 *
 * This component renders a footer with a link to the home page.
 * The footer is styled using the external Footer.css file.
 */
const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <p>
        <a
          href='https://astralaide.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Return Home'
        >
          Return to Holier Than Thou
        </a>
      </p>
    </footer>
  );
};

export default Footer;
