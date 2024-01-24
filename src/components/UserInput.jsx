import React from 'react';
import PropTypes from 'prop-types';


export default function UserInput({ }) {
  return (
    <div className="flex flex-col items-center fixed bottom-0 w-full mb-4">
      <input
          className="bg-transparent border-2 border-white border-opacity-25 rounded-xl p-4 mb-2 w-full max-w-screen-sm"
          placeholder="Message ChatGPT..." />
      <p className="text-xs">
        ChatGPT can make mistakes. Consider checking important information.
      </p>
    </div>
  )
}

UserInput.propTypes = { };
