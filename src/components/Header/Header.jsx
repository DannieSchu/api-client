import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <header>
      <i className="fas fa-server"></i>
      <h1 className={styles.Header}>API Client</h1>
    </header>
  );
};

export default Header;
