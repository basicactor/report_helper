ready = function() {
$(document).on('turbolinks:load', function(){

    /*$( '#ajax-button') .click(
    function() {
        $.ajax({
            url:"https://od-api.oxforddictionaries.com:443/api/v1/entries/en/ace/synonyms",
            headers:{
                "Accept": "application/json",
                "app_id": "7240a9d7",
                "app_key": "8a5ed5d0bef1bc0a31b51a1f836fd24d"
            },
            type:'GET',
            dataType: 'jsonp',
            timeout:10000,
        }).done(function(data) {
            $('#done').html("できました");
            
        }).fail(function(data) {
            $('#error').html("単語を取得出来ませんでした");
        }).always(function(data) {
            $('#complete').html("Ajax終了時に呼ばれるメソッド");
        });
    });*/
    

  


    //他のボタンを押した時に、検索ワードと検索結果を空にする
    $( 'input[name="translation"]:radio' ).on('change',(function() {  
           $('#done').html('');
           $('#word').val('');
    })); 

　　　//検索単語をAPIで取得して表示
    $( '#form-translation').on('submit', (function(e) {
        e.preventDefault();  // サブミット動作をキャンセル
        
        $('#done').html(' ');

        var searchWord = $(this).find('#word').val();

        var checkedItem = $('#form-translation :radio:checked').val();

        
        
        if(checkedItem == 'Ja-to-En'){
                var lang = "https://glosbe.com/gapi_v0_1/translate?from=ja&dest=en&format=json&phrase="+ searchWord + "&pretty=true"
            } else {
                var lang = "https://glosbe.com/gapi_v0_1/translate?from=en&dest=ja&format=json&phrase="+ searchWord + "&pretty=true"

            }

        //検索単語をAPIで取得
        $.ajax({
                url: lang,
                type:'GET',
                dataType: 'jsonp',
                timeout:10000,
            }).done(function(data) { //成功した時の処理
                $.each(data.tuc,function(index,val) {
                     var indexShow = index + 1; //indexが１から始まるようにする
                     $('#done').append("<li>" + indexShow + " : " + data.tuc[index].phrase.text+ "</li>");
                     　if (index == 9) {
                        return false;
                     }
                })

            }).fail(function(data) {
                $('#error').html("単語を取得出来ませんでした");
            }).always(function(data) {
                $('#complete').html('');
        });

        //検索ワードをweblioに飛ばすリンク
        $('#weblio').html('<a href="https://ejje.weblio.jp/content/' + searchWord + '" , target="_blank"> more... on Weblio </a>');

      

    }));

});

};
$(document).ready(ready)
$(document).on('page:load', ready)
