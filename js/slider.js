var sliderFun = function updateSlider() {
  slideAmount = event.target.value;
  var display = document.getElementById("chosen");
  display.innerHTML = slideAmount;
  var pic = document.getElementById("pic");
  pic.style.width = slideAmount + "%";
  pic.style.height = slideAmount + "%";
}

document.getElementById("slide").onchange = sliderFun;
