import React from 'react';
import PropTypes from 'prop-types';

import Greeting from './Greeting';
import UserInput from './UserInput';
import Response from './Response';
import OpenAiIcon from './icons/OpenAi';
import UserIcon from './icons/User';


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
      <div className="mb-32">
        {responses.map((response, idx) => (
            <div key={idx} className="my-4">
              <Response fromWhom="You" Icon={UserIcon} text={response.user} />
              <Response fromWhom="ChatGPT" Icon={OpenAiIcon} text={response.llm} />
            </div>
        ))}
      </div>
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
