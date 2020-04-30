import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onJsonChange, onUrlChange, onMethodChange, url, json, method, buttonText = 'submit' }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={url} onChange={onUrlChange} placeholer="URL" />
      <section>
        <div>
          <label htmlFor="get">get</label>
          <input
            type="radio"
            value="get"
            id="get"
            checked={method === 'get'}
            onChange={onMethodChange}
          />
        </div>
        <div>
          <label htmlFor="post">post</label>
          <input
            type="radio"
            value="post"
            id="post"
            checked={method === 'post'}
            onChange={onMethodChange}
          />
        </div>
        <div>
          <label htmlFor="put">put</label>
          <input
            type="radio"
            value="put"
            id="put"
            checked={method === 'put'}
            onChange={onMethodChange}
          />
        </div>
        <div>
          <label htmlFor="delete">delete</label>
          <input
            type="radio"
            value="delete"
            id="delete"
            checked={method === 'delete'}
            onChange={onMethodChange}
          />
        </div>
      </section>
      <input type="text" value={json} onChange={onJsonChange} placeholer="Raw JSON Body" />
      <button>{buttonText}</button>
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
