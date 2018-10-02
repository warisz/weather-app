const submit = document.getElementById("submit");
const text = document.getElementById("text");
const lower = document.getElementById("lower");
const body = document.getElementsByTagName("body");

submit.addEventListener("click", search);

function search(){
  lower.style.transition = "all .3s ease-out";
  text.style.transition = "all .3s ease-out";
  lower.style.margin = "10px auto";
  text.style.top = "10px";
  body[0].style.backgroundColor = "lightblue";
  console.log(document.getElementById("form").value);
}
