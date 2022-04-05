jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'bottom': '50px' //下から50pxの位置に
          }, 500); //0.3秒かけて現れる
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'bottom': '-50px' //下から-50pxの位置に
          }, 500); //0.3秒かけて隠れる
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 300); //0.3秒かけてトップへ戻る
      return false;
    });
  });

  $('#number').on('inview', function(event, isInView) {
    if (isInView) {
      //要素が見えたときに実行する処理
      $("#number .count-up").each(function(){
        $(this).prop('Counter',0).animate({//0からカウントアップ
              Counter: $(this).text()
          }, {
          // スピードやアニメーションの設定
              duration: 3000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
              easing: 'swing',//動きの種類。他にもlinearなど設定可能
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
    }
  });