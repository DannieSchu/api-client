import React from 'react';
import Form from '../Form/Form';

export default function App() {
  return <Form 
    onSubmit={() => {}} 
    onJsonChange={() => {}} 
    onUrlChange={() => {}} 
    onMethodChange={() => {}} 
    url="https://history.muffinlabs.com/date" 
    method="get" 
    buttonText="Send" />;
}
