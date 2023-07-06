import '../assets/css/Table.css'
import { DataContext, DataContextProvider } from '../context/dataContext'
import React, { useContext, useEffect, useState } from 'react';


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

            <div className="tableContainer">
                {tableReady ? (
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
                ) : (
                    <h1>aguardando resposta da API</h1>
                )
                }

            </div>

        </div>
    )
}

export default Table;