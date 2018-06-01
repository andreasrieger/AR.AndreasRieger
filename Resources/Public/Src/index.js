import 'node_modules/bootstrap';

$(document).ready(function(){

	// Function is setting padding-top to <body> depending on #main-navbar height.
	$('body').css({'padding-top': (($('#main-navbar').height()) + 15 )+'px'});
	$(window).resize(function(){
		$('body').css({'padding-top': (($('#main-navbar').height()) + 15 )+'px'});
	});

	//Transorming a listed content in a 'card'
	$('body div.card ul').attr('class', 'list-group list-group-flush');
	$('body div.card li').attr('class', 'list-group-item');
	$('body div.card p').attr('class', 'card-text');

	//Transorming a table
	$('body section table').attr('class', 'table table-striped').removeAttr('style').removeAttr('cellspacing').removeAttr('cellpadding').removeAttr('border');
	$('body section table thead').attr('class', 'thead-light');

});
