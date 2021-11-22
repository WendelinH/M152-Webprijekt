// Start mit JQuery
$(document).ready(function(){
  //Eventhandling für Taschenrechner-Submit-Event
  $('#rechnerForm').on('submit', function(){
    $('#result').text('Hallo Welt')
    let result = "Error 1"
    switch ($('#op').val()) {
      case '+':
        result = Number($('#z1').val()) + Number($('#z2').val());
        break;
      case '-':
        result = Number($('#z1').val()) - Number($('#z2').val());
        break;
      case "*":
        result = Number($('#z1').val()) * Number($('#z2').val());
        break;
      case '/':
        result = Number($('#z1').val()) / Number($('#z2').val());
        break;
      default:
        result = "ERROR"
    }
    $('#result').text(result)
    event.preventDefault()
  })
})
