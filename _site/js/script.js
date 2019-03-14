<<<<<<< HEAD

$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
  });
});



$( '#topheader .navbar-nav a' ).on( 'click', function () {
	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

=======
// Use this javascript file for any dynamic or interactive elements
>>>>>>> 5ca69d98b706d24c26df5b9aab42e94da3c5521c
