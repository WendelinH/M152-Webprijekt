let toggleState = true;
let textliElement = document.getElementById("textli");
let alterText = textliElement.innerHTML;

function textli(){
  if (toggleState) {
    textliElement.innerHTML = "Hallo Bongo?";
  } else {
    textliElement.innerHTML = alterText;
  }
  toggleState = !toggleState;
}
