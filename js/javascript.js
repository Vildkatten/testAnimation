$(function(){
	console.log('hej');

		$('.box').animate(
		{left: '0'},
		500
		);
	


	$('.box').on('click', function(){
	$('.box').hide();
	$('.box2').show();
	$('.box2').animate(
		{left: '0'},
		500
		);
	$('#footer').animate(
		{bottom: '-160px'},
		500
		);

	$('.header').animate(
		{top: '-200px'},
		500
		);

	});

	$('.box2').on('click', function(){
	$('.box2').hide();
	$('.box3').show();
	$('.box3').animate(
		{left: '0'},
		500
		);
	});

	$('.box3').on('click', function(){
	$('.box3').hide();
	$('.box4').show();
	$('.box4').animate(
		{left: '0'},
		500
		);
	});
	$('.box4').on('click', function(){
		$('.box4').hide();
		$('.sbox').animate(
			{left: '1000px'},
			500);

		$('.sbox2').animate(
			{left: '800px'},
			500);

	});
});