ready = function() {
$(document).on('turbolinks:load', function(){


var title =  $('#section_title').val(); 

var text = $('#section_text').val();


if(title == '' && text == ''){
	$('#section_title').css('background-image','none');
	$('#section_text').css('background-color','white');

}



});
};
$(document).ready(ready)
$(document).on('page:load', ready)