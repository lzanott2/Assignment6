
var bingKey = 'AmNIY8wGKFfCuCl/NVwA7uG6JfW+gowaYz/Ip+noCWA'; //bing key, just for me, Lor Z
var searchUrl = 'http://api.bing.net/qson.aspx?Query='; //bing search link


$('input').on('keyup', function (evt) {
	if(evt.keyCode === 13){
		getSearches($(this).val());
	}
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
		render(response.SearchSuggestion.Section);
	});
}


function render(searches) {
	var results = $('.results');
	results.empty();
	for(var i = 0; i < searches.length; i++) {
		results.append(searches[i]));
	}
	return results;
}



// 'https://api.datamarket.azure.com/Bing/Search'

// var apikey = 'YOUR_API_KEY';
// var url = 'http://api.bing.net/json.aspx?AppId='+apikey+'&Version=2.2&Market=en-US&Query=testign&Sources=web+spell&Web.Count=1&JsonType=callback&JsonCallback=?';
// $.getJSON(url, function(data) { console.log(data); });

// http://api.bing.net/qson.aspx?Query=INSERT_QUERY_HERE&JsonType=callback&JsonCallback=?
// var url = "http://api.search.live.net/json.aspx?JsonType=callback&JsonCallback=?&Appid="+ bingAPIKey 
//          + "&query=" + encodedKeyWords 
//          + "&sources=web";


//     		'<div class="item"> +
//         	'<div class="title"><a href="${Url}" target="_blank">${Title}</a></div>
//         		<div class="date">${DateTime}</div>
//     			<div class="searchresult">
//         			<div class="description">${Description}</div> //end description class
//         			<div class="url"><a href="${Url}" target="_blank">${Url}</a></div> //end url class
//     			</div> //end searchresult class
//     		</div> //end item class




// <script language="javascript" type="text/javascript">
// 		    $(document).ready(function () {
// 	        	var bingAPIKey = 'AmNIY8wGKFfCuCl/NVwA7uG6JfW+gowaYz/Ip+noCWA'; //Lori Z Bing.com API here
        
//         		//the rest of the script goes here
//         		$("#<%= btnSearch.ClientID %>").click(function (event) {
// 				    event.preventDefault();
// 				    var keyWords = $("#<%= txtSearch.ClientID %>").val();
// 				    var encodedKeyWords = encodeURIComponent(keyWords);
// 				    //alert(keyWords);
// 				    var url = "http://api.search.live.net/json.aspx?JsonType=callback&JsonCallback=?&Appid="+ bingAPIKey 
// 				             + "&query=" + encodedKeyWords 
// 				             + "&sources=web";
			    
// 				    $.getJSON(url, function (data) {
// 				        $("#result").html("");
// 				        $("#bingSearchTemplate").tmpl(data.SearchResponse.Web.Results).appendTo("#result");
// 				    });
// 				});
// 		    });
// 		</script>
		
// 		<script id="bingSearchTemplate" type="text/html">
//     		<div class="item">
//         		<div class="title"><a href="${Url}" target="_blank">${Title}</a></div>
//         		<div class="date">${DateTime}</div>
//     			<div class="searchresult">
//         			<div class="description">${Description}</div> //end description class
//         			<div class="url"><a href="${Url}" target="_blank">${Url}</a></div> //end url class
//     			</div> //end searchresult class
//     		</div> //end item class
// 		</script>
