const submit = document.getElementById("submit");
const text = document.getElementById("text");
const lower = document.getElementById("lower");
const html = document.getElementsByTagName("html");

submit.addEventListener("click", search);

function search(){
  lower.style.transition = "all .3s ease-out";
  text.style.transition = "all .3s ease-out";
  lower.style.margin = "10px auto";
  text.style.top = "10px";
  html[0].style.backgroundImage = "linear-gradient(lightpink, lightblue)";
  console.log(document.getElementById("form").value);
}
