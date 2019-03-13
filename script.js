$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
    $$('.my-class').delay(1000).fadeIn(500);
  });
});

function removeHidden() {
	$("#mainContent").removeClass("hidden");
}