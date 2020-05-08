import React from 'react';
import PropTypes from 'prop-types';
import RequestItem from './RequestItem.jsx';
import { weakKey } from '../../utilities/weakKey.jsx';
import styles from './RequestHistory.css';
import buttonStyle from '../../css/button.css';

const RequestHistory = ({ requests, onClick, onDelete }) => {
  const requestElements = requests.map(request => (
    <li key={weakKey(request)}>
      <RequestItem {...request} onClick={() => onClick(request)} />
    </li>
  ));
  
  return (
    <ul className={styles.RequestHistory}>
      {requestElements}
      <button className={buttonStyle.tealButton} onClick={onDelete}>Clear History</button>
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
