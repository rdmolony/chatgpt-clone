import React from 'react';
import PropTypes from 'prop-types';

import Greeting from './Greeting';
import UserInput from './UserInput';
import Response from './Response';
import OpenAiIcon from './icons/OpenAi';
import UserIcon from './icons/User';


export default function Chat({
  id, priorMessages, onInputHandler, onSubmitHandler
}) {

  if (priorMessages.length === 0) {
    return (
      <div className="h-screen mb-4">
        <div className="flex justify-center items-center h-5/6">
          <Greeting/>
        </div>
        <UserInput id={id}
                   onInputHandler={onInputHandler}
                   onSubmitHandler={onSubmitHandler} />
      </div>
    )
  }

  return (
    <div className="h-screen">
      <div>
        {priorMessages.map((response, idx) => (
            <div key={idx} className="my-4">
              <Response fromWhom="You" Icon={UserIcon} text={response.user} />
              <Response fromWhom="ChatGPT" Icon={OpenAiIcon} text={response.llm} />
            </div>
        ))}
      </div>
      <UserInput id={id}
                 onInputHandler={onInputHandler}
                 onSubmitHandler={onSubmitHandler}/>
    </div>
  )
}

Chat.propTypes = {
  /** List of User messages & LLM responses  */
  priorMessages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  /** Event on text input  */
  onInputHandler: PropTypes.func,
  /** Event on form submission  */
  onSubmitHandler: PropTypes.func,
};
