import React, { useState } from 'react';
import Form from '../components/Form/Form.jsx';
import { apiData } from '../services/apiData.jsx';
import JsonDisplay from '../components/JsonDisplay/JsonDisplay.jsx';
import styles from './ClientPage.css';

const ClientPage = () => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState(null);
  const [results, setResults] = useState(null);

  const handleChange = ({ target }) => {
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'url') setUrl(target.value);
    if(target.value && target.name === 'body') setBody(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    apiData(url, method, body)
      .then(res => setResults(res));
  };

  return (
    <section className={styles.ClientPage}>
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        url={url}
        body={body}
        method={method}
        buttonText="Send" />
      <JsonDisplay results={results} />
    </section>
  );
};

export default ClientPage;
