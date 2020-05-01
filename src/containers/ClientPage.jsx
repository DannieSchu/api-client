import React, { useState } from 'react';
import Form from '../components/Form/Form.jsx';
import { apiData } from '../services/apiData.jsx';
import ReactJson from 'react-json-view';

const ClientPage = () => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [json, setJson] = useState(null);
  const [results, setResults] = useState(null);

  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleJsonChange = ({ target }) => {
    setJson(target.value);
  };

  const handleMethodChange = ({ target }) => {
    setMethod(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    apiData(url, method, json)
      .then(res => setResults(res));
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        onJsonChange={handleJsonChange}
        onUrlChange={handleUrlChange}
        onMethodChange={handleMethodChange}
        url={url}
        json={json}
        method={method}
        buttonText="Send" />
      <ReactJson src={results} theme="bright:inverted"
        iconStyle="circle"
        displayDataTypes={false}
      />
    </>
  );
};

export default ClientPage;
