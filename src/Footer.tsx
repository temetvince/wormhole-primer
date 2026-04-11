import React from 'react';

import './Footer.css';

/**
 * Footer component for the application.
 *
 * This component renders a footer.
 * The footer is styled using the external Footer.css file.
 */
const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <p>
        <a
          href='https://astralaide.com'
          target='_self'
          rel='noopener noreferrer'
          aria-label='Navigate to astralaide.com'
        >
          Navigate to astralaide.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
