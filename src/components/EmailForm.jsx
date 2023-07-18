import { useState } from "react";
import '../assets/css/EmailForm.css'
import emailJs from '@emailjs/browser'

const EmailForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
        from_name: name,
        subject: subject,
        message: message,
        email: email,
    }

    emailJs.send("service_4e5jsr9", "template_158dtif", templateParams, "VCZZ5oAZOxjn-PGTA")
    .then((response) => {
        alert('email enviado com sucesso')
        setName('');
        setEmail('');
        setMessage('');
        setSubject('')
    }, (err) => {
        console.log('ERRO:', err)
        alert('Erro inesperado. Por favor, tente novamente')
    })
  };

  return (
    <>
    <div className="contactContainer">
        <div className="emailHeaderContainer">
            <h2 className="emailHeaderSub">Sentiu falta de algo ?</h2>
            <h2 className="emailHeaderSub">Há algo para nos recomendar ?</h2>
            <h2 className="emailHeaderTitle">Entre em contato!</h2>
        </div>
        <form className="emailForm" 
        onSubmit={handleSubmit}
    >
      <div className="smallInputContainer" id="emailSmallInputContainer">
        <div className="inputContact">
          <label htmlFor="name" className="modalLabel">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="modalInput"
            placeholder="Digite seu nome"
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
          />
        </div>

        <div className="inputContact">
          <label htmlFor="email" className="modalLabel">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="modalInput"
            placeholder="Digite seu e-mail"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </div>
      </div>

      <div className="inputContact">
        <label htmlFor="subject" className="modalLabel">
          Assunto:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="modalInput"
          placeholder="Digite o assunto"
          onChange={(event) => setSubject(event.target.value)}
          value={subject}
          required
        />
      </div>

      <div className="inputContact">
        <label htmlFor="message" className="modalLabel">
          Mensagem:
        </label>
        <textarea
          id="message"
          name="message"
          className="modalInput"
          placeholder="Digite sua mensagem"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          required
        />
      </div>

      <button className="submitButton" type="submit">
        Enviar
      </button>
        </form>
    </div>
        
    </>
  );
};

export default EmailForm;
