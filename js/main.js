// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});

// タブ
$('#smarttab').smartTab({
  enableUrlHash: false // タブidにもとづいたURLハッシュの付与を無効
});

// カルーセル
$('.cover-slick').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
  arrows: false, // 左右のナビゲーションを無効
  dots: true, // ドットを表示
  fade: true, // フェードで切り替え
});

// スクロールに付随したフェードイン（左方向）
$('.animate__animated').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeOutUpを削除して
       * fadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

// 右からのフェードイン（2つ目の要素に適用）
$('.animate__animated-right').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      // 下方向のスクロール
      // イベント発生元の要素にfadeInRightクラスを付けることでアニメーションを開始
      $(this.element).addClass('animate__fadeInRight');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

// アコーディオンのタイトルがクリックされたら
$('.accordion-title').on('click', function(e) {

  // .arrow-upの中のimg要素を選択
  var arrowImage = $(this).find('.arrow-up img');

  // 対象となる要素のclass属性値を追加したり削除したりを繰り返すことが可能なメソッド
  arrowImage.toggleClass('rotated');

  // 画像の回転状態を確認
  // var isRotated = arrowImage.hasClass('rotated');

  // 回転状態を切り替え
  // if (isRotated) {
  //   arrowImage.removeClass('rotated');
  // } else {
  //   arrowImage.addClass('rotated');
  // }

  // アコーディオンのコンテンツを表示・非表示
  var content = $(this).next();
  content.slideToggle();
});
