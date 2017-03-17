$(document).ready(function() {
	
	$('.fa-bars').click(function(event) {
		$('.header-menu-list').toggle(0);
	});

	if ($(window).width() <= 991 || $('.mainheader').length == 0) {
		$('.header-menu-logo').attr('src', '../img/header/logo.svg');
		$('.header-menu-list-item a').css('color', 'black');
		$('.header-menu').css('background-color', 'white');
		$('.fa-bars').css('color', 'black');
		$('.header-menu-list-item a').hover(function() {
			$(this).css('color', '#bfbfbf');
		}, function() {
			$(this).css('color', 'black');
		});
	}

	$(window).scroll(function(event) {
		var scroll = $(this).scrollTop();
		
		if (scroll != 0) {
			$('.header-menu').css('background-color', 'white');
			$('.header-menu-list-item a').css('color', 'black');
			$('.fa-bars').css('color', 'black');
			$('.header-menu-list-item a').hover(function() {
				$(this).css('color', '#bfbfbf');
			}, function() {
				$(this).css('color', 'black');
			});
			$('.header-menu-logo').attr('src', '../img/header/logo.svg');
		}
		else {
			if ($(this).width() > 991 && $('.mainheader').length != 0) {
				$('.header-menu').css('background-color', 'transparent');
				$('.header-menu-list-item a').css('color', '#bfbfbf');
				$('.header-menu-list-item a').hover(function() {
					$(this).css('color', 'white');
				}, function() {
					$(this).css('color', '#bfbfbf');
				});
				$('.header-menu-list-item').css('background-color', 'transparent');
				$('.header-menu-logo').attr('src', '../img/header/logo-light.svg');
			}
		}
	});
});