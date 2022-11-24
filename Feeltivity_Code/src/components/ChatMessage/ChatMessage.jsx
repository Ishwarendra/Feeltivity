import { bgcolor } from '@mui/system';
import React from 'react'

export const ChatMessage = ({msg, human, sentTime}) => {
  var unCommonClass = "";
  if (human) {
    unCommonClass = "bg-[#4765ff] text-white rounded-tr-lg rounded-l-lg"
  } else {
    unCommonClass = "bg-white text-black rounded-r-lg rounded-tl-lg"
  }

  return (
    <div className={`${unCommonClass} max-w-[90%] sm:max-w[60%] md:max-w-[45%] lg:max-w-[40%] w-auto p-4`}>
        <div>{msg}</div>
        <div className="text-[#0e1114] font-semibold text-sm grid grid-cols-1 place-items-end">{sentTime}</div>
    </div>
  )
}
