// var myArray = ['body type', 'goals', 'sport'];
// var currentIndex = 0;
// var selector = $('#selector');
// var timer = setInterval(function(){
// 		selector.animate({left: '-100%'}, 700, function () { 
// 	    selector.hide();
// 	    selector.html(myArray[currentIndex]);
// 	    selector.css({left: '100%'});
// 	    selector.show();
// 	    selector.animate({left: '0'}, 700);
// 	});
// 	currentIndex++;
// 	if (currentIndex == myArray.length) {
// 		currentIndex = 0;
// 	}
//  }, 5600); //5600

// var myArray = ['body type', 'aesthetic', 'goals', 'sport', 'destination'];
// var currentIndex = 0
// var timer = setInterval(function(){
// 	$("#selector").text(myArray[currentIndex]);
// 	currentIndex++;
// 	if (currentIndex == myArray.length) {
// 		currentIndex = 0;
// 	}
//  }, 5600);

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

new WOW().init();







// $(document).ready(function(){
//     $("button").click(function(){
//         var div = $("div");
//         div.animate({height: '300px', opacity: '0.4'}, "slow");
//         div.animate({width: '300px', opacity: '0.8'}, "slow");
//         div.animate({height: '100px', opacity: '0.4'}, "slow");
//         div.animate({width: '100px', opacity: '0.8'}, "slow");
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         var div = $("div");
//         div.animate({height: '300px', opacity: '0.4'}, "slow");
//         div.animate({width: '300px', opacity: '0.8'}, "slow");
//         div.animate({height: '100px', opacity: '0.4'}, "slow");
//         div.animate({width: '100px', opacity: '0.8'}, "slow");
//     });
// });
