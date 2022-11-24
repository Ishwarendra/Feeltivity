import React, { useEffect, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { ChatMessage } from "../../components/ChatMessage/ChatMessage";

export default function ChatPage() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

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

      <div className="m-1 md:m-5">
        {/* Bottom has a chat button */}
        <div className="h-[95-vh] md:h-[85vh]">
          <ChatMessage msg={"There are some variations of lorem ipsum paragraphs"} human={true} sentTime={"11:44 PM"} />
          <br /> <br /> 
          <ChatMessage msg={"I am just a chatbot I don't know. But here is a song for you :)"} human={false} sentTime={"11:45 PM"} />
        </div>
      </div>
    </div>
  );
}
