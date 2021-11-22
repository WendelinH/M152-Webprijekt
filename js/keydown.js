window.addEventListener('keydown', keydown)



function keydown() {
  console.log("event.code = "+event.code+" | event.key = "+event.key);

  let container = document.getElementById('key-list')
  let newElement = document.createElement('LI')
  newElement.innerHTML = "event.code = "+event.code+"   |  event.key = "+event.key
  container.insertBefore(newElement, container.childNodes[0]);
}
