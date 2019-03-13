$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
  });
});

<script>
    $('#collapsibleNavbar ul li a').click(function(){
    $('li').parent().removeClass('active');
    $(this).parent().addClass('active');
    });​  
</script>

function removeHidden() {
	$("#mainContent").removeClass("hidden");
}

