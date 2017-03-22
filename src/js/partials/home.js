$(document).ready(function() {

	addDots(
		$(".lateblog-blog-info-text")
	);

	addDots(
		$(".blog-item-info-text")
	);

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

	$(".work-slider").unslider({
		arrows: false,
		autoplay: true,
		infinite: true,
		delay: 5000
	});

	// scrolling to anchor from another page
	// *only* if we have anchor on the url
	if(window.location.hash.length > 0) {
		console.log('test');
    	// set view at the top
    	scroll(0,0);
    	setTimeout( function() { scroll(0,0); }, 1);

        // smooth scroll to the anchor id
        $('html, body').animate({scrollTop:
        	$(window.location.hash)
        	.position()
        	.top - 100}, 2000);
    }

    $('.mainheader-arrow, .anchor').click(function(){
    	var target = $(this).attr('to');
    	$('html, body').animate({scrollTop:$(target).position().top - 100}, 2000);
    });

    var x = false;
    $('.cat-btn').on('click', function(){
    	if (!x) {
    		$('.cat').css('padding-bottom', '0');
    		$('.cat-menu').css('margin-top', '10px');
    		$('.cat-menu').css('margin-bottom', '10px');
    		$('.cat-menu').css('max-height', '600px');
    		$('.cat-menu-item').css('visibility', 'visible');
    		$('.cat-menu-item').css('opacity', '1');
    		x = true;
    	}
    	else {
    		$('.cat').css('padding-bottom', '45px');
    		$('.cat-menu').css('margin-top', '0px');
    		$('.cat-menu').css('margin-bottom', '0px');
    		$('.cat-menu').css('max-height', '0');
    		$('.cat-menu-item').css('visibility', 'hidden');
    		$('.cat-menu-item').css('opacity', '0');
    		x = false;
    	}
    });


});


function addDots(el) {
	$(el).each(function(){
		var p = $(this).children('p');
		while (p.outerHeight() > $(this).height()) {
		p.text(function(index, text) {
			return text.replace(/\W*\s(\S)*$/, '...');
		})
	}
	})
}