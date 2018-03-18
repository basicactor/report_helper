// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require rails-ujs
//= require jquery
//= require jquery-ui
//= require turbolinks
//= require_tree .


ready = function() {
  $(document).on('turbolinks:load', function(){

    // outline-areaでpaper-title変更
    $('#edit-paper-title-modal-trigger').on('click',function(){
      $('#edit-paper-title-modal-show').fadeIn();
    });

    // Dashboardでpaper-title変更 
     $('.paper-edit').on('click',function(){
      $(this).closest('.paper-item').find('.paper-title-edit-in-dashboard-show').addClass('modal-active');
    });

    // Dashboardで新規ペーパー作成
     $('#paper-create-modal-trigger').on('click',function(){
        $('#new-paper-modal-create-show').fadeIn();
     });

     // Headerでprofileボタンクリック -> モーダル
    $('#profile-modal-trigger').on('click', function(){
      $('#profile-modal-show').fadeIn();
    });

     // Citation-areaでCitation編集ボタンクリック -> モーダル
    $('.citation-edit').on('click',function(){
      $(this).closest('.citation-item').find('.edit-citation-modal-show').addClass("modal-active");
    });




  $(document).click(function(e) {
  // クリックした場所がmenu-wrapper(領域内とみなす範囲)に無ければmenuを消す
  //containsはDOM要素しか引数として取らない
  //$('something')[0]でjQueryオブジェクトをDOM要素に変換

    if(!$.contains($('.edit-paper-title-in-outline')[0] || $('.paper-list')[0], e.target)){
      // outline-areaでpaper-title変更モーダルを隠す
      $('#edit-paper-title-modal-show').hide();
    
      // Dashboardでpaper-title変更モーダルを隠す
      $('.paper-title-edit-in-dashboard-show').removeClass('modal-active');

      // Dashboardで新規ペーパー作成モーダルを隠す
      $('#new-paper-modal-create-show').hide();
    }
    
    // Citaion-areaでCitation変更モーダルを隠す 
    if(!$.contains($('#citation-list')[0], e.target)){
      $('.edit-citation-modal-show').removeClass('modal-active');
    }

    //headerのprofile隠す
    if(!$.contains($('.header-menu')[0], e.target)){
      $('#profile-modal-show').hide();
    }

  });





});
};
$(document).ready(ready)
$(document).on('page:load', ready)

