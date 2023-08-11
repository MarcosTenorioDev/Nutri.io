import React, { useState } from "react";
import "../assets/css/Chat.css";
import maximize from "../assets/images/maximize.svg";
import logoChat from "../assets/images/logoChat.png";
import ChatMessages from "../components/ChatMessages";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    const newMessages = [...messages, { text: inputValue, role: "user" }];
    setMessages(newMessages);
    setInputValue("");
  };

  const openChat = () => {
    setIsOpen(true);
  };
  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id="chatBot">
        <div className="chatBar">
          <button onClick={closeChat} className="chatButton">
            <div className="closeChatButton"></div>
          </button>
          <button onClick={openChat} className="chatButton">
            <i>
              <img src={maximize} alt="" />
            </i>
          </button>
        </div>
        <div className={isOpen ? "chatOpen" : "chatClose"}>
          <div className="chatMessages">
            <ChatMessages
              imageMessage={logoChat}
              messageBaloon={
                "Olá, sou o nutri.helper! a IA que vai tirar todas as suas dúvidas em relação a sua alimentação!"
              }
              role="system"
            />

            {messages.map((message, index) => (
              <ChatMessages
                key={index}
                imageMessage={logoChat}
                messageBaloon={message.text}
                role={message.role}
              />
            ))}
             
          </div>
          <div className="chatInputContainer">
            <textarea
              type="text"
              placeholder="Digite aqui"
              className="chatInput"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button
              className="button"
              id="chatSendButton"
              onClick={sendMessage}
            >
              enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
