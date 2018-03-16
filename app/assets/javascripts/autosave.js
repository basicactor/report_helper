ready = function() {
$(document).on('turbolinks:load', function(){
        

  if ($('.create-temp')) {
        window.tempTimer = null
        $('.edit_section').on('keydown',(function(){ 
            window.clearTimeout(tempTimer);
            $(".done").text('saving...');
            window.tempTimer = window.setTimeout(function(){
                $(".done").text('All changes saved');
                updateText();　//定義した関数を使う

            }, 3500);
            }));
        
   }

//ajaxの関数を定義
function updateText(){ 
    var sectionTitle = $('#section_title').val();
    var sectionText = $('#section_text').val();

    $.ajax({ 
      url:$(this).attr('action'), 
      type: 'PATCH', 
      data:{"section": {"title":sectionTitle, "text":sectionText},
          "authenticity_token" : $('meta[name="csrf-token"]').attr('content')
        }

    })

}




});
};
$(document).ready(ready)
$(document).on('page:load', ready)