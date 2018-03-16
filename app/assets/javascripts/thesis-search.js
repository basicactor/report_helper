ready = function() {
$(document).on('turbolinks:load', function(){

	

	$('#thesis-search-form').submit(function(e){
		e.preventDefault();  // サブミット動作をキャンセル

　　	//検索用語
		var searchWord = $(this).find('.search-word').val();

		var checkedItem = $('#thesis-search-form :radio:checked').val();
		console.log(checkedItem);


		switch (checkedItem){
		  case "google-scholar":
		    window.open('https://scholar.google.com/scholar?q='+ searchWord,  '_blank');
		    break;
		  case "oatd":
		    window.open('https://oatd.org/oatd/search?q='+ searchWord,  '_blank');	    
		    break;
		  case "dart":
		    window.open('http://www.dart-europe.eu/basic-results.php?kw%5B%5D='+ searchWord,  '_blank');	    		    
		    break;
		  case "ndltd":
		    window.open('http://search.ndltd.org/search.php?q='+ searchWord,  '_blank');	    		    
		    break;
		  case "caltech":
		    window.open('https://thesis.library.caltech.edu/cgi/search/simple?q='+ searchWord,  '_blank');	    		    
		    break;
		}
		
		 //データベース
		 //https://www.e-stat.go.jp/stat-search/database?page=1&query=%E5%9B%BD%E5%82%B5

	});
});

};
$(document).ready(ready)
$(document).on('page:load', ready)
