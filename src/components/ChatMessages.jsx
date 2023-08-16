import user from "../assets/images/user.png";
import logoChat from "../assets/images/logoChat.png";
import { useState } from "react";

const ChatMessages = ({ imageMessage, messageBaloon, role, typing }) => {
  const className = role === "user" ? "chatUserMessages" : "chatBotMessages";
  const image = role === "user" ? user : logoChat;
  const typingAnimation = typing === true ? "messagesBaloonTyping" : "chatMessagesBaloon"

  return (
    <div className={className}>
      <img src={image} alt="logoNutri" className="logoChat" />
      <p className={typingAnimation}>{messageBaloon}</p>
    </div>
  );
};

export default ChatMessages;
