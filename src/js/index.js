$(document).ready(function(){
	var $nav = $('#nav');
	$(document).scroll(function() {
	    $nav.css({borderBottom: $(this).scrollTop()<50 ? "none":"1px solid rgba(0, 0, 0, 0.2)"});
	});
});