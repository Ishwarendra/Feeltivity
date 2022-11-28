import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

// H = HUMAN and C = CHATBOT (Change it to email)

function getArray(s) {
  var response = s.split('\n')
  if (response.length > 2) {
    response = [true, ...response]
  } else {
    response = [false, ...response]
  }

  return response;
}

export const ChatMessage = ({ msg, human = false, sentTime }) => {

  const user = useContext(AuthContext);

  var unCommonClass = "";
  if (human) {
    unCommonClass = "bg-[#4765ff] text-white rounded-tr-lg rounded-l-lg";
  } else {
    unCommonClass = "bg-white text-black rounded-r-lg rounded-tl-lg";
  }

  var arrayOfMsg = getArray(msg);
  console.log(arrayOfMsg)

  return (
    <div className="flex">
      {!human && (
        <div className="self-end mr-2 ml-1">
          <Avatar sx={{ bgcolor: "blue" }}>C</Avatar>
        </div>
      )}

      <div
        className={`${unCommonClass} max-w-[85vw] sm:max-w[70vw] md:max-w-[40vw] w-auto p-4`}
      >
          {
            arrayOfMsg[0] 
            ? 
            <div className="break-words">
              {arrayOfMsg[1]} <br />
              <a href={arrayOfMsg[2]} className="text-[#4765ff] font-semibold">✅ Song-1</a> <br /> 
              <a href={arrayOfMsg[3]} className="text-[#4765ff] font-semibold">✅ Song-2</a>
            </div>
            
            : <div className="break-words">{msg}</div>
          }
          {/* {msg} */}
         
      </div>
        <div className="text-[#0e1114] font-semibold text-sm grid grid-cols-1 place-items-end mx-1">
          {sentTime}
        </div>

      {human && (
        <div className="self-end ml-2 mr-1">
          <Avatar sx={{ bgcolor: "red" }}>H</Avatar>
        </div>
      )}
    </div>
  );
};
