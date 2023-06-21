import { useEffect, useState } from 'react';
import '../assets/css/GenerateDiet.css'



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
