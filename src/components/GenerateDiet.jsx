import { useEffect, useState } from 'react';
import '../assets/css/GenerateDiet.css';
import axios from "axios";
import API_KEY from '../services/apikey';




const GenerateDiet = () => {


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
        
          <button className='button' id='sendQuestion'>
            Gerar Dieta
          </button>

        </>
    );
  };
  
export default GenerateDiet;
