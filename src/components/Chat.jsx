import React, { useState, useRef, useEffect } from "react";
import "../assets/css/Chat.css";
import maximize from "../assets/images/maximize.svg";
import ChatMessages from "../components/ChatMessages";
import ChatBot from "../services/chatBot";
import logoFloatBtn from "../assets/images/logoChat.png";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const body = document.body;
  const [modalOpen, setModalOpen] = useState(false);
  const messagesContainerRef = useRef(null);
  const [typing, setTyping] = useState(false);

  const sendAnswer = () => {
    setInputValue("");
    const newMessages = [...messages, { text: inputValue, role: "user" }];
    setMessages(newMessages);
    getChatMessage(newMessages);
    scrollToBottom();
    setTyping(true);
  };

  const getChatMessage = async (newMessages) => {
    console.log(newMessages);
    const chatResponse = await ChatBot(inputValue);
    const newResponse = [
      ...newMessages,
      { text: chatResponse, role: "system" },
    ];
    setMessages(newResponse);
    setTyping(false);
  };

  const openChat = () => {
    setIsOpen(true);
    if (window.screen.width < 1000) {
      window.scrollTo(0, 0);
      body.classList.add("modalOpen");
      setModalOpen(true);
    }
  };
  const closeChat = () => {
    setIsOpen(false);
    body.classList.remove("modalOpen");
    setModalOpen(false);
  };
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scroll({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <div className="floatIcon pulse">
        <img src={logoFloatBtn} className="floatIconImg" onClick={openChat} />
      </div>

      <div
        id="modalChat"
        className={modalOpen ? "modalChatOpen" : "modalClose"}
      >
        <div id="chatBot" className={isOpen ? "chatOpen" : "chatClose"}>
          <div className="chatBar">
            <button onClick={closeChat} className="chatButton">
              <div className="closeChatButton"></div>
            </button>
          </div>
          <div>
            <div className="chatMessages" ref={messagesContainerRef}>
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

              {typing ? (
                <>
                  <ChatMessages
                    typing = {true}
                    messageBaloon={
                      <div class="loader">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    }
                    role="system"
                  />
                </>
              ) : (
                <></>
              )}
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
      </div>
    </>
  );
};

export default Chat;
