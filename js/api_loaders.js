/* global console,$ */
var behanceAPI = function() {
	var key;
	var baseURL = "http://www.behance.net/v2/";
	
	function setKey(k) {
		key = k;	
	}
	
	function getProjects(user, cb) {
		var url = baseURL + "users/" + user + "/projects?api_key=" + key + "&callback=";
		console.log(url);
		$.get(url, {}, function(res, code) {
			cb(res.projects);
		}, "JSONP");
	}
	
	return {
		setKey: setKey,
		getProjects: getProjects	
	};
	
}();

/* global $,console,document,behanceAPI */
var behancekey = "mtpmAyXMtH8bQwTRecHniqX3tO90f5UJ";

$(document).ready(function() {
	
	//Set my key
	behanceAPI.setKey(behancekey);
	
	//Now get my projects
	behanceAPI.getProjects("tpalmerixd", function(p) {

		//Manually draw them out	
		console.dir(p);
		var s = "";
		for(var i=0; i<4; i++) {
			var proj = p[i];
			// s += "<h2>" + proj.name + "</h2>";
			// s += "<a href='" + proj.url + "'><img src='" + proj.covers[404] + "'></a>";
			s += "<li><div><a href='" + proj.url + "'><img src='" + proj.covers[404] + "'></div><h4 class='project-name'>" + proj.name + "</h4></a></li>";
		}
		$("#behance").html(s);
	});

	$.jribbble.setToken('d38f61ea077379b237adc2ae00a0f6397510a5f5f20c4e7ec092959560a1f2c7');
   
	$.jribbble.users('taylorpalmer').shots({per_page: 8}).then(function(shots) {
	var html = [];

	shots.forEach(function(shot) {
	html.push('<li class="shots--shot">');
	html.push('<a href="' + shot.html_url + '" target="_blank">');
	html.push('<img src="' + shot.images.normal + '">');
	html.push('<h4 class="project-name">' + shot.title + '</h4>')
	html.push('</a></li>');
	});

	$('#dribbble').html(html.join(''));
	});

});

