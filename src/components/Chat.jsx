import React from 'react';
import PropTypes from 'prop-types';

import Greeting from './Greeting';
import UserInput from './UserInput';
import LLMResponse from './LLMResponse';
import UserResponse from './UserResponse';


export default function Chat({ userResponses, llmResponses }) {
  
  if (userResponses.length === 0) {
    return (
      <div>
        <Greeting />
        <UserInput />
      </div>
    )
  }

  return (
    <div className="text-center">
      {userResponses.map((userResponse, idx) => (
          <div key={idx} className="my-4">
            <UserResponse text={userResponse} />
            <LLMResponse text={llmResponses[idx]}/>
          </div>
      ))}
      <UserInput />
    </div>
  )
}

Chat.defaultProps = {
  userResponses: [],
  llmResponses: [],
}

Chat.propTypes = {
  /** List of LLM text responses  */
  llmResponses: PropTypes.arrayOf(PropTypes.string),
  /** List of user input text */
  userResponses: PropTypes.arrayOf(PropTypes.string),
};
