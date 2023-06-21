// Chave da API do OPENAI
const OPENAI_API_KEY = "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";


// Requisição para chatgpt
await fetch("https://api.openai.com/v1/completions", {

    // Método para enviar os dados
    method: "POST",

    // Dados ennviados no cabeçalho da requisição
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + OPENAI_API_KEY,
    },

    // Enviar os dados no corpo da requisição
    body: JSON.stringify({
        model: "text-davinci-003", //Modelo
        prompt: pergunta, // Texto da pergunta
        max_tokens: 2048, // Tamanho da resposta
        temperature: 0.5 // Criatividade na resposta
    }),
})
    // Acessa o then quando obtiver resposta
    .then((resposta) => resposta.json())
    .then((dados) => {
        //console.log(dados);
        //console.log(dados.choices[0].text);

        // Enviar o texto da resposta para a página HTML
        document.getElementById('resposta').innerHTML = dados.choices[0].text;
    })
    // Retorna catch quando gerar erro
    .catch(() => {
        // Enviar o texto da resposta para a página HTML
        document.getElementById('resposta').innerHTML = "Sem resposta";
    });

// Substituir o texto do botão para "Enviar"
document.getElementById('btn-pergunta-chat').value = "Enviar";
    });

