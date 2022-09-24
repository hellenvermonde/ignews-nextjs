import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query)
    
    const users = [
        { id: 1, name: 'Diego' },
        { id: 2, name: 'Dani' },
        { id: 3, name: 'Rafa' },
    ]

    return response.json(users)
}


// Chamada de função: http://localhost:3000/api/users/1/edit/bnanana