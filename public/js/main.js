$('.menu-toggle').click(function() {
  $('.nav-mobile').toggleClass('active')
})

$('.nav-link').click(function() {
  $('.nav-mobile').removeClass('active')
})
