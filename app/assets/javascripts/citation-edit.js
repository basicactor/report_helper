ready = function() {
$(document).on('turbolinks:load', function(){

		  
		  $('.citation-edit').on('click',function(){
			$(this).parent('.citation-item').addClass("active");
			$(this).closest('.active').find('.modal').show();		

		});

});

};
$(document).ready(ready)
$(document).on('page:load', ready)