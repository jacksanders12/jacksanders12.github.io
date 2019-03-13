$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
    $alert("Hello! I am an alert box!!");
  });
});



function removeHidden() {
	$("#mainContent").removeClass("hidden");
}

