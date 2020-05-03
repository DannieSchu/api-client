import React, { useState } from 'react';
import Form from '../components/Form/Form.jsx';
import { apiData } from '../services/apiData.jsx';
import JsonDisplay from '../components/JsonDisplay/JsonDisplay.jsx';
import RequestHistory from '../components/RequestHistory/RequestHistory.jsx';
import styles from './ClientPage.css';

const ClientPage = () => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [results, setResults] = useState(null);
  const [requests, setRequests] = useState([]);

  const handleChange = ({ target }) => {
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    apiData(url, method, body)
      .then(res => setResults(res));

    setRequests(prevRequests => ([
      ...prevRequests,
      {
        url,
        method,
        body
      }
    ]));
  };

  // const handleClick = ({ target }) => {
  //   setUrl(target.url);
  //   setMethod(target.method);
  //   setBody(target.body || null);
  // };

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
        <JsonDisplay results={results} />
      </section>
      <RequestHistory requests={requests} />
    </section>
  );
};

export default ClientPage;
