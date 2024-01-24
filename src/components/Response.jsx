import React from 'react';
import PropTypes from 'prop-types';

import OpenAiIcon from './icons/OpenAi';
import UserIcon from './icons/User';


function Response({ fromWhom, Icon, text }) {
  return (
    <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
      <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion">
        <Icon />
        <div className="relative flex w-full flex-col lg:w-[calc(100%-115px)] agent-turn">
          <div className="font-semibold select-none">{fromWhom}</div>
          <div className="flex-col gap-1 md:gap-3">{text}</div>
        </div>
      </div>
    </div>
  )
}


export function LLMResponse({ text }) {
  return (
    <Response fromWhom="ChatGPT" Icon={OpenAiIcon} text={text} />
  )
}

LLMResponse.propTypes = {
  /** Text entered by LLM */
  text: PropTypes.string.isRequired,
};


export function UserResponse({ text }) {
  return (
    <Response fromWhom="You" Icon={UserIcon} text={text} />
  )
}

UserResponse.propTypes = {
  /** Text entered by User */
  text: PropTypes.string.isRequired,
};
