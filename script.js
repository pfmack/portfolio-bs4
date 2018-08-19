
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".fixed-top").css("background" , "#40746E");
		$(".nav-link").css("color", "#ffffff");
	  }

	  else{
		  $(".fixed-top").css("background" , ""); 
		  $(".nav-link").css("color", "");
	  }
  })
})

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});