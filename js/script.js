$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
  });
});



/*$( '#topheader .navbar-nav li' ).on( 'click', function () {
	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});*/

