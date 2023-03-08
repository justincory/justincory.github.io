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
  $('.accessories').css('display', 'block')
  $('.shopicons').not('.accessories').css('display', 'none')
})
$('#apparel').click(function () {
  $('.apparel').css('display', 'block')
  $('.shopicons').not('.apparel').css('display', 'none')
})
$('#figures').click(function () {
  $('.figures').css('display', 'block')
  $('.shopicons').not('.figures').css('display', 'none')
})
$('#plushies').click(function () {
  $('.plushies').css('display', 'block')
  $('.shopicons').not('.plushies').css('display', 'none')
})
//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
$(desktopMenu);


