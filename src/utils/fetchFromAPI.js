import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";


const options = {
    params: { maxResults:'50' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


export const fetchFromAPI =async (url)=>{
const {data} = await axios.get(`${BASE_URL}/${url}`, options);
console.log(data);
return data;
} 