// quote rotator
var myArray = ['I love wearning my suites to the beach, pool, and on vacation!. <span> - Jane Doe</span><span><img class="testomonial-img rounded-circle" src="img/test-img-2.png" alt="testomonial img">','I can always find suites that suit my comfort level, modesty is a plus for me!<span><span>- Karen Carpenter</span><img class="testomonial-img rounded-circle" src="img/test-img-3.png" alt="testomonial img">' ];
var currentIndex = 0;
var selector = $('#selector');
var timer = setInterval(function(){
		selector.animate({left: '-100%'}, 700, function () { 
	    selector.hide();
	    selector.html(myArray[currentIndex]);
	    selector.css({left: '100%'});
	    selector.show();
	    selector.animate({left: '0'}, 700);
	});
	currentIndex++;
	if (currentIndex == myArray.length) {
		currentIndex = 0;
	}
 }, 5600);

// initializing wow.js
new WOW().init();

// pseudo flip functions
$( ".flip-img" ).hover(function() {
	$( this ).attr('src', 'img/black_onepiece_black.jpeg');
},function() {
	$( this ).attr('src', 'img/black_one_piece.jpeg');
});

$( ".flip-img-two" ).hover(function() {
	$( this ).attr('src', 'img/orange_onepiece_back.jpeg');
},function() {
	$( this ).attr('src', 'img/one-piece.jpeg');
});

$( ".flip-img-three" ).hover(function() {
	$( this ).attr('src', 'img/sunglasses_back.jpeg');
},function() {
	$( this ).attr('src', 'img/sunglasses.jpeg');
});

// thumbnail click functions
$( "#thumb-one" ).click(function() {
	$( "#main_PD" ).attr('src', 'img/PD_main.jpeg');
});

$( "#thumb-two" ).click(function() {
	$( "#main_PD" ).attr('src', 'img/thumb-main-1.jpeg');
});

$( "#thumb-three" ).click(function() {
	$( "#main_PD" ).attr('src', 'img/thumb-main-2.jpeg');
});

$( "#thumb-four" ).click(function() {
	$( "#main_PD" ).attr('src', 'img/thumb-main-3.jpeg');
});

$( "#thumb-five" ).click(function() {
	$( "#main_PD" ).attr('src', 'img/thumb-main-4.jpeg');
});

// product list page flip functions
$( "#pp-1" ).hover(function() {
	$( this ).attr('src', 'img/pp-2.jpeg');
},function() {
	$( this ).attr('src', 'img/pp-1.jpeg');
});

$( "#pp-2" ).hover(function() {
	$( this ).attr('src', 'img/pp-3.jpeg');
},function() {
	$( this ).attr('src', 'img/pp-4.jpeg');
});

$( "#pp-3" ).hover(function() {
	$( this ).attr('src', 'img/pp-6.jpeg');
},function() {
	$( this ).attr('src', 'img/pp-5.jpeg');
});

$( "#pp-4" ).hover(function() {
	$( this ).attr('src', 'img/pp-8.jpeg');
},function() {
	$( this ).attr('src', 'img/pp-7.jpeg');
});

$( "#pp-5" ).hover(function() {
	$( this ).attr('src', 'img/thumb-main-2.jpeg');
},function() {
	$( this ).attr('src', 'img/thumb-main-1.jpeg');
});










