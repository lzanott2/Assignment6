var searchUrl = 'http://api.bing.net/qson.aspx?Query=';
var endUrl = '&JsonType=callback&JsonCallback=?';


$('input').on('keyup',function(evt) {
	var userInput = $('input').val();
	
	$.ajax({
		url : searchUrl + userInput + endUrl,
		type: 'GET',
		dataType: 'jsonp'
	})

	.done (function(response) {
		$('#results').empty();
		var results = response.SearchSuggestion.Section;
		
		$.each(results, function(i, value)	{
			var html = $('<a>' + value.Text + '</a>');
			
			$('a').attr('href', encodeURI('http://www.bing.com/search?q=' + value.Text));
			
			console.log(value.Text);

			$('#results').append(html);
		});
	});
});


	// for(var i = 0; i < searches.length; i++) {
	// 	//saves all obejects in the search array to the results id
	// 	results.append(searches[i]); 
		
	// 	var text1 = $("<div></div>").text(searches[i].Text);
	// 	//var text1 = $("<li></li>").text(searches[i].Text);    Why doesn't this work?

	// 	$(section).append(text1);
	// 	//$(ul).append(text1);    Why doesn't this work?
	
	// 	console.log(searches[i].Text);
	// }


	// Not sure how to use this!!!!!!
	// $("div").each(function(index) {
	// 	console.log(index + ":" + $(this).text());   <--example, but anything can go here
	// });




	// I didn't use the below code; still need to incorporate it!!!!!!

	// var windowObjectReference;

	// function openRequestedPopup() {
	//  	windowObjectReference = window.open(
	//   		"http://www.domainname.ext/path/ImageFile.png",
	//    		"DescriptiveWindowName",
	//    		"resizable,scrollbars,status"
	//  	);
	// }
