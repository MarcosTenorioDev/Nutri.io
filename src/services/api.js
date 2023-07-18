import API_KEY from "./apikey";
import axios from "axios"

async function getChat(person) { 
    const OPENAI_API_KEY = API_KEY;
    const content = `Faça uma dieta para uma pessoa chamada ${person.name}, 
    altura:${person.height}, 
    idade: ${person.age}, 
    sexo: ${person.sex}, 
    biotipo: ${person.biotype},
    que pratica atividade física: ${person.activityFrequence},
    comidas restritas (não adicione nada que contenha): ${person.restrictFoods},
    comidas indispensáveis (não esqueça de adicionar): ${person.indispensableFoods},
    objetivo da dieta: ${person.objective},
    gere de ${person.dailyRefsNumber} refeições diárias para atingir o objetivo, caso possível, caso não, explique o motivo,
    escolha preferencialmente alimentos fáceis de encontrar em: ${person.lives}.
    Retorne uma resposta em forma de JSON, e É OBRIGATORIAMENTE QUE FAÇA A DIETA DE SEGUNDA À DOMINGO. Quero dados gerais de ingestão calórica diária, ingestão de proteína diária e 
    ingestão de carboidratos diários dessa dieta criada e também quaisquer outras informações que você julgar útil. Segue o modelo do JSON, PREENCHA TODOS OS 
    DADOS VAZIOS OBRIGATORIAMENTE DE ACORDO COM A DIETA SOLICITADA, SIGA ESTRITAMENTE O MODELO DO JSON E NÃO ESQUEÇA NENHUM CAMPO VAZIO!! e principalmente, 
    nunca esqueça de colocar todos os dias de segunda a domingo com todas as refeições preenchidas e também os dados da ingestão diária(ex: proteina: 180g, carboidratos: 300g e calorias: 4000Kcal) de forma alguma!!!!
    lembre-se também de sempre especificar a quantidade das porções ou unidades de comidas geradas e também busque não repetir as refeições mais de uma vez durante a semana, se atente a isso:
    {
      "Nome": "${person.name}",
      "Objetivo": "${person.objective}",
      "IngestaoDiaria": {
        "Proteina": "...g",
        "Carboidratos": "...g",
        "Calorias": "...Kcal"
      },
      "Refeicoes": [
        {
          "Dia": "Segunda-feira",
          "CafeDaManha": "valores dinâmicos de acordo com a solicitação da dieta",
          "LancheDaManha": "valores dinâmicos de acordo com a solicitação da dieta",
          "Almoco": "valores dinâmicos de acordo com a solicitação da dieta",
          "LancheDaTarde": "valores dinâmicos de acordo com a solicitação da dieta",
          "Jantar": "valores dinâmicos de acordo com a solicitação da dieta",
          "Ceia": "valores dinâmicos de acordo com a solicitação da dieta"
        },
      ],
      "InformacoesAdicionais": "nesse campo adicione qualquer coisa que achar válido para a dieta em específico"
    }
    `;

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
        { role: "system", content: "Você é uma IA que gera dietas, com refeições de segunda a domingo com base nos dados recebidos." },
        { role: "user", content: content }, 
      ],
    };

    return axios
      .post("https://api.openai.com/v1/chat/completions", data, config)
      .then((resposta) => {
        const jsonResponse = resposta.data.choices[0].message.content
        const parsedJsonResponse = JSON.parse(jsonResponse);
        return parsedJsonResponse;
      })
      .catch((error) => {
        console.error(error);
        return null
      });
  }

  export default getChat;