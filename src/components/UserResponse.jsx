import React from 'react';
import PropTypes from 'prop-types';


export default function UserResponse({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

UserResponse.propTypes = {
  /** Text entered by user */
  text: PropTypes.string.isRequired,
};
