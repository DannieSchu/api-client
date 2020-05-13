import React from 'react';
import Form from '../Form/Form.jsx';
import JsonDisplay from '../JsonDisplay/JsonDisplay.jsx';
import RequestHistory from '../RequestHistory/RequestHistory.jsx';
import { useRequest } from '../../hooks/formRequests.jsx';
import styles from './APIClient.css';

const APIClient = () => {
  const { url, body, results, requests, loading, handleSubmit, handleChange, handleClick, handleDelete } = useRequest();

  return (
    <section className={styles.APIClient}>
      <section className={styles.formContainer}>
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          url={url}
          body={body}
          buttonText="Send" 
        />
        <JsonDisplay results={results} loading={loading} />
      </section>
      {requests && <RequestHistory 
        requests={requests} 
        onClick={handleClick} 
        onDelete={handleDelete} 
      />}
    </section>
  );
};

export default APIClient;
