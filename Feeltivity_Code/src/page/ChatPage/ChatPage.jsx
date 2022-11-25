import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { ChatMessage } from "../../components/ChatMessage/ChatMessage";
import { Button, TextField } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

// something firing after any edit in text box

export default function ChatPage() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  const [messageInBox, setMessageInBox] = useState("");
  const [sendButtonDisabled, setSendButtonDisabled] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);

  // Remove Comment
  // useEffect(() => {
  //   console.log(user, "user-change");
  //   if (!user.user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  const makeChatMessageJSX = (msg, sentTime, human) => {
    return (
      <div className="grid grid-cols-1 place-items-end hover:bg-gray-200 p-[2px]">
        <ChatMessage
          msg={msg}
          human={human}
          sentTime={sentTime}
        />
      </div>
    );
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setChatMessages([
      ...chatMessages,
      [messageInBox, "11:45 PM", true],
    ]);
    
    setMessageInBox('');
  };

  return (
    <div className="bg-[#f4f4f9] h-screen">
      <div>
        <Navbar />
      </div>

      <div className="p-1 sm:p-5 md:px-5 py-5">
        {/* Bottom has a chat button */}
        <div className="h-[70vh] overflow-auto">

          {chatMessages?.map(msg => (
            makeChatMessageJSX(msg[0], msg[1], msg[2])
          ))}

        </div>

        {/* Message Box */}
        <form className="mt-2 flex" onSubmit={(e) => console.log("shjs", e)}>
          <TextField
            type='reset'
            placeholder="Type Something ... "
            multiline
            fullWidth
            sx={{ width: "100%", mr: 2 }}
            maxRows={2}
            onChange={(e) => {
              setMessageInBox(e.target.value);
              setSendButtonDisabled(!e.target.value);
            }}
            value={messageInBox}
          />
          <div className="grid grid-cols-1 place-items-center">
            <Button
              variant="contained"
              disabled={sendButtonDisabled}
              sx={{ color: "#3b5bff", py: 1.5 }}
              onClick={sendMessage}
              type='submit'
            >
              <SendRoundedIcon sx={{ color: "white" }} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
