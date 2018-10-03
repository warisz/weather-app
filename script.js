const submit = document.getElementById("submit");
const text = document.getElementById("text");
const lower = document.getElementById("lower");
const results = document.getElementById("results");
const html = document.getElementsByTagName("html");
const cloud =document.getElementById("cloud1");
const cloud2 = document.getElementById("cloud2");
let newResults = document.createElement('p');

submit.addEventListener("click", search);

function search(){
  /*UI changes*/
  lower.style.transition = "all .3s ease-out";
  text.style.transition = "all .3s ease-out";
  lower.style.margin = "20px auto";
  text.style.top = "20px";
  html[0].style.backgroundImage = "linear-gradient(white, lightblue)";
  cloud.style.opacity = 0;
  cloud2.style.opacity = 0;
  let city = document.getElementById("form").value;

  /*API information*/
  var url = new URL("https://api.openweathermap.org/data/2.5/weather?q=london&appid=c5bccf8866a24bb0930fce1a1f53a65b");

  //changing units to C
  url.searchParams.append('units', 'metric');

  //changing city depending on input (q=city)
  url.searchParams.set('q', city);

  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();


  request.onload = function () {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response);
    let temperature = data.main.temp;
    let description = data.weather[0].description;
    let wind = data.wind.speed;
    test = wind;
    let resultString = `Temperature: ${temperature} C, Description: ${description}, Wind Speed: ${wind} km/hr`;
    if(temperature){
      console.log("Temp: " + temperature + ", Description: " + description + ", Wind Speed: " + wind);
    }

    newResults.innerHTML = resultString;
    results.appendChild(newResults);
    results.style.position = "relative";
    results.style.bottom = "-100px";
    results.style.transition = "all .3s ease-out";
    results.style.bottom = "0px";
    results.style.fontFamily = "Nunito Sans";
    results.style.fontWeight = "bold";
    results.style.textAlign = "center";


  }




}
