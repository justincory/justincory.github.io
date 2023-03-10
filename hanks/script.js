'use strict'

var video = document.getElementById('video')
var btn = document.getElementById('pause-button')
var btnTxt = document.getElementById('button-text')

function myFunction() {
  if (video.paused) {
    video.play()
    btnTxt.innerHTML = 'Pause'
  } else {
    video.pause()
    btnTxt.innerHTML = 'Play'
  }
}

function toggleIcon() {
  $('.icon').on('click', function () {
    $('.icon').toggleClass('active')
    $('.menu-mobile').slideToggle(300)
  })
}

function closeMobileMenu() {
  $('.menu-mobile').on('click', 'a', function () {
    $('.icon').trigger('click')
  })
}

function desktopMenu() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50 && $(window).width() > 768) {
      $('header.desktop').fadeIn(500)
    } else {
      $('header.desktop').fadeOut(500)
    }
  })
}
$('.effects').click(function () {
  $('.gear-selector').css('transform', 'rotate(0deg)').css('bottom', '110px').css('left','118px')
  $('.fx-on').css('display', 'block')
  $('.child.right div').not('.fx-on').css('display', 'none')
})
$('.guitar').click(function () {
  $('.gear-selector').css('transform', 'rotate(320deg)').css('bottom', '113px').css('left','135px')
  $('.guitar-on').css('display', 'block')
  $('.child.right div').not('.guitar-on').css('display', 'none')
})
$('.amps').click(function () {
  $('.gear-selector').css('transform', 'rotate(40deg)').css('bottom', '113px').css('left','100px')
  $('.amps-on').css('display', 'block')
  $('.child.right div').not('.amps-on').css('display', 'none')
})
$('.bass').click(function () {
  $('.gear-selector').css('transform', 'rotate(230deg)').css('bottom', '155px').css('left','145px')
  $('.bass-on').css('display', 'block')
  $('.child.right div').not('.bass-on').css('display', 'none')
})
$('.synth').click(function () {
  $('.gear-selector').css('transform', 'rotate(130deg)').css('bottom', '155px').css('left','95px')
  $('.synth-on').css('display', 'block')
  $('.child.right div').not('.synth-on').css('display', 'none')
})
$('.accessories').click(function () {
  $('.gear-selector').css('transform', 'rotate(180deg)').css('bottom', '165px').css('left','118px')
  $('.access-on').css('display', 'block')
  $('.child.right div').not('.access-on').css('display', 'none')
})
$(function () {
  var img = $('.knob')

  if (img.length > 0) {
    var offset = img.offset()

    $('.animation-trigger').mouseenter(function (event) {
      var element = $(this)
      var elementPosition = element.offset()
      var elementX = elementPosition.left + element.width() / 2
      var elementY = elementPosition.top + element.height() / 2
      var imgX = offset.left + img.width() / 2
      var imgY = offset.top + img.height() / 2
      var radians = Math.atan2(elementX - imgX, elementY - imgY)
      var degrees = radians * (180 / Math.PI) * -1 + 180
      if (degrees <= 100) {
        degrees = degrees - 35
      } else {
        degrees = degrees + 10
      }

      img
        .css('-moz-transform', 'rotate(' + degrees + 'deg)')
        .css('-webkit-transform', 'rotate(' + degrees + 'deg)')
        .css('-o-transform', 'rotate(' + degrees + 'deg)')
        .css('-ms-transform', 'rotate(' + degrees + 'deg)')
      //alert(degrees)
    })
  }
})

//when the page loads call toggleIcon;
$(toggleIcon)
$(closeMobileMenu)
