import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestItem.css';

const RequestItem = ({ method, url }) => {
  return (
    <section className={styles.RequestItem}>
      <h3>{method}</h3>
      <p>{url}</p>
    </section>
  );
};

RequestItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default RequestItem;
