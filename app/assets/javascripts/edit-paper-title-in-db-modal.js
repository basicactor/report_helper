ready = function() {
$(document).on('turbolinks:load', function(){


	$('.paper-edit').on('click',function(){
		$('#paper-title-edit-in-dashboard-show').fadeIn();
	});

	$('.close-modal').on('click', function(){
		$('#paper-title-edit-in-dashboard-show').fadeOut();


	});

});
};
$(document).ready(ready)
$(document).on('page:load', ready)