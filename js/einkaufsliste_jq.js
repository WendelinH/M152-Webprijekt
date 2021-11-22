// Start mit JQuery
$(document).ready(function(){
  //Eventhandling für Taschenrechner-Submit-Event
  $('#einkaufForm').on('submit', function(){
    let new_li = $('<li></li>')
      .addClass('einkauf-item')
      .append($('<span></span>').text($("#was").val() + " "))
      .append($('<span></span>').text($("#wieviel").val()))
    new_li.on('click', function(){
      $(this).remove()
    })
    $("#liste ul").prepend(new_li);
    $("#was").val('')
    $("#wieviel").val('')
    event.stopPropagation()
    event.preventDefault()
  })
})
