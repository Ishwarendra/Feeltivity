import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

// H = HUMAN and C = CHATBOT (Change it to email)

export const ChatMessage = ({ msg, human = false, sentTime }) => {

  const user = useContext(AuthContext);

  var unCommonClass = "";
  if (human) {
    unCommonClass = "bg-[#4765ff] text-white rounded-tr-lg rounded-l-lg";
  } else {
    unCommonClass = "bg-white text-black rounded-r-lg rounded-tl-lg";
  }

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
        <div>{msg}</div>
        <div className="text-[#0e1114] font-semibold text-sm grid grid-cols-1 place-items-end">
          {sentTime}
        </div>
      </div>

      {human && (
        <div className="self-end ml-2 mr-1">
          <Avatar sx={{ bgcolor: "red" }}>H</Avatar>
        </div>
      )}
    </div>
  );
};
