let api = "https://covid19.mathdro.id/api/countries/Indonesia";
let getApi = async (api) => {
  let response = await fetch(api);
  response = await response.json();
  console.log(response);
  console.log(response.deaths.value);
  let dataIndonesia = document.querySelector(".card-text");

  dataIndonesia.innerHTML +=`
  <p class="card-text">${response.confirmed.value}</p>
  
  `  ;

  let dataInd = document.querySelector(".card-text1");

  dataInd.innerHTML +=`
  <p class="card-text1">${response.recovered.value}</p>
  
  `  ;

  let dataIndo = document.querySelector(".card-text2");

  dataIndo.innerHTML +=`
  <p class="card-text2">${response.deaths.value}</p>
  
  `  ;
  
};

getApi(api);


// dunia
let url =" https://covid19.mathdro.id/api/"
let getUrl= async (url) =>{
  let response = await fetch(url);
  response = await response.json();
  console.log(response);
  let dataIndonesia = document.querySelector(".card-text3");

  dataIndonesia.innerHTML +=`
  <p class="card-text3">${response.confirmed.value}</p>
  
  `  ;

  let dataIndo = document.querySelector(".card-text4");

  dataIndo.innerHTML +=`
  <p class="card-text4">${response.recovered.value}</p>
  
  `  ;
  let dataInd = document.querySelector(".card-text5");
  dataInd.innerHTML +=`
  <p class="card-text5">${response.deaths.value}</p>
  
  `  ;
  
}
getUrl(url)

