import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { ChatMessage } from "../../components/ChatMessage/ChatMessage";
import { Button, TextField } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';

// on Hover change all Chat Message bg color

export default function ChatPage() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  const [messageInBox, setMessageInBox] = useState('');
  const [sendButtonDisabled, setSendButtonDisabled] = useState(true);

  // useEffect(() => {
  //   console.log(user, "user-change");
  //   if (!user.user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  const sendMessage = (e) => {
    console.log("sent_message", e);
  };

  return (
    <div className="bg-[#f4f4f9] h-screen">
      <div>
        <Navbar />
      </div>

      <div className="m-1 sm:m-5 md:mx-10 my-5">
        {/* Bottom has a chat button */}
        <div className="border-4 h-[95-vh] md:h-[70vh]">
          <div className="grid grid-cols-1 place-items-end hover:bg-gray-200 p-[2px]">
            <ChatMessage
              msg={"There are some variations of lorem ipsum paragraphs"}
              human={true}
              sentTime={"11:44 PM"}
            />
          </div>

          <div className="grid grid-cols-1 place-items-start my-5 hover:bg-gray-200 p-[2px]">
            <ChatMessage
              msg={
                "I am just a chatbot I don't know. But here is a song for you :) To make this message bigger I will write something three time. Something Something Something"
              }
              human={false}
              sentTime={"11:45 PM"}
            />
          </div>
        </div>

        {/* Message Box */}
          <div className="mt-2 flex">
            <TextField
              placeholder="Type Something ... "
              multiline
              fullWidth
              sx={{width: '100%', mr: 2}}
              maxRows={2}
              onChange={(e) => {setMessageInBox(e.target.value); setSendButtonDisabled(!e.target.value);}}
            />
            <Button variant="outlined" disabled={sendButtonDisabled}><SendRoundedIcon /></Button>
          </div>
        </div>
    </div>
  );
}
