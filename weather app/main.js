const apiKey = "321f2a42afb5187f2b530ddead35b51b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");

async function checkWeather(city = "alexandria") {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === 200) {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

            if (data.weather[0].main === "Clouds") {
                document.querySelector(".weather-icon").src = "images/cloudy.png";
            } else if (data.weather[0].main === "Clear") {
                document.querySelector(".weather-icon").src = "images/sun.png";
            } else if (data.weather[0].main === "Rain") {
                document.querySelector(".weather-icon").src = "images/storm.png";
            } else if (data.weather[0].main === "Snow") {
                document.querySelector(".weather-icon").src = "images/snow.png";
            } else if (data.weather[0].main === "Drizzle") {
                document.querySelector(".weather-icon").src = "images/drizzle.png";
            } else if (data.weather[0].main === "Mist") {
                document.querySelector(".weather-icon").src = "images/mist.png";
            }
        } else {
            alert("City not found. Please try again.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong. Please try again later.");
    }
}

searchbutton.addEventListener("click", function () {
    checkWeather(searchbox.value);
});

checkWeather(); 
