ready = function() {
$(document).on('turbolinks:load', function(){


  $('.paper-edit').on('click',function(){
    $(this).closest('.paper-item').find('#paper-title-edit-in-dashboard-show').fadeIn();
  });

  $(document).click(function(e) {
  // クリックした場所がmenu-wrapper(領域内とみなす範囲)に無ければmenuを消す
    if(!$.contains($('.paper-list')[0], e.target)){
      $('#paper-title-edit-in-dashboard-show').hide();
    }
  });

});
};
$(document).ready(ready)
$(document).on('page:load', ready)