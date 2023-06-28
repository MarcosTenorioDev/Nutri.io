import { useEffect, useState } from 'react';
import '../assets/css/GenerateDiet.css';
import axios from "axios";
import API_KEY from '../services/apikey';
import closeBtn from '../assets/images/close.svg';




const GenerateDiet = () => {
const body = document.body;
const [showModal, setShowModal] = useState(false);

const openModal = () =>{
  setShowModal(true);
  window.scrollTo(0,0);
  body.classList.add('modalOpen');
  Modal()
}

const closeModal = () =>{
  setShowModal(false);
  body.classList.remove('modalOpen');
  Modal();
}

const [person, setPerson] = useState ({
  name: '',
  height: '',
  weight: '',
  age: '',
  sex: '',
  biotype: '',
  activityFrequence: '',
  alimentarRestriction: '',
  foodsIndispensable: '',
  objective: '',
  dailyRefsNumber: '',
  lives: '',
});

const Modal = () => {
  if (showModal === true) {

    return(
      <>
      <div className="modal">
        <div className='overlay'>
          <button className='closeModalBtn' onClick={closeModal}><img src={closeBtn} alt="" className='closeBtn'/></button>
          <div className='modalContent'>
            <div className='leftSide'>
              <form className='modalForm'>
                <label htmlFor="name" className='modalLabel'>Digite seu nome:</label>
                  <input type="text" id="name" name="name" className='modalInput'/>


                <div className='smallInputContainer'>
                  <div className='inputContainer'>
                    <div className='input'>
                      <label htmlFor="height" className='modalLabel'>Altura:</label>
                        <input type="number" id='height' name='height' className='modalSmallInput' />
                    </div>
                    <div className='input'>
                      <label htmlFor="weight" className='modalLabel'>Peso:</label>
                        <input type="number" id='weight' name='weight' className='modalSmallInput' />
                    </div>
                  </div>

                  <div className='inputContainer'>
                    <div className='input'>
                      <label htmlFor="age" className='modalLabel'>Idade:</label>
                        <input type="number" id='age' name='age' className='modalSmallInput' />
                    </div>
                    <div className='input'>
                    <label hmtlFor="sexo" className='modalLabel'>Selecione seu sexo:</label>
                        <select id="sexo" name="sexo" className='modalSmallInput'>
                          <option value="" selected></option>
                          <option value="masculino">Masculino</option>
                          <option value="feminino">Feminino</option>
                        </select>
                    </div>
                      
                  </div>
                </div>

                <label htmlFor="" className='modalLabel'>Qual o seu biotipo?</label>
                  <select name="bioType" id="bioType" className='modalInput'>
                    <option value="" selected></option>
                    <option value="ectomorph">Ectomorfo</option>
                    <option value="mesomorph">Mesomorfo</option>
                    <option value="endomorph">Endomorfo</option>
                  </select>

                  <label htmlFor="activityFrequence" className='modalLabel'>Você pratica atividade física com qual frequência?</label>
                  <select name="activityFrequence" id="activityFrequence" className='modalInput'>
                    <option value=""></option>
                    <option value="diariamente">Diariamente</option>
                    <option value="3-4 vezes por semana">3-4 vezes por semana</option>
                    <option value="1-2 vezes por semana">1-2 vezes por semana</option>
                    <option value="menos de uma vez por semana">Menos de uma vez por semana</option>
                    <option value="não pratico atividade física">Não pratico atividade física</option>
                  </select>
                  
                
              </form>
            </div>

            <div className='rightSide'>
              <form className='modalForm'>
                <label htmlFor="restrictFoods" className='modalLabel'>Você tem alguma restrição alimentar?</label>
                  <input type="text" id='restrictFoods' name='restrictFoods' className='modalInput' />

                <label htmlFor="indispensableFoods" className='modalLabel'>Quais comidas são indispensáveis para você?</label>
                  <input type="text" id='indispensableFoods' name='indispensableFoods' className='modalInput' />

                <label htmlFor="objective" className='modalLabel'>Qual o seu objetivo?</label>
                  <select name="objective" id="objective" className='modalInput'>
                    <option value=""></option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>

                  <label htmlFor="refs" className='modalLabel'>Quantas refeições você tem tempo de fazer diariamente?</label>
                  <select name="refs" id="refs" className='modalInput'>
                    <option value=""></option>
                    <option value="">3-4 refeições</option>
                    <option value="">5-6 refeições</option>
                    
                  </select>

                  <label htmlFor="lives" className='modalLabel'>Qual o país que você mora atualmente?</label>
                    <input type="text" id='lives' name='lives' className='modalInput'  />
              </form>
            </div>

            
            
          </div>
          <button className='buttonForm'>Gerar dieta</button>
        </div>
      </div>
      </>
    )
  }
 
  
}

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
      .post("https://api.openai.com/v 1/chat/completions", data, config)
      .then((resposta) => {
        console.log(resposta.data.choices[0].message.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  


 
    return (
        <>
  
          <button className='button' id='sendQuestion' onClick={openModal} >
            Gerar Dieta
          </button>
          <Modal />

        </>
    );
  };
  
export default GenerateDiet;
