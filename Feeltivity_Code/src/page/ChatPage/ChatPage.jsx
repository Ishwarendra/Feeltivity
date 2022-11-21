import React, {useEffect, useContext} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

export default function ChatPage() {

  const navigate = useNavigate();
  const user = useContext(AuthContext);

  useEffect(() => {
    console.log(user, "user-change");
    if (!user.user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        ChatPage
      </div>
    </div>
  )
}
