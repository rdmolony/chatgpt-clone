import React from 'react';
import PropTypes from 'prop-types';

import Greeting from './Greeting';
import UserInput from './UserInput';
import LLMResponse from './LLMResponse';
import UserResponse from './UserResponse';


export default function Chat({ }) {
  return (
    <div className="text-center">
      <Greeting />
      <UserInput />
    </div>
  )
}

Chat.propTypes = { };
