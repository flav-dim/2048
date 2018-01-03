function RandomPosition(min, max) 
{
	return Math.floor(Math.random() * (max - min +1)) + min;
 };


var value1 = Math.random() < 0.9 ? 2 : 4;
var value2 = Math.random() < 0.9 ? 2 : 4;

var entier1 = RandomPosition(1, 4);
var entier2 = RandomPosition(1, 4);

var tuile1 = $('.tile-container').append('<div id = "1" >' + value1 + '</div>');
var tuile2 = $('.tile-container').append('<div id = "2" >' + value2 + '</div>');

//var tuile2 = $('.tile-container').append('<div id = "2"' + value2 +'</div>');

$('#1').addClass('tile').addClass('tile-' + value1).addClass('tile-position-' + RandomPosition(1,4) + "-" + RandomPosition(1,4));
$('#2').addClass('tile').addClass('tile-' + value2).addClass('tile-position-' + RandomPosition(1,4) + "-" + RandomPosition(1,4));

//$('#2:eq(' + entier2 + ')').append(value2).addClass('tile').addClass("tile-" + value2);

//$('.grid-cell:eq(' + entier1 + ')').append(value1).addClass('tile').addClass("tile-" + value1);
//$('.grid-cell:eq(' + entier2 + ')').append(value2).addClass('tile').addClass("tile-" + value2);


setInterval(moveCell, 100);
var keys = {}

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});


function moveCell() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            $(".tile").animate({left: "-=121"}, 0);                
        }
        if (direction == 38) {
            $(".tile").animate({top: "-=121"}, 0);  
        }
        if (direction == 39) {
            $(".tile").animate({left: "+=121"}, 0);  
        }
        if (direction == 40) {
            $(".tile").animate({top: "+=121"}, 0);  
        }
    }
}
