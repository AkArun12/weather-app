const input = document.querySelector("input");
const btn = document.getElementById("btn");

const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const wind = document.querySelector(".wind");

btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
});

function getWeather(city) {
  console.log(city);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'553441cce80703fdb7d3fee08d706d61'}`)
  
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const iconCode=data.weather[0].icon;
        icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon" />`;

        const weatherCity=data.name;
        const weatherCountry=data.sys.country; 

        weather.innerHTML=`${weatherCity} , ${weatherCountry}`;

        const weatherTemperature=data.main.temp;
        temperature.innerHTML= `${(weatherTemperature-273).toFixed(2)}°C `;

        const weatherDescription=data.weather[0].description;
        description.innerHTML= weatherDescription;

        const weatherWind=data.wind.speed;
        wind.innerHTML=` Wind Speed: ${weatherWind} km/hr`;

      
  })

};

    
  


//   const apikey="553441cce80703fdb7d3fee08d706d61";

//   const id="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"


