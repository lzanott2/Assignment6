
var bingKey = 'AmNIY8wGKFfCuCl/NVwA7uG6JfW+gowaYz/Ip+noCWA'; //bing key, just for me, Lor Z
var searchUrl = 'http://api.bing.net/qson.aspx?Query='; //bing search link


$('input').on('keyup', function (evt) {
		getSearches($(this).val());
});


function getSearches(query) {
	var q = query;
	//var pageLimit = 10;
	var url = encodeURI(searchUrl + query + '&JsonType=callback&JsonCallback=?');
		    

	console.log(url);

	$.ajax({
		url: url,
		dataType: 'jsonp',
	})

	.done(function(response) {
		console.log(response);
		render(response.SearchSuggestion.Section); //this is calling the render function and like saying that searches equates all this in the parameter for render.
	});
}


function render(searches) {
	var results = $('#results');
	results.empty();
	var section = $('section');
	//var ul = $('ul');    Why doesn't this work?

	for(var i = 0; i < searches.length; i++) {
		//saves all obejects in the search array to the results id
		results.append(searches[i]); 
		
		var text1 = $("<div></div>").text(searches[i].Text);
		//var text1 = $("<li></li>").text(searches[i].Text);    Why doesn't this work?
		
		$(section).append(text1);
		//$(ul).append(text1);    Why doesn't this work?
	
		console.log(searches[i].Text);
	}
}


