import React from 'react';


export default function UserInput({ }) {
  return (
    <div className="fixed bottom-0 my-4 w-full min-h-0 justify-center text-center">
      <div className="mx-auto mb-4 w-full max-w-screen-sm">
        <input
          placeholder="Message ChatGPT..."
          className="bg-transparent border-2 border-grey-100 border-opacity-25 rounded-xl w-full p-4"
        />
      </div>
      <div className="w-full">
        <p className="text-xs mx-auto">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  )
}
