import user from "../assets/images/user.png";
import logoChat from "../assets/images/logoChat.png";

const ChatMessages = ({ imageMessage, messageBaloon, role }) => {
  const className = role === "user" ? "chatUserMessages" : "chatBotMessages";
  const image = role === "user" ? user : logoChat;

  return (
    <div className={className}>
      <img src={image} alt="logoNutri" className="logoChat" />
      <p className="chatMessagesBaloon">{messageBaloon}</p>
    </div>
  );
};

export default ChatMessages;
