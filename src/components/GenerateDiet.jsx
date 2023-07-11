import { useState, useContext, useEffect } from 'react';
import '../assets/css/GenerateDiet.css';
import closeBtn from '../assets/images/close.svg';
import getChat from '../services/api'
import { DataContext } from '../context/dataContext';


const GenerateDiet = () => {
  const body = document.body;
  const [showModal, setShowModal] = useState(false);
  const { updateDietData } = useContext(DataContext);

  const openModal = () => {
    setShowModal(true);
    window.scrollTo(0, 0);
    body.classList.add('modalOpen');
    Modal()
  }

  const closeModal = () => {
    setShowModal(false);
    body.classList.remove('modalOpen');
    Modal();
  }

  const [person, setPerson] = useState({
    name: '',
    height: '',
    weight: '',
    age: '',
    sex: '',
    biotype: '',
    activityFrequence: '',
    restrictFoods: '',
    indispensableFoods: '',
    objective: '',
    dailyRefsNumber: '',
    lives: '',
  });

  const handleInputEmpty = (event) => {
    event.preventDefault();
    let isFormValid = true;
    for (let i = 0; i < event.target.elements.length; i++) {
      const inputValue = event.target[i].value;
      const inputId = event.target[i].id;
      const errorMessageInput = document.getElementById(`${inputId}ErrorMessage`);
  
      if(errorMessageInput){
        if (inputValue === "") {
          errorMessageInput.textContent = 'Campo obrigatório*';
          isFormValid = false
        } else {
          errorMessageInput.textContent = '';
        }
      }
    }

    if (isFormValid){
      console.log('form enviado')
      createPerson(event)
    }else{
      console.log('preencha todos os campos obrigatórios, por favor')
    }
    
  }

  const createPerson = (event) =>{
    const nameInput = event.target.elements.name.value;
    const heightInput = event.target.elements.height.value;
    const weightInput = event.target.elements.weight.value;
    const ageInput = event.target.elements.age.value;
    const sexInput = event.target.elements.sex.value;
    const biotypeInput = event.target.elements.bioType.value;
    const activityFrequenceInput = event.target.elements.activityFrequence.value;
    const restrictFoodsInput = event.target.elements.restrictFoods.value;
    const indispensableFoodsInput = event.target.elements.indispensableFoods.value;
    const objectiveInput = event.target.elements.objective.value;
    const dailyRefsNumberInput = event.target.elements.dailyRefsNumber.value;
    const livesInput = event.target.elements.lives.value;

    setPerson(() => ({
      name: nameInput,
      height: heightInput,
      weight: weightInput,
      age: ageInput,
      sex: sexInput,
      biotype: biotypeInput,
      activityFrequence: activityFrequenceInput,
      restrictFoods: restrictFoodsInput,
      indispensableFoods: indispensableFoodsInput,
      objective: objectiveInput,
      dailyRefsNumber: dailyRefsNumberInput,
      lives: livesInput,
    }));

  }

  useEffect(() => {
    if (person.name !== ''){
      handleSubmit(person);
    }
  }, [person]);

  const handleSubmit = async (person) => { 
    const response = await getChat(person);
    console.log(response)
    updateDietData(response);
  }

  const Modal = () => {


    if (showModal === true) {

      return (
        <>
          <div className="modal">
            <div className='overlay'>
              <button className='closeModalBtn' onClick={closeModal}><img src={closeBtn} alt="" className='closeBtn' /></button>
              <div className='modalContent'>
                <form className='modalForm' onSubmit={handleInputEmpty}>
                  <div className="allInputsContainer">
                    <div className="leftSide">
                      <label htmlFor="name" className='modalLabel'>Digite seu nome:</label>
                      <input type="text" id="name" name="name" className='modalInput' placeholder='Ex: Marcos' />
                      <p id='nameErrorMessage' className='errorMessage'></p>


                      <div className='smallInputContainer'>
                        <div className='inputContainer'>
                          <div className='input'>
                            <label htmlFor="height" className='modalLabel'>Altura:</label>
                            <input type="number" id='height' name='height' className='modalSmallInput' placeholder='Ex: 1,74' />
                            <p id='heightErrorMessage' className='errorMessage'></p>
                          </div>
                          <div className='input'>
                            <label htmlFor="weight" className='modalLabel'>Peso:</label>
                            <input type="number" id='weight' name='weight' className='modalSmallInput' placeholder='Ex: 80'/>
                            <p id='weightErrorMessage' className='errorMessage'></p>
                          </div>
                        </div>

                        <div className='inputContainer'>
                          <div className='input'>
                            <label htmlFor="age" className='modalLabel'>Idade:</label>
                            <input type="number" id='age' name='age' className='modalSmallInput' placeholder='Ex: 22'/>
                            <p id='ageErrorMessage' className='errorMessage'></p>
                          </div>
                          <div className='input'>
                            <label hmtlFor="sex" className='modalLabel'>sexo:</label>
                            <select id="sex" name="sex" className='modalSmallInput'>
                              <option value="" selected></option>
                              <option value="Masculino">Masculino</option>
                              <option value="Feminino">Feminino</option>
                            </select>
                            <p id='sexErrorMessage' className='errorMessage'></p>
                          </div>

                        </div>
                      </div>

                      <label htmlFor="" className='modalLabel'>Qual o seu biotipo?</label>
                      <select name="bioType" id="bioType" className='modalInput'>
                        <option value="" selected></option>
                        <option value="Ectomorfo">Ectomorfo</option>
                        <option value="Mesomorfo">Mesomorfo</option>
                        <option value="Endomorfo">Endomorfo</option>
                      </select>
                      <p id='bioTypeErrorMessage' className='errorMessage'></p>

                      <label htmlFor="activityFrequence" className='modalLabel'>Você pratica atividade física com qual frequência?</label>
                      <select name="activityFrequence" id="activityFrequence" className='modalInput'>
                        <option value=""></option>
                        <option value="diariamente">Diariamente</option>
                        <option value="3-4 vezes por semana">3-4 vezes por semana</option>
                        <option value="1-2 vezes por semana">1-2 vezes por semana</option>
                        <option value="menos de uma vez por semana">Menos de uma vez por semana</option>
                        <option value="não pratico atividade física">Não pratico atividade física</option>
                      </select>
                      <p id='activityFrequenceErrorMessage' className='errorMessage'></p>
                    </div>
                    <div className="rightSide">
                      <label htmlFor="restrictFoods" className='modalLabel'>Você tem alguma restrição alimentar?</label>
                      <input type="text" id='restrictFoods' name='restrictFoods' className='modalInput' placeholder='Ex: Amendoin, Lactose'/>

                      <label htmlFor="indispensableFoods" className='modalLabel'>Quais comidas são indispensáveis para você?</label>
                      <input type="text" id='indispensableFoods' name='indispensableFoods' className='modalInput' placeholder='Ex: carnes vermelhas' />

                      <label htmlFor="objective" className='modalLabel'>Qual o seu objetivo?</label>
                      <select name="objective" id="objective" className='modalInput'>
                        <option value=""></option>
                        <option value="Ganho de massa muscular">Ganho de massa muscular</option>
                        <option value="Ganho calórico">Ganho calórico</option>
                        <option value="Manutenção do peso">Manutenção do peso</option>
                        <option value="Comer saudável">Comer saudável</option>
                        <option value="Emagrecimento">Emagrecimento</option>
                        <option value="Emagrecimento + ganho de massa">Emagrecimento + ganho de massa</option>
                      </select>
                      <p id='objectiveErrorMessage' className='errorMessage'></p>

                      <label htmlFor="dailyRefsNumber" className='modalLabel'>Quantas refeições você tem tempo de fazer diariamente?</label>
                      <select name="dailyRefsNumber" id="dailyRefsNumber" className='modalInput'>
                        <option value=""></option>
                        <option value="3-4">3-4 refeições</option>
                        <option value="5-6">5-6 refeições</option>
                      </select>
                      <p id='dailyRefsNumberErrorMessage' className='errorMessage'></p>

                      <label htmlFor="lives" className='modalLabel'>Qual o país que você mora atualmente?</label>
                      <input type="text" id='lives' name='lives' className='modalInput' placeholder='Ex: Brasil'/>
                      <p id='livesErrorMessage' className='errorMessage'></p>
                    </div>
                  </div>

                  <button className="buttonForm" id='buttonForm'>Gerar dieta</button>
                </form>

              </div>

            </div>
          </div>
        </>
      )
    }


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
