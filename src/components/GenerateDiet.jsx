import { useEffect, useState } from 'react';
import '../assets/css/GenerateDiet.css';
import axios from "axios";
import API_KEY from '../services/apikey';




const GenerateDiet = () => {
    const [question, setQuestion] = useState('');
    const [questionResult, setQuestionResult] = useState('Sua pergunta vai aparecer aqui...');

const sendQuestion = (event) => {
    event.preventDefault();
    if (question === '') {
        setQuestionResult('Please, send me your question');
        console.log(question)
    } else{
        setQuestionResult(question);
        console.log(question)
    }   
};


function getChat(pergunta) {
    const OPENAI_API_KEY =  API_KEY;
    const content = pergunta;

    const config = {
      headers: {
        Authorization: "Bearer " + OPENAI_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
  
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Você é um assistente de bate-papo." },
        { role: "user", content: content },
      ],
    };
  
    axios
      .post("https://api.openai.com/v1/chat/completions", data, config)
      .then((resposta) => {
        console.log(resposta.data.choices[0].message.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getChat("Quem é o presidente do brasil?");
  


 
    return (
        <>
        
        <form id="formQuestion" className='container'>
        <textarea 
        id="questionField"
        rows="5" cols="50" 
        placeholder="Digite a pergunta"
        onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
            <button className='button' id='sendQuestion' onClick={sendQuestion}>
                Gerar Dieta
            </button>
        </form>

        <div className='result'>
            <p id="question">{questionResult}</p>
            <p id="answer">Sua resposta vai aparecer aqui...</p>
        </div>
        

        </>
    );
  };
  
export default GenerateDiet;
