import React from 'react';


export default function UserInput({ onClickHandler }) {
  return (
    <div>
      <form className="flex bg-transparent border-2 border-grey-100 border-opacity-25 focus:outline focus:outline-blue-200 rounded-xl mx-auto mb-4 w-full max-w-screen-sm p-4">
        <input className="flex-grow focus:outline-none" placeholder="Message ChatGPT..."
        />
        <button className="flex-shrink-0 ml-auto bg-slate-200 text-white p-0.5 rounded-lg dark:text-black dark:border-white dark:bg-white"
                onClick={onClickHandler}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black">
            <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
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
