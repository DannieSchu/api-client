import React from 'react';
// import Header from '../Header/Header';
// import ClientPage from '../../containers/ClientPage';
import RequestItem from '../RequestHistory/RequestItem.jsx';

export default function App() {
  return (
    <>
      <RequestItem method='post' url='https://jsonplaceholder.typicode.com/posts' />
      {/* <Header />
      <ClientPage /> */}
    </>);
}
