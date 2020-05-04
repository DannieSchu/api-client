import React from 'react';
import PropTypes from 'prop-types';
import RequestItem from './RequestItem.jsx';
import { weakKey } from '../../services/weakKey.jsx';
import styles from './RequestHistory.css';

const RequestHistory = ({ requests, onClick, onDelete }) => {
  const requestElements = requests.map(request => (
    <li key={weakKey(request)}>
      <RequestItem {...request} onClick={() => onClick(request)} />
    </li>
  ));
  
  return (
    <ul className={styles.RequestHistory}>
      {requestElements}
      <button className={styles.tealButton} onClick={onDelete}>Clear History</button>
    </ul>
  );
};

RequestHistory.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  requests: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    body: PropTypes.string,
  }))
};

export default RequestHistory;
