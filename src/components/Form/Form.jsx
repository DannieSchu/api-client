import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({
  onSubmit,
  onJsonChange,
  onUrlChange,
  onMethodChange,
  url,
  json,
  method,
  buttonText = 'submit'
}) => {
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <div>
        <h2>Request</h2>
      </div>
      <div>
        <input type="text" value={url} onChange={onUrlChange} placeholder="URL" />
        <button>{buttonText}</button>
      </div>
      <section>
        <label htmlFor="get">get</label>
        <input
          type="radio"
          value="get"
          id="get"
          checked={method === 'get'}
          onChange={onMethodChange}
        />
        <label htmlFor="post">post</label>
        <input
          type="radio"
          value="post"
          id="post"
          checked={method === 'post'}
          onChange={onMethodChange}
        />
        <label htmlFor="put">put</label>
        <input
          type="radio"
          value="put"
          id="put"
          checked={method === 'put'}
          onChange={onMethodChange}
        />
        <label htmlFor="delete">delete</label>
        <input
          type="radio"
          value="delete"
          id="delete"
          checked={method === 'delete'}
          onChange={onMethodChange}
        />
      </section>
      <textarea type="text" value={json} onChange={onJsonChange} placeholder="Raw JSON Body" />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onJsonChange: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  json: PropTypes.string,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

export default Form;
