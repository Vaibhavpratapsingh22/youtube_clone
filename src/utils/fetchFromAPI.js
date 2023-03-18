import axios from "axios";
const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/search/',
  params: {q: 'gym', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '557375a78dmsha34fde84ff4f99fp1638f8jsn03b1ca6d0be8',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};



export const fetchFromAPI =async (url)=>{
  options.params.q= url;
  let {data} = await axios.request(options);
  return data;
}