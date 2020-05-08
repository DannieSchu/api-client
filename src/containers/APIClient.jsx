import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form.jsx';
import JsonDisplay from '../components/JsonDisplay/JsonDisplay.jsx';
import RequestHistory from '../components/RequestHistory/RequestHistory.jsx';
import { apiData } from '../services/apiData.jsx';
import styles from './APIClient.css';

const APIClient = () => {
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [results, setResults] = useState(null);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('requests'));
    if(storage) setRequests(storage);
  }, []);

  const stateFactory = {
    method: setMethod,
    url: setUrl,
    body: setBody
  };

  const handleChange = ({ target }) => stateFactory[target.name](target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    apiData(url, method, body)
      .then(res => {
        setResults(res),
        setLoading(false);
      });
    setRequests(prevRequests => {
      if(prevRequests.filter(request => request.url === url && request.method === method).length < 1) {
        return [{
          url,
          method,
          body: body || null
        }, ...prevRequests,
        ];
      } else {
        return prevRequests;
      }
    });
    localStorage.setItem('requests', JSON.stringify(requests));
  };

  const handleClick = ({ url, method, body }) => {
    setUrl(url);
    setMethod(method);
    setBody(body || null);
    setResults(null);
  };

  const handleDelete = () => {
    localStorage.clear();
    setRequests([]);
  };

  return (
    <section className={styles.APIClient}>
      <section className={styles.FormContainer}>
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          url={url}
          body={body}
          buttonText="Send" />
        <JsonDisplay results={results} loading={loading} />
      </section>
      {requests && <RequestHistory requests={requests} onClick={handleClick} onDelete={handleDelete} />}
    </section>
  );
};

export default APIClient;
