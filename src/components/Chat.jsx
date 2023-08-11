import React, { useState } from "react";
import "../assets/css/Chat.css";
import maximize from "../assets/images/maximize.svg";
import ChatMessages from "../components/ChatMessages";
import ChatBot from "../services/chatBot";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendAnswer = () => {
    setInputValue("");
    const newMessages = [...messages, { text: inputValue, role: "user" }];
    setMessages(newMessages);
    getChatMessage(newMessages);
  };

  const getChatMessage = async (newMessages) => {
    const chatResponse = await ChatBot(inputValue);
    const newResponse = [
      ...newMessages,
      { text: chatResponse, role: "system" },
    ];
    setMessages(newResponse);
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
              messageBaloon={
                "Olá, sou o Nutri.Helper! a IA que vai tirar todas as suas dúvidas em relação a sua alimentação!"
              }
              role="system"
            />

            {messages.map((message, index) => (
              <ChatMessages
                key={index}
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
                  sendAnswer();
                }
              }}
            />
            <button
              className="buttonChat"
              id="chatSendButton"
              onClick={sendAnswer}
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
