import React, { useState } from "react";
import "../assets/css/Chat.css";
import maximize from '../assets/images/maximize.svg'
import logoChat from '../assets/images/logoChat.png'

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () =>{
    setIsOpen(true)
  }
  const closeChat = () =>{
    setIsOpen(false)
  }
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="chatBot">
        <div className="chatBar">
          <button onClick={closeChat} className="chatButton"><div className="closeChatButton"></div></button>
          <button onClick={openChat} className="chatButton"><i><img src={maximize} alt="" /></i></button>
        </div>
        <div className = {isOpen ? 'chatOpen' : 'chatClose'}>
          <div className="chatMessages">
            <div className="chatBotMessages">
              <img src={logoChat} alt="logoNutri" className="logoChat" />
              <p className="chatMessagesBaloon">Olá, sou o nutri.helper! a IA que vai tirar todas as suas dúvidas em relação a sua alimentação!</p>
            </div>
            <div className="chatClientMessages">
              {}
            </div>
          </div>
          <div className="chatInputContainer">
            <textarea type="text" placeholder="Digite aqui" className="chatInput"/>
            <button className="button" id="chatSendButton">enviar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
