ready = function() {
$(document).on('turbolinks:load', function(){


	$('#edit-paper-title-modal-trigger').on('click',function(){
		$('#edit-paper-title-modal-show').fadeIn();
	});

	$('.close-modal').on('click', function(){
		$('#edit-paper-title-modal-show').fadeOut();


	});

});
};
$(document).ready(ready)
$(document).on('page:load', ready)