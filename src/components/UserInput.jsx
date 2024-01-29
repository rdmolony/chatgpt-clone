import React from 'react';


export default function UserInput({ inputId, onInputHandler, onSubmitHandler }) {
  return (
    <div>
      <form onSubmit={onSubmitHandler}
            className="flex bg-transparent border-2 border-grey-100 border-opacity-25 focus:outline focus:outline-blue-200 rounded-xl mx-auto mb-4 w-full max-w-screen-sm p-4">
        <input id={inputId}
               onInput={onInputHandler}
               className="flex-grow focus:outline-none"
               placeholder="Message ChatGPT..."/>
        <button className="flex-shrink-0 ml-auto bg-slate-200 text-white p-0.5 rounded-lg dark:text-black dark:border-white dark:bg-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black">
            <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </form>
      <div className="w-full text-center">
        <p className="text-xs mx-auto">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  )
}
