ready = function() {
$(document).on('turbolinks:load', function(){

	$('#paper-create-button').on('click', function(){
		$('#new-paper-modal-create-show').fadeIn();
	});

	$('.close-modal').on('click', function(){
		$('#new-paper-modal-create-show').hide();

	});


});
};
$(document).ready(ready)
$(document).on('page:load', ready)