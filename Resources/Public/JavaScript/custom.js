$(document).ready(function(){

	// Function is setting padding-top to <body> depending on #main-navbar height.
	// $('body').css({'padding-top': (($('#specialmenu').height()) + 15 )+'px'});
	// $(window).resize(function(){
	// 	$('body').css({'padding-top': (($('#specialmenu').height()) + 15 )+'px'});
	// });

	$('.navbar-toggler').on('click', function(){
		$('#specialmenu').removeClass('navbar-light').removeClass('border-light').removeClass('bg-light').addClass('navbar-dark bg-dark border-dark');
	});

	// Closes the menu on click on a link (as this links jumps instead of opening another URL)
	$('.nav-link').on('click', function(){
		$('.navbar-collapse').collapse('hide');
		$('#specialmenu').removeClass('navbar-dark').removeClass('border-dark').removeClass('bg-dark').addClass('navbar-light bg-light border-light');
	});

	// Closes the menu on click outside the menu
	$(document).click(function(event) {
		if ($(event.target).parents(".navbar-collapse").length < 1) {
			var clickover = $(event.target);
			var _opened = $(".navbar-collapse").hasClass("show");
			if (_opened === true && !clickover.hasClass("navbar-toggler")) {
				$(".navbar-collapse").collapse('hide');
				$('#specialmenu').removeClass('navbar-dark').removeClass('border-dark').removeClass('bg-dark').addClass('navbar-light bg-light border-light');
			}
		}
	});

	var cookieName = 'accept_cookies';

	if(document.cookie.indexOf(cookieName + '=true') > -1)	{
		window[cookieName] = true;
		$('#cookieconsent').collapse('hide');
	}
	else{
		$('#cookieconsent').collapse('show');
	}
	$('#cookieconsentbutton').on('click', function(){
		document.cookie = cookieName + '=true;path=/';
		window[cookieName] = true;
		$('#cookieconsent').collapse('hide');
		// $('#cookieconsent').hide();
	});
});
