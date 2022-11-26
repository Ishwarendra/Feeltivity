import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { auth, db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { ChatMessage } from "../../components/ChatMessage/ChatMessage";
import { Button, TextField } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  Timestamp,
  query,
} from "firebase/firestore";

// import {getEmotionFromList} from './../../emotion_identification/emotion_utils.js';

// something firing after any edit in text box

export default function ChatPage() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  const curr_user = auth.currentUser?.uid;
  const [time, setTime] = useState("");
  const [messageInBox, setMessageInBox] = useState("");
  const [sendButtonDisabled, setSendButtonDisabled] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    // console.log(user, "user-change");
    if (!user.user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // unix to IST
  const unixToIST = (unix_time) => {
    let IST = `${unix_time.getHours()}:${unix_time.getMinutes()}`
    return IST
  }

  const makeChatMessageJSX = (msg, sentTime, human, key = null) => {
    return (
      <div className="grid grid-cols-1 place-items-end hover:bg-gray-200 p-[2px]">
        <ChatMessage msg={msg} human={human} sentTime={sentTime} />
      </div>
    );
  };

  // Add new Message
  useEffect(() => {
    if (curr_user) {
      const chatCollectionRef = collection(db, "messages", curr_user, "chats");
      const q = query(chatCollectionRef, orderBy("SentAt", "asc"));
      onSnapshot(q, (snap) => {
        let messages = [];
        snap.forEach((doc) => {
          messages.push(doc.data());
        });
        setChatMessages(messages);
        // console.log(messages);
      });
    }
  }, []);

  // Send new message
  const sendMessage = async (e) => {
    e.preventDefault();
    // setChatMessages([
    //   ...chatMessages,
    //   [messageInBox, "11:45 PM", true],
    // ]);
    const chatCollectionRef = collection(db, "messages", curr_user, "chats");
    await addDoc(chatCollectionRef, {
      message: messageInBox,
      from: curr_user,
      SentAt: Timestamp.fromDate(new Date()),
    });

    // const q=query(chatCollectionRef,orderBy('SentAt','asc'));
    // onSnapshot(q,(snap)=>{
    //   let messages=[];
    //   snap.forEach((doc)=>{
    //     messages.push(doc.data());
    //   })
    //   console.log(messages);
    // })
    // PRINTING TO SEE EMOTION FOR EACH TEXT
    // console.log("Emotion related to" + messageInBox + "are:\n", getEmotionFromList(messageInBox)); 
    setMessageInBox("");
  };

  return (
    <div className="bg-[#202938] h-screen">
      <div>
        <Navbar />
      </div>

      <div className="p-1 sm:p-5 md:px-5 py-5 border-2 mx-2 mt-2 bg-[#f4f4f9]">
        {/* Bottom has a chat button */}
        <div className="h-[70vh] overflow-auto">
          {chatMessages?.map((msg, key) =>
            curr_user === msg.from
              ? makeChatMessageJSX(
                  msg.message,
                  unixToIST(msg.SentAt.toDate()),
                  true,
                  key
                )
              : makeChatMessageJSX(
                  msg.message,
                  unixToIST(msg.SentAt.toDate()),
                  false,
                  key
                )
          )}
        </div>

        {/* Message Box */}
        <form className="mt-2 flex" onSubmit={(e) => console.log("shjs", e)}>
          <TextField
            type="reset"
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
              type="submit"
            >
              <SendRoundedIcon sx={{ color: "white" }} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
