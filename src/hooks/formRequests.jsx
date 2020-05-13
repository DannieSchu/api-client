import { useState, useEffect } from 'react';
import { apiData } from '../services/apiData.jsx';

export const useRequest = () => {
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

  return { url, body, results, requests, loading, handleSubmit, handleChange, handleClick, handleDelete };
};
