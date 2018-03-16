ready = function() {
$(document).on('turbolinks:load', function(){

	$(".filter-tab-academic-search").click(function(){
		
		 var clickedTabId =  $(this).attr('id');

		//クリックしたtabの色固定
	     //$(".active").removeClass("active");
	     $(this).closest('.filter-tab-area-academic-search').find(".active").removeClass("active");
		 $(this).addClass("active");

		 $('.nq-search-box').hide();

		if (clickedTabId == 'site-search') {
	      $(this).closest('#search-boxes').find('.site-search').show();
	    } else {
	      $(this).closest('#search-boxes').find('.thesis-search').show();
	    }		 
	});
});

};
$(document).ready(ready)
$(document).on('page:load', ready)
