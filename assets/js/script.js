const BASE_URL = "https://api.thecatapi.com/v1/images/search";

// Alternativa Usando AXIOS 

const promessa = axios.get(BASE_URL)
promessa.then(exibeImagem)
const elemento = document.querySelector("#cat")

function exibeImagem(resposta){
    elemento.src = resposta.data[0].url
}
   
const btn = document.getElementById('change-cat');
btn.addEventListener('click', trocarImg);
 
function trocarImg() {
    const promessa = axios.get(BASE_URL);
    promessa.then(exibeImagem);
  }



//  Alternativa Sem Usar AXIOS 



// const getCats = async () => {
//     try {
//         const data = await fetch(BASE_URL); 
//         const json = await data.json();
//         return json[0].url
//     } catch (e) {
//         console.log(e.message);        
//     }
// };

// const loadImg = async () => {
//     const img = document.getElementsByTagName('img')[0];
// 	img.src = await getCats();
    
// }

// loadImg();

// const btn = document.getElementById('change-cat');
// btn.addEventListener('click', loadImg);




