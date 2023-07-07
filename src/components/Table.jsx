import '../assets/css/Table.css'
import { DataContext, DataContextProvider } from '../context/dataContext'
import React, { useContext, useEffect, useState } from 'react';
import closeBtn from '../assets/images/close.svg'


const Table = () => {
    const person = useContext(DataContext);

    const [tableReady, setTable] = useState(false)

    useEffect(() => {
        if (person.dietData !== null) {
            console.log('Aqui está a pessoa da tabela:', person);
            console.log(tableReady)
            setTable(true)
        } else {
            console.log('Pessoa não existe ainda');
        }
    }, [person]);


    return (
        <div>
        {tableReady ? (
            <div className='modal'>
            <div className="tableContainer">
                    <div className='tableHeader'>
                        <div className='logoContainer'>
                            <h1>NUTRI.IO</h1>
                            <button className='closeModalBtn'><img src={closeBtn} alt="" className='closeBtn' /></button>
                        </div>

                        <h2 className='tableTitle'>Olá, {person.dietData.Nome}, Aqui está sua dieta com objetivo de {person.dietData.Objetivo}. Espero que goste! </h2>

                        
                    </div>

                    <table id="table">
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
                                    <td>{refeicao.Dia}</td>
                                    <td>{refeicao.CafeDaManha}</td>
                                    <td>{refeicao.LancheDaManha}</td> 
                                    <td>{refeicao.Almoco}</td> 
                                    <td>{refeicao.LancheDaTarde}</td> 
                                    <td>{refeicao.Jantar}</td> 
                                    <td>{refeicao.Ceia}</td> 
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>

                    <div className='descriptionContainer'>
                        <div className='dietDescription'>
                            <h3>essa dieta contém aproximadamente</h3>
                            <p>Calorias Diárias: {person.dietData.IngestaoDiaria.Calorias}</p>
                            <p>Proteinas Diarias: {person.dietData.IngestaoDiaria.Proteina}</p>
                            <p>Carboidratos Diários {person.dietData.IngestaoDiaria.Carboidratos}</p>
                        </div>
                        <div className='dietDownload'>
                            <h1>faça o download da dieta</h1>
                            <button>PDF <img src="" alt="" /></button>
                            <button>CSV <img src="" alt="" /></button>
                        </div>

                    </div>

                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Sugestão :</h3>

                        <div className='suggestionContentContainer'>
                            <h3 className='suggestionContent'>
                                teste
                            </h3>
                        </div>
                    </div>

                    <footer>
                        <h3>copyright @ nutri.io 2023</h3>
                    </footer>
            </div>
            </div>
                ) : (
                    <h1>aguardando resposta da API</h1>
                )
                }

            </div>

        
    )
}

export default Table;