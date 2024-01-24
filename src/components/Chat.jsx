import React from 'react';
import PropTypes from 'prop-types';

import Greeting from './Greeting';
import UserInput from './UserInput';
import { LLMResponse, UserResponse } from './Response';


export default function Chat({ responses }) {
  
  if (responses.length === 0) {
    return (
      <div>
        <Greeting />
        <UserInput />
      </div>
    )
  }

  return (
    <div>
      {responses.map((response, idx) => (
          <div key={idx} className="my-4">
            <UserResponse text={response.user} />
            <LLMResponse text={response.llm}/>
          </div>
      ))}
      <UserInput />
    </div>
  )
}

Chat.defaultProps = {
  responses: [],
}

Chat.propTypes = {
  /** List of User & LLM text responses  */
  responses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
