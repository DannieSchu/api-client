import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form.jsx';
import JsonDisplay from '../components/JsonDisplay/JsonDisplay.jsx';
import RequestHistory from '../components/RequestHistory/RequestHistory.jsx';
import { apiData } from '../services/apiData.jsx';
import styles from './ClientPage.css';

const ClientPage = () => {
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

  const handleChange = ({ target }) => {
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    apiData(url, method, body)
      .then(res => setResults(res))
      .then(() => setLoading(false));
    setRequests(prevRequests => ([
      ...prevRequests, {
        url,
        method,
        body: body || null
      }
    ]));
    localStorage.setItem('requests', JSON.stringify(requests));
  };

  const handleClick = ({ url, method, body }) => {
    setUrl(url);
    setMethod(method);
    setBody(body || null);
    setResults(null);
  };

  return (
    <section className={styles.ClientPage}>
      <section className={styles.FormContainer}>
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          url={url}
          body={body}
          method={method}
          buttonText="Send" />
        <JsonDisplay results={results} loading={loading} />
      </section>
      <RequestHistory requests={requests} onClick={handleClick} />
    </section>
  );
};

export default ClientPage;
