let counter = 0

function addElement() {
  counter++
  let container = document.getElementById('tiles')
  let newElement = document.createElement("div")
  newElement.innerHTML = counter + ". Div-Element"
  newElement.className = "new-div col-2"
  newElement.onclick = removeElement
  container.appendChild(newElement)
}

function removeElement() {
  event.target.remove()
}
