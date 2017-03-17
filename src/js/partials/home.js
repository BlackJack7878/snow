$(document).ready(function() {

	// opinions slider
	$(".opinions-slider").unslider({
		autoplay: true,
		infinite: true,
		delay: 5000,
		arrows: false
	});

	$(".lateblog-slider").unslider({
		arrows: false
	});

	$('.mainheader-arrow').click(function(){
		var target = $(this).attr('to');
		$('html, body').animate({scrollTop:$(target).position().top - 100}, 2000);
	});

	var x = false;
	$('.cat-btn').on('click', function(){
		if (!x) {
			$('.cat-menu-item').css('opacity', '1');
			x = true;
		}
		else {
			$('.cat-menu-item').css('opacity', '0');
			x = false;
		}
	});
	

});