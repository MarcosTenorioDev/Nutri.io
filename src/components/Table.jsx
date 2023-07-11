import '../assets/css/Table.css'
import { DataContext, DataContextProvider } from '../context/dataContext'
import React, { useContext, useEffect, useState } from 'react';
import closeBtn from '../assets/images/close.svg'
import pdfImage from '../assets/images/pdfImage.svg'
import csvImage from '../assets/images/csvImage.svg'

const Table = () => {
    const person = useContext(DataContext);
    const date = new Date();
    const year = date.getFullYear();

    const [tableReady, setTable] = useState(false)

    useEffect(() => {
        if (person.dietData !== null) {
            setTable(true)
        }
    }, [person]);


    return (
        <div>
        {tableReady ? (
            <div className='modalDietTable'>
            <div className="tableContainer">
                    <div className='tableHeader'>
                        <div className='logoContainer'>
                            <h1 className='logo'>NUTRI.IO</h1>
                            <button className='closeTableBtn' onClick={() => setTable(false)}><img src={closeBtn} alt="" className='closeBtn' /></button>
                        </div>

                        <h2 className='tableTitle'>Olá, {person.dietData.Nome}! Aqui está sua dieta com objetivo de {person.dietData.Objetivo}. Espero que goste! </h2>

                        
                    </div>


                    <table id="tableDiet">
                            <thead>
                                <tr>
                                    <th>Dia</th>
                                    <th>Café da manhã</th>
                                    <th>Lanche da manhã</th>
                                    <th>Almoço</th>
                                    <th>Lanche da tarde</th>
                                    <th>Jantar</th>
                                    <th>Ceia</th>
                                </tr>
                            </thead>
                            <tbody>
                            {person.dietData.Refeicoes.map((refeicao, index) => {
                                return(
                                    
                                    <tr key={index}>
                                        <td className='dayColumn'>{refeicao.Dia}</td>
                                        <td className='snackCell'>{refeicao.CafeDaManha}</td>
                                        <td className='snackCell'>{refeicao.LancheDaManha}</td> 
                                        <td className='snackCell'>{refeicao.Almoco}</td> 
                                        <td className='snackCell'>{refeicao.LancheDaTarde}</td> 
                                        <td className='snackCell'>{refeicao.Jantar}</td> 
                                        <td className='snackCell'>{refeicao.Ceia}</td> 
                                    </tr>
                                )
                            })}
                            </tbody>
                    </table>

                    

                    <div className='descriptionContainer'>
                        <div className='dietDescription'>
                            <h3 className='dietDescriptionTitle'>essa dieta contém aproximadamente :</h3>
                            <p className='dietDescriptionContent'>Calorias Diárias: {person.dietData.IngestaoDiaria.Calorias}</p>
                            <p className='dietDescriptionContent'>Proteinas Diarias: {person.dietData.IngestaoDiaria.Proteina}</p>
                            <p className='dietDescriptionContent'>Carboidratos Diários: {person.dietData.IngestaoDiaria.Carboidratos}</p>
                        </div>
                        <div className='dietDownload'>
                            <h3 className='dietDescriptionTitle'>faça o download da dieta</h3>
                            <div className='tableBtnContainer'>
                                <button className='tableButton'>PDF <img src={pdfImage} alt="" /></button>
                                <button className='tableButton'>CSV <img src={csvImage} alt="" /></button>
                            </div>
                        </div>

                    </div>

                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Sugestão :</h3>

                        <div className='suggestionContentContainer'>
                            <h3 className='suggestionContent'>
                                {person.dietData.InformacoesAdicionais}
                            </h3>
                        </div>
                    </div>

                    <footer>
                        <h3 className='copyright'>copyright &copy; nutri.io {year}</h3>
                    </footer>
            </div>
            </div>
                ) : (
                    <></>
                )
                }

            </div>

        
    )
}

export default Table;