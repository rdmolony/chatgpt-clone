import React from 'react';
import PropTypes from 'prop-types';


export default function UserInput({ }) {
  return (
    <input
        className="bg-slate-50 rounded-xl shadow-lg my-4 mx-12 p-2 w-64"
        placeholder="Message ChatGPT..." />
  )
}

UserInput.propTypes = { };
