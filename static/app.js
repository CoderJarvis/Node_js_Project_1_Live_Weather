const date = document.getElementById("date");

const getDateTime = () => {
  const d = new Date();
  let text = d.toLocaleString();
  return text;
};
date.innerHTML = getDateTime();
const dayNight = document.getElementById("dayNight");
const d = new Date();
let hour = d.getHours();
if (hour >= 6 && hour < 12) {
  dayNight.innerHTML = "Good Morning...";
} else if (hour >= 12 && hour <= 17) {
  dayNight.innerHTML = "Good Afternoon...";
} else if (hour >= 17 && hour <= 19) {
  dayNight.innerHTML = "Good Evening...";
} else {
  dayNight.innerHTML = "Good Night...";
}
const handleOnclick = () => {
  const inputCity = document.getElementById("inputCity").value;
  // console.log(inputCity);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=621b97856bff885ae1a275937e5fd145`;

  const getTemp = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json(); //json became object
    // console.log(data);
    if (data.cod == "404") {
      alert("please enter valid city name");
      throw new Error("please enter valid city name");
    }
    let city = data.name;
    let temp = Math.round(data.main.temp - 273.15); //kelvin to cel
    // console.log(city);
    // console.log(temp);
    document.getElementById("cityName").innerHTML = city;
    document.getElementById("temp").innerHTML = temp + "&#8451";
  };
  getTemp();
};
const btn = document.getElementById("btn");
btn.addEventListener("click", handleOnclick);