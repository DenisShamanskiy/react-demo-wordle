// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios').default;

const serverURLLocal = 'http://localhost:3002'
// const serverURL = 'https://react-demo-wordle-api.vercel.app/api/registration'

type BarRow = {
    name: number
    percent: string
    count: number
  }

type Stats = {
    
        win: number
        loss: number
        surrender: number
        bar: BarRow[]
    
}

export async function registration(username: string, password: string, stats: Stats) {

    try {
        const response = await axios({
            method: 'post',
            url: serverURLLocal,
            data: {
                username: username,
                password: password,
                stats: stats
            }
        });

        console.log(response.data);

        return response.data;

    } catch (e) {
        console.log(e);
    }

    
    
}

export async function login(username: string, password: string) {

    try {
        const response = await axios({
            method: 'post',
            url: `${serverURLLocal}/api/login`,
            data: {
                username: username,
                password: password
            }
        });

        console.log(response);

        return response;

    } catch (error) {
        
        // console.log(error.response.data.message);
        console.log(error);
        
        return error.response
    }

    
    
}

export async function updateStats(id: string, stats: unknown) {

    try {
        const response = await axios({
            method: 'put',
            url: 'https://react-demo-wordle-api.vercel.app/api/stats',
            data: {
                id: id,
                stats: stats
            }
        });

        console.log(response.data);

        return response.data;

    } catch (e) {
        console.log(e);
    }

    
    
}