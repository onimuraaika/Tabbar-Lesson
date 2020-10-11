$('#tab-contents .tab[id != "tab1"]').hide(); /*id=tab-contents要素のうちtabクラスでid=1出ないものを非表示*/

$('#tab-menu a').on('click', function(event) { /*id="tab-menu"のaタグがクリックされた時*/
  $("#tab-contents .tab").hide(); /*id="tab-contents"内のいずれかのタブがクリックされたと時、そのタブ内の全コンテンツを非表示*/
  $("#tab-menu .active").removeClass("active"); /*activeクラス(activeの時背景色が白・文字色が黒のcss)が削除対象*/
  $(this).addClass("active"); /*thisは、タブがクリックされた時、activeクラスを追加*/
  $($(this).attr("href")).show(); /*.attr()は、HTML要素の属性を取得したり設定できるメソッド。show()は、要素を表示するメソッド*/
  event.preventDefault();
});