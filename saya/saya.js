
const getDataGlobal = async () => {
  const response = await fetch("https://covid19.mathdro.id/api/confirmed");
  result = await response.json();
  allCountry(result);
  console.log(response);
};
let result = [];

const suggestions = document.querySelector(".suggestions");
const allCountry = (countries) => {
  const htmlArray = countries
    .map((data) => {
      return `
      <div class="col">
        <div class="text-center card border-dark mb-3" style="max-width: 18rem ">
          <div class="card-header fw-bold ">${data.countryRegion}</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h6 class="text-secondary">Cases</h6>
                <p>${data.confirmed}</p>
              </div>
              <div class="col">
                <h6 class="text-secondary">Recovered</h6>
                <p>${data.recovered}</p>
              </div>
              <div class="col">
                <h6 class= "text-secondary">Death</h6>
                <p>${data.deaths}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join("");
  suggestions.innerHTML = htmlArray;
};

getDataGlobal();


const searchCountry = document.querySelector(".search");
searchCountry.addEventListener("keyup", (e) => {
  const target = e.target.value;
  const filteredCountry = result.filter((data) => {
    return data.countryRegion.toLowerCase().includes(target.toLowerCase());
  });
  if (Object.keys(filteredCountry).length !== 0) {
    allCountry(filteredCountry);
    console.log(filteredCountry);
  } else {
    suggestions.innerHTML = `<h5 class="card-title card-body te text-center"><P class=" text-secondary">INPUTAN ANDA SALAH</p><br>
      <p></p><img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/v2/assets/empty.svg"
    width="250" height="300"alt="INPUTAN ANDA SALAH"
  ></img>; </P></div>
       </div>`;
  }
});