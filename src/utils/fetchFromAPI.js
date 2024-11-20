import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL
const key = import.meta.env.VITE_API_KEY
console.log(key);
const options = {
    // method: 'GET',
    // url: URL,
    params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        // part: 'id,snippet',
        // type: 'video',
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': key,
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export async function fetchFromAPI(url) {
    console.log(key);
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }