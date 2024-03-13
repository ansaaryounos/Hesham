function Gut() {
  let response = document.getElementById("gut-response");
  let question = document.getElementById("ques");
  response.style.display = "block";
  question.style.display = "none";
}

let increment = 0;

function NichtGut() {
  let nicht = document.getElementById("nicht-gut");
  increment = increment + 10;
  nicht.style.transform = 'Translate('+parseInt(increment)+'px)'
}