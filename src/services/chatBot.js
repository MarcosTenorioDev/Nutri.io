import API_KEY from "./apikey";
import axios from "axios"

async function ChatBot(message){
    const OPENAI_API_KEY = API_KEY;
    const content = message;

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
          { role: "system", content: "Você é uma IA assistente para perguntas que envolvam nutrição, alimentação, saúde e exercício físico. não responda coisas fora desse escolpo de assunto e seja sempre educada e amigável" },
          { role: "user", content: content  }, 
          { role: "assistant" , content: "Você é uma IA assistente para perguntas que envolvam nutrição, alimentação, saúde e exercício físico. não responda coisas fora desse escolpo de assunto e seja sempre educada e amigável"}
        ],
      };

      return axios
      .post("https://api.openai.com/v1/chat/completions", data, config)
      .then((response) => {
        response = response.data.choices[0].message.content
        console.log(response)
        return response
      })
      .catch((error) => {
        console.error(error);
        return "Houve algum erro ao enviar sua resposta, por favor, pergunte novamente."
      });
}

export default ChatBot