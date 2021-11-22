var myVar = setInterval(setColor, 5000);

function setColor() {
  document.body.style.backgroundColor = getColorCode();
}
//The getColorCode() will give the code every time.
function getColorCode() {
   var makeColorCode = '0123456789ABCDEF';
   var code = '#';
   for (var count = 0; count < 6; count++) {
      code =code+ makeColorCode[Math.floor(Math.random() * 16)];
   }
   return code;
}
