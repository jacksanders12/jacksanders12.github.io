$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
  });
});

<script>
    $('#fixednav ul li a').click(function(){
    $('a').parent().removeClass('active');
    $(this).parent().addClass('active');
    });​  
</script>

function removeHidden() {
	$("#mainContent").removeClass("hidden");
}

