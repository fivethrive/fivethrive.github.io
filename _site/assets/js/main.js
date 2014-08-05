$(document).on('click', '.top-nav ul li', function() {
  $('.top-nav ul li').removeClass("active").filter(this).addClass("active");
});