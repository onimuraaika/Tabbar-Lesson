$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active'); /*トグル処理、該当の(今回はactive)クラス属性がある時classが削除、ない時classを追加*/
    $('#sp-menu').fadeToggle(); /*メニューを開いた時の状態を設定。.fadeToggleはフェードイン・フェードアウトを切り替えるメソッド*/
    event.preventDefault();
  });
});