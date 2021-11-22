document.getElementById('rechnerForm').addEventListener('submit', calcFun)

function calcFun() {
  let z1 = document.getElementById('z1').value
  let z2 = document.getElementById('z2').value
  let op = document.getElementById('op').value
  let span_result = document.getElementById('result')
  let result

  switch (op) {
    case '+':
      result = Number(z1) + Number(z2);
      break;
    case '-':
      result = Number(z1) - Number(z2);
      break;
    case '*':
      result = Number(z1) * Number(z2);
    case '/':
      result = Number(z1) / Number(z2);
      break;
    default:
      result = "ERROR"
  }
  span_result.innerHTML = result;
  event.preventDefault()
}
