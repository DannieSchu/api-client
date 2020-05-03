/* eslint-disable react/prop-types */
import React from 'react';
import ReactJson from 'react-json-view';
import styles from './JsonDisplay.css';
import PropTypes from 'prop-types';

const JsonDisplay = ({ results }) => {
  return (
    <section className={styles.JsonDisplay}>
      <h2>Result</h2>
      <article>
        <ReactJson
          src={results}
          theme={{
            base00: '#f5f1f1',
            base01: '#ec66d6',
            base02: '#f5f1f1',
            base03: '#f5f1f1',
            base04: '#ec66d6',
            base05: '#ec66d6',
            base06: '#ec66d6',
            base07: '#444',
            base08: '#444',
            base09: '#08b699',
            base0A: '#a3e053',
            base0B: '#a3e053',
            base0C: '#a3e053',
            base0D: '#a3e053',
            base0E: '#ec66d6',
            base0F: '#ec66d6'
          }}
          enableClipboard={false}
          iconStyle="circle"
          displayDataTypes={false}
          groupArraysAfterLength={50}
        />
      </article>
    </section >
  );
};

JsonDisplay.propTypes = {
  results: PropTypes.any
};

export default JsonDisplay;
