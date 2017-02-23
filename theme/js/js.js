(function ($) {

$(window).load(function(){
 // initElmsAnimation();
  WowInit();
  slickTwoinit();
});

  function initElmsAnimation() {
    var $elms = $('.el-with-animation');
    var animationEnd = [];

    $(window).on('resize scroll', checkScroll);

    checkScroll();

    function checkScroll() {
      if (animationEnd.length === $elms.length) return;

      for (var i = 0; i < $elms.length; i++) {
        var $currentEl = $elms.eq(i);
        if (!$currentEl.hasClass('animating-end') && $(window).height() + $(window).scrollTop() > $currentEl.offset().top + $currentEl.height() / 2 + 50) {
          animate($currentEl);
        }
      }
    }

    function animate(el) {
      el.addClass('animating-end');
      animationEnd.push(1);
    }
  }

  function WowInit(){
    new WOW().init();
  }

  function slickTwoinit(){
    $('.slick-slider.two-img').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 2,
      slidesToScroll: 1
    });
  }

})(jQuery);



