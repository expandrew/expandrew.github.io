function redirectPage() {
  window.location = linkLocation;
}

$(document).ready(function() {
  $("body").css("opacity", "0");
  $("body").animate({opacity: 1}, 2000)

  // Fade out when leaving site
  $("a").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $(".site-wrapper").addClass("white");
    $("body").fadeOut(800, redirectPage);
  });
});

