$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
    //$("#mainContent").removeClass("hidden");
  });
});

function removeHidden() {
	$("#mainContent").removeClass("hidden");
}