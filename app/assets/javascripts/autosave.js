ready = function() {
$(document).on('turbolinks:load', function(){
        

  if ($('.create-temp')) {
        window.tempTimer = null
        $('.edit_section').on('keydown',(function(){ 
            window.clearTimeout(tempTimer);
            $(".done").text('saving...');
            window.tempTimer = window.setTimeout(function(){
                $(".done").text('All changes saved');
                $(".edit_section").ajaxSubmit({
                	data:{"authenticity_token": $('meta[name="csrf-token"]').attr('content')}

                });

            }, 4000);
            }));
        
   }




});
};
$(document).ready(ready)
$(document).on('page:load', ready)