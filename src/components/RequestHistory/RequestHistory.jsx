import React from 'react';
import PropTypes from 'prop-types';
import RequestItem from './RequestItem.jsx';
import styles from './RequestHistory.css';
import { weakKey } from '../../services/weakKey.jsx';

const RequestHistory = ({ requests }) => {
  const requestElements = requests.map(request => (
    <li key={weakKey(request)}>
      <RequestItem method={request.method}
        url={request.url} />
    </li>
  ));

  return (
    <ul className={styles.RequestHistory}>
      {requestElements}
    </ul>
  );
};

RequestHistory.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    body: PropTypes.string
  }))
};

export default RequestHistory;
