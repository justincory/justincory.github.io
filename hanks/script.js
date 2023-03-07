var video = document.getElementById("video");
var btn = document.getElementByClass("secondary-button");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
'use strict'

function toggleIcon() {
  $('.burger').on('click', function () {
    $('.burger').toggleClass('active')
    $('.menu-mobile').slideToggle(300)
  })
}

function closeMobileMenu() {
  $('.menu-mobile').on('click', 'a', function () {
    $('.burger').trigger('click')
  })
}

//when the page loads call toggleIcon;
$(toggleIcon)
$(closeMobileMenu)
