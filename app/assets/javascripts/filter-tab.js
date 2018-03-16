ready = function() {
$(document).on('turbolinks:load', function(){


	$(".filter-tab").on('click', (function(){
		
		 var clickedTabId =  $(this).attr('id');

		//クリックしたtabの色固定
	     $(this).closest('.filter-tab-area').find(".active").removeClass("active");
		 $(this).addClass("active");

		 $('.search-box').hide();

		if (clickedTabId == 'academic-search') {
	      $(this).closest('#search-area').find('.academic-search').show();
	    } else if (clickedTabId == 'syn') {
	      $(this).closest('#search-area').find('.syn').show();
	    } else if (clickedTabId == 'translation') {
	      $(this).closest('#search-area').find('.translation').show();
	    } else {
	      $(this).closest('#search-area').find('.citation').show();
	    }		 
	}));

});

};
$(document).ready(ready)
$(document).on('page:load', ready)
