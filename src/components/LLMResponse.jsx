import React from 'react';
import PropTypes from 'prop-types';


export default function LLMResponse({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

LLMResponse.propTypes = {
  /** Text entered by LLM */
  text: PropTypes.string.isRequired,
};
