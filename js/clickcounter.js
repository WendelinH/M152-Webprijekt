function clickFun(){
  let clickDiv = event.target;
  clickDiv.innerHTML = Number(clickDiv.innerHTML) + 1;
}

// beim laden alle click-Elemente finden
let clickDivs = document.getElementsByClassName('click');

// an jedes click-Element den onclick Attribut die clickFun-Funktion anhängen.
for (var x = 0;x < clickDivs.length;x++){
  clickDivs[x].onclick = clickFun;
}
