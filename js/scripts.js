function preload(images) {
  $(images).each(function() {
    $('<img/>')[0].src = this;
  });
}

function redirectPage() {
    window.location = linkLocation
  }

$(document).ready(function() {
  $(".b").hide();
  $(".a").hover(function() {
    if ($(".b").css('display') === "none") {
      $(".b").delay(300).slideToggle(800, "swing");
    };
  });
});

$(document).ready(function() {
  $(".b").hide();
  $("span.n").click(function() {
    $(".b").slideToggle(800, "swing");
  });
});

$(document).ready(function() {
  $("body").css("display","none");
  $("body").fadeIn(2000);
  $("a").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(800, redirectPage);
  });
});


