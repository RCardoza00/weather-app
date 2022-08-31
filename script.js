// Current Weather API Endpoint

// http://api.weatherstack.com/current
//     ? access_key = YOUR_ACCESS_KEY
//     & query = New York
    
// // optional parameters: 

//     & units = m
//     & language = en
//     & callback = MY_CALLBACK
const API_KEY = "c7418485f7198d8b6cde9b696f03fee0";
let inputText = document.querySelector(".form__field");

function getVal() {
    if(event.key === 'Enter') {
        const val = document.querySelector(".form__field").value;
        console.log(val);
        const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${val}`;
    
        fetch(URL)
          .then(response =>response.json() )
          .then(data =>{
            let ubicacion = document.querySelector(".location");
            let degreesResponse =document.querySelector(".temp");
            let conditionsIMG =  document.getElementById("imgTemp");
            let windSpeed = document.querySelector(".wind");
            let Humidity = document.querySelector(".rain");
    
            console.log(data);
           ubicacion.innerHTML = `${data.location.name}`;
           degreesResponse.innerHTML = `${data.current.temperature}&deg;`;
           console.log(data.current.weather_icons[0]);
           conditionsIMG.src = data.current.weather_icons[0];
           windSpeed.innerHTML = `${data.current.wind_speed} MPH`;
           Humidity.innerHTML = `${data.current.humidity} MM`
          })
          .catch(err=>console.log(err));
        
    }
    
  }
 
  function search(ele) {
    
}



console.log(inputText.textContent);
console.log(URL); 