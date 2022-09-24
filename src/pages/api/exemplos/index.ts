import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Diego' },
        { id: 2, name: 'Dani' },
        { id: 3, name: 'Rafa' },
    ]

    return response.json(users)
}

// Api Routes
// Nome do arquivo é uma rota da API
// Essa rota não é acessivel ao cliente final, pois é executado no servidor do browser
// Mais segurança do que renderizar isso no front.
// Serverless -> toda vez que função é executada, ele devolve o conteudo e morre até ser chamada novamente, ele não fica executando 24h
