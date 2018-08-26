/* Exercise 2: Color picker */
$(document).ready(function() {
  // Code that runs when the document is ready
	var n = 0;
	while (n < 16) {
		n++;
		var m = '#' + getRandomColor();
		addBox(m);
		}
/* quick restyle using jQuery without redoing all of the css */
	if ($(window).width() < 1000) {
		/* move the .preview element to the right of the ipnut box, its restyled in the CSS */
		console.log('moving .review');
		$('#bigPreview').remove();
		$('#smallPreview').append('<div class="preview" </div>');
	}
 

	color = getRandomColor();
	setPreviewColor(color);
	$('#color').focus();
	favoriteSelectedFlag = false;
	storedColor = '';
	$('#colors .item').mouseenter (function(){
		if (storedColor == '') {
			storedColor = ($('.preview').css('background-color'));
		}	
		if (favoriteSelectedFlag == false) {
			setPreviewColor($(this).css('background-color'));
		}
});

	$('#colors').mouseleave (function(){
		if (favoriteSelectedFlag == false) {
			setPreviewColor(storedColor);
		}
		storedColor = '';
		favoriteSelectedFlag = false;
		$('#color').focus();
		});
});    /* end of document.ready, could put all or less javascript in here */

function setPreviewColor (color) {
	$('.preview').css('background-color', color);
	rgb = $('.preview').css('background-color');
	$('.color-code').text(rgb2hex(rgb) + ' ' + rgb);
} 

$(document).keyup(function () {
	if ($('#color').val() != '') {
		setPreviewColor($('#color').val());
	}
});
function addBox(color) {
	if ($('#colors .item').length > 15) {
		$('#colors .item').last().remove();
	};
	$('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
}

$(document).on('click', '#add-to-favorite', function () {
	addBox($('.preview').css('background-color'));
	$('#color').focus();
});

$(document).on('click', '.preview', function () {
	$('#color').val(rgb2hex(rgb));
	$('#color').focus();
});
function getRandomColor () {
 	rndColor = (Math.floor( Math.random() * 16777215)).toString(16);
	return ("00000" + rndColor).slice(-6);
}
$(function() {
  $("body").click(function(e) {
    if (e.target.id == "colors" || $(e.target).parents("#colors").length) {
	favoriteSelected();
	  
    }
  });
})
function favoriteSelected () {
	favoriteSelectedFlag = true;
} 
/* from https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value  */
var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 


function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }
/* end of from https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value  */
 
