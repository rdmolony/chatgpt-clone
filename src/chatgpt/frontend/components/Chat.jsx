import React from 'react';
import PropTypes from 'prop-types';

import Greeting from './Greeting';
import UserInput from './UserInput';
import Response from './Response';
import OpenAiIcon from './icons/OpenAi';
import UserIcon from './icons/User';


export default function Chat({
  messages, onInputHandler, onSubmitHandler
}) {

  if (Object.keys(messages).length === 0) {
    return (
      <div className="flex flex-col h-screen">
        <div className="justify-center items-center h-5/6">
          <Greeting/>
        </div>
        <div>
          <UserInput onInputHandler={onInputHandler}
                     onSubmitHandler={onSubmitHandler} />
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col h-screen">
      <div className="h-5/6 overflow-scroll">
        {Object.keys(messages).map((idx) => (
          <div key={idx} className="my-4">
            <Response fromWhom="You" Icon={UserIcon} text={messages[idx].user} />
            <Response fromWhom="ChatGPT" Icon={OpenAiIcon} text={messages[idx].llm} />
          </div>
        ))}
      </div>
      <div className="items-center">
        <UserInput onInputHandler={onInputHandler}
                   onSubmitHandler={onSubmitHandler}/>
      </div>
    </div>
  )
}

Chat.defaultProps = {
  messages: {},
}

Chat.propTypes = {
  /** List of User messages & LLM responses  */
  messages: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  /** Event on text input  */
  onInputHandler: PropTypes.func,
  /** Event on form submission  */
  onSubmitHandler: PropTypes.func,
};
