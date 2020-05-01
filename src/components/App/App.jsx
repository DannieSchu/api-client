import React from 'react';
import Form from '../Form/Form';
import Header from '../Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <Form
        onSubmit={() => { }}
        onJsonChange={() => { }}
        onUrlChange={() => { }}
        onMethodChange={() => { }}
        url="https://history.muffinlabs.com/date"
        method="get"
        buttonText="Send" />;
    </>);
}
