function preload(images) {
  $(images).each(function() {
    $('<img/>')[0].src = this;
  });
}

function redirectPage() {
  window.location = linkLocation;
}

$(document).ready(function() {
  $("body").css("display","none");
  $("body").fadeIn(2000);
  $(".b").hide();

  // Fade out when leaving site
  $("a").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(800, redirectPage);
  });

  // Blurb Toggle
  $(".show-b").click(function() {
    if ($(".b").css('display') === "none") {
      $(".b").slideToggle(800, "swing");
    };
  });
});

