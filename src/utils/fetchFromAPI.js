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



export const fetchFromAPI =async (url,search)=>{
  let data;
 if(search){
  options.params = {};
  options.params.id= url;
  options.url= `https://youtube138.p.rapidapi.com/video/streaming-data/`;
  data = await axios.request(options);
  }

 else{
  options.params= {q: 'gym', hl: 'en', gl: 'US'}
  options.params.q= url;
  options.params.url= 'https://youtube138.p.rapidapi.com/search/';
  data = await axios.request(options);
 }
  return data.data;
}