const btn_i_play = 'fas fa-play-circle'
const btn_i_pause = 'far fa-pause-circle'

const audio = document.getElementById('podcast')

const btn_play = document.getElementById('btn_play')

const span_volume = document.getElementById('span_volume')

audio.pause()
span_volume.innerHTML = Math.ceil(audio.volume * 100) + "%"

btn_play.addEventListener('click', play_pause)




function play_pause() {
  if (audio.paused) {
    audio.play()
    btn_play.firstElementChild.className = btn_i_pause
  } else {
    audio.pause()
    btn_play.firstElementChild.className = btn_i_play
  }
}

var sliderFun = function updateSlider() {
  slideAmount = event.target.value;
  span_volume.innerHTML = slideAmount + "%";
  audio.volume = slideAmount / 100;
}
document.getElementById("slide_volume").onchange = sliderFun;
