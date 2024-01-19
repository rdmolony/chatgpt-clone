import React from 'react';
import PropTypes from 'prop-types';

export default function Chat({ name }) {
  return (
    <div className="rounded-xl shadow-lg text-center m-12">
      <div className="py-4">
        <p>Dia Duit <strong>{name}</strong>, cad faoi ar mhaith labhairt?</p>
      </div>
      <div>
        <input className="rounded-xl shadow-lg p-2 mt-2 mb-4 mx-12 bg-slate-50"></input>
      </div>
    </div>
  )
}

Chat.propTypes = {
  /** Name of person to greet */
  name: PropTypes.string.isRequired,
};
