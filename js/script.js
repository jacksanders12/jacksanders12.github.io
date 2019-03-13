$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
  });
});



function removeHidden() {
	$("#mainContent").removeClass("hidden");
}

