ready = function() {
$(document).on('turbolinks:load', function(){

	$(".sortable").sortable({
		
		update:function(e, ui) {
			$.ajax({
				url:$(this).data('url'),
				type:"PATCH",
				headers:{"X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')},
				data:$(this).sortable('serialize')
					 
				
			});
	        
	        }

	});
		

});
};
$(document).ready(ready)
$(document).on('page:load', ready)