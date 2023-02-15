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