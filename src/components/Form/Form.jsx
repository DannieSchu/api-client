import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({
  onSubmit,
  onChange,
  url,
  body,
  method,
  buttonText = 'submit'
}) => {
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <h2>Request</h2>
      <div>
        <input 
          type="text" 
          name="url"
          value={url} 
          onChange={onChange} 
          placeholder="URL" />
        <button>{buttonText}</button>
      </div>
      <section>
        <input
          type="radio"
          name="method"
          value="get"
          id="get"
          checked={method === 'get'}
          onChange={onChange} />
        <label htmlFor="get">get</label>
        <input
          type="radio"
          name="method"
          value="post"
          id="post"
          checked={method === 'post'}
          onChange={onChange} />
        <label htmlFor="post">post</label>
        <input
          type="radio"
          name="method"
          value="put"
          id="put"
          checked={method === 'put'}
          onChange={onChange} />
        <label htmlFor="put">put</label>
        <input
          type="radio"
          name="method"
          value="delete"
          id="delete"
          checked={method === 'delete'}
          onChange={onChange} />
        <label htmlFor="delete">delete</label>
      </section>
      <textarea 
        type="text" 
        name="body"
        value={body} 
        onChange={onChange} 
        placeholder="Raw JSON Body" />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  body: PropTypes.string,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

export default Form;
