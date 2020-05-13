import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestItem.css';

const RequestItem = ({ method, url, onClick }) => (
  <section className={styles.RequestItem} onClick={onClick}>
    <h3>{method}</h3>
    <p>{url}</p>
  </section>
);

RequestItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default RequestItem;
