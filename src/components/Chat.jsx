import React from 'react';

export default function Chat({ name }) {
  return (
    <div className="rounded-xl shadow-lg text-center bg-gray-100 m-4">
      <div className="py-4">
        <p>Dia Duit <strong>{name}</strong>, cad faoi ar mhaith labhairt?</p>
      </div>
      <div>
        <input className="rounded-xl shadow-lg p-2 mt-2 mb-4 "></input>
      </div>
    </div>
  )
}
