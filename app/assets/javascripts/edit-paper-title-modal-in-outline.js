ready = function() {
$(document).on('turbolinks:load', function(){


	$('#edit-paper-title-modal-trigger').on('click',function(){
		$('#edit-paper-title-modal-show').fadeIn();
	});

  $(document).click(function(e) {
  // クリックした場所がmenu-wrapper(領域内とみなす範囲)に無ければmenuを消す
    if(!$.contains($('#outline-area')[0], e.target)){
      $('#edit-paper-title-modal-show').hide();
    }
  });



});
};
$(document).ready(ready)
$(document).on('page:load', ready)