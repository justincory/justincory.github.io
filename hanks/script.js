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
    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.menu-mobile').slideToggle(300);
    })
}

function closeMobileMenu(){
    $('.menu-mobile').on('click', 'a', function(){
        $('.icon').trigger('click');
    })
}



function desktopMenu() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 && $(window).width() > 768) {
            $('header.desktop').fadeIn(500);
        } else {
            $('header.desktop').fadeOut(500);
        }
    })
}
$('.effects').click(function () {
  $('.fxcat').css('display', 'block')
  $('.shopicons').not('.fxcat').css('display', 'none')
})
$('.guitar').click(function () {
  $('.guitarcat').css('display', 'block')
  $('.shopicons').not('.guitarcat').css('display', 'none')
})
$('.amps').click(function () {
  $('.ampscat').css('display', 'block')
  $('.shopicons').not('.ampscat').css('display', 'none')
})
$('.bass').click(function () {
  $('.basscat').css('display', 'block')
  $('.shopicons').not('.basscat').css('display', 'none')
})
$('.synth').click(function () {
  $('.synthcat').css('display', 'block')
  $('.shopicons').not('.synthcat').css('display', 'none')
})
$('.accessories').click(function () {
  $('.accessoriescat').css('display', 'block')
  $('.shopicons').not('.accessoriescat').css('display', 'none')
})
$(function () {
  var img = $('.knob');

  if (img.length > 0) {
    var offset = img.offset();

    $('.animation-trigger').mouseenter(function (event) {
      var element = $(this);
      var elementPosition = element.offset();
      var elementX = elementPosition.left + (element.width() / 2);
      var elementY = elementPosition.top + (element.height() / 2);
      var imgX = offset.left + (img.width() / 2);
      var imgY = offset.top + (img.height() / 2);
      var radians = Math.atan2(elementX - imgX, elementY - imgY);
      var degrees = (radians * (180 / Math.PI) * -1) + 180;
      if(degrees <= 100){
        degrees = degrees-35
      } else {
        degrees = degrees+10
      }

      img.css('-moz-transform', 'rotate(' + degrees + 'deg)')
        .css('-webkit-transform', 'rotate(' + degrees + 'deg)')
        .css('-o-transform', 'rotate(' + degrees + 'deg)')
        .css('-ms-transform', 'rotate(' + degrees + 'deg)');
        //alert(degrees)
    });
  }
});
//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
$(desktopMenu);


