import React from 'react';
import Header from '../Header/Header';
import ClientPage from '../../containers/ClientPage';
import RequestHistory from '../RequestHistory/RequestHistory.jsx';
import styles from './App.css';

export default function App() {
  const requests = [{
    method: 'post', 
    url: 'https://jsonplaceholder.typicode.com/posts'
  }, {
    method: 'get', 
    url: 'https://jsonplaceholder.typicode.com/posts'
  }, {
    method: 'put', 
    url: 'https://jsonplaceholder.typicode.com/posts'
  }, {
    method: 'put', 
    url: 'https://jsonplaceholder.typicode.com/posts'
  }];
  
  return (
    <>
      <Header />
      <section className={styles.App}>
        <ClientPage />
        <RequestHistory requests={requests} />
      </section>
    </>);
}
