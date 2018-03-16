ready = function() {
$(document).on('turbolinks:load', function(){
	
	//全選択ボタン
	$('#all').on('change', function() {
    $('#site-search-form :checkbox').prop('checked', $(this).prop('checked'));
	});

	$('#site-search-form').submit(function(e){
		e.preventDefault();  // サブミット動作をキャンセル

		//検索用語
		var searchWord = $(this).find('.search-word').val();
		
		//チェックされたセレクトオプション
		var checkedItem = $('#site-search-form :checkbox:checked').map(function() {
		  return $(this).val();
		}).get();

		if(checkedItem.length > 0 ){ //一つでもチェックされていた場合
			//全てチェクされている場合
			if(checkedItem[0] == 'on'){
				checkedItem[0] = '';
			}
			$.each(checkedItem,function(index,val) {
				window.open('https://www.google.com/search?q=site:' + val +  ' ' + searchWord,  '_blank');
			})		
				
		} else {//チェックされてない場合ー＞入力された単語をそのまま検索
			window.open('https://www.google.com/search?q=' + searchWord , '_blank');
		}

	});
});

};
$(document).ready(ready)
$(document).on('page:load', ready)