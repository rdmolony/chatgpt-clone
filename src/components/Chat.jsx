import React from 'react';
import PropTypes from 'prop-types';

import Greeting from './Greeting';
import UserInput from './UserInput';
import Response from './Response';
import OpenAiIcon from './icons/OpenAi';
import UserIcon from './icons/User';


export default function Chat({ responses, onSubmitHandler }) {
  
  if (responses.length === 0) {
    return (
      <div className="h-screen mb-4">
        <div className="flex justify-center items-center h-5/6">
          <Greeting/>
        </div>
        <UserInput />
      </div>
    )
  }

  return (
    <div className="h-screen">
      <div>
        {responses.map((response, idx) => (
            <div key={idx} className="my-4">
              <Response fromWhom="You" Icon={UserIcon} text={response.user} />
              <Response fromWhom="ChatGPT" Icon={OpenAiIcon} text={response.llm} />
            </div>
        ))}
      </div>
      <UserInput onClickHandler={onSubmitHandler}/>
    </div>
  )
}

Chat.defaultProps = {
  responses: [],
  onSubmitHandler: () => alert("Click!")
}

Chat.propTypes = {
  /** List of User & LLM text responses  */
  responses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  /** Event on click  */
  onSubmitHandler: PropTypes.func
};
