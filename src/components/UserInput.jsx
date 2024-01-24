import React from 'react';
import PropTypes from 'prop-types';


export default function UserInput({ }) {
  return (
    <div className="flex flex-col items-center w-full fixed bottom-0 mb-8">
      <input
          className="bg-slate-50 rounded-xl shadow-lg my-4 mx-12 p-2 w-64"
          placeholder="Message ChatGPT..." />
      <p className="text-xs">
        ChatGPT can make mistakes. Consider checking important information.
      </p>
    </div>
  )
}

UserInput.propTypes = { };
