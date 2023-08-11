const ChatMessages = ({imageMessage, messageBaloon, role }) => {

    const className = role === "user" ? "chatUserMessages" : "chatBotMessages";

  return (
    <div className={className}>
      <img src={imageMessage} alt="logoNutri" className="logoChat" />
      <p className="chatMessagesBaloon">
        {messageBaloon}
      </p>
    </div>
  );
};

export default ChatMessages;
