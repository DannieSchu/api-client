import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form.jsx';
import { apiData } from '../services/apiData.jsx';

const ClientPage = () => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [json, setJson] = useState(null);

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
    apiData(url, method, json);
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
    </>
  );
};

export default ClientPage;
