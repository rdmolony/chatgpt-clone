import React from 'react';
import PropTypes from 'prop-types';


export default function Response({ fromWhom, Icon, text }) {
  return (
    <div className="px-4 py-2 justify-center md:gap-6 m-auto">
      <div className="flex mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
        <Icon />
        <div className="relative flex w-full flex-col lg:w-[calc(100%-115px)]">
          <div className="font-semibold select-none">{fromWhom}</div>
          <div className="flex-col gap-1 md:gap-3">{text}</div>
        </div>
      </div>
    </div>
  )
}

Response.propTypes = {
  /** Who sent the response */
  fromWhom: PropTypes.string.isRequired,
  /** Icon of responder */
  Icon: PropTypes.elementType,
  /** Text entered by responder */
  text: PropTypes.string.isRequired,
};
