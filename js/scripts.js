function preload(images) {
  $(images).each(function() {
    $('<img/>')[0].src = this;
  });
}

function redirectPage() {
    window.location = linkLocation
  }

$(document).ready(function() {
  $(".blurb").hide();
  $(".name-link").click(function() {
    $(".blurb").slideToggle(600, "swing");
  });
});

$(document).ready(function() {
  $("body").css("display","none");
  $("body").fadeIn(2000);
  $("a.expandrew").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(800, redirectPage);
  });
});


