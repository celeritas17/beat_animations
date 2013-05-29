var beat_bar = function(id, start_height){
	var upswing;
	return setInterval(function(){
		var height = parseInt($('div#' + id).css('height'));
		if (height < 125) 
			upswing = true;
		else if (height > start_height - 125)
			upswing = false;
		$('div#' + id).css('height', height + (upswing ? 125 : -125));
	}, 125);
};

var oscillate = function(id, dimension, start_dim_val, interval, amount){
	var upswing;
	return setInterval(function(){
		var new_dim_val = parseInt($('div#' + id).css(dimension));
		if (new_dim_val < amount) 
			upswing = true;
		else if (new_dim_val > start_dim_val - amount)
			upswing = false;
		$('div#' + id).css(dimension, new_dim_val + (upswing ? amount : -amount));
	}, interval);
};

var toggle_color = function(interval, id, color){
	return setInterval(function(){
		if (color == "red"){
			if ($('div#' + id).css('background-color') == 'rgb(255, 0, 0)')
				$('div#' + id).css('background-color', 'rgb(0, 0, 255)');
			else
				$('div#' + id).css('background-color', 'red');
	}
		else if (color == "blue"){
			if ($('div#' + id).css('background-color') == 'rgb(255, 0, 255)')
				$('div#' + id).css('background-color', 'rgb(0, 0, 255)');
			else
				$('div#' + id).css('background-color', 'rgb(255, 0, 255)');
		}
	}, interval);
};

var contract = function(interval, id, dimension, amount){
	return setInterval(function(){
		var dim = parseInt($('div#' + id).css(dimension));
		$('div#' + id).css(dimension, dim - amount);
	}, interval);
};

var randomize_color = function(interval, id){
	return setInterval(function(){
		$('div#' + id).css('background-color', 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')');
	}, interval);
};