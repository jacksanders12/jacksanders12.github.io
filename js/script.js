<script type="text/javascript" src="jquery-3.3.1.js"></script>

$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
  });
});



$( '#topheader .navbar-nav a' ).on( 'click', function () {
	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

