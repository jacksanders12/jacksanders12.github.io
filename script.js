$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
    $('.hidden').delay(1000).fadeIn(500);
  });
});

function removeHidden() {
	$("#mainContent").removeClass("hidden");
}