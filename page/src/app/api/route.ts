import axios from 'axios';

async function api(path: string) {
    let url = `${process.env.API_URL}/${path}`;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        return false
    }
}

export default api