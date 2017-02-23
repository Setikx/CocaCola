(function ($) {

  $(window).load(function () {
     initElmsAnimation();
    WowInit();
    WidthSliderinit();
    slickTwoinit();
    slickOneinit();
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

  function WowInit() {
    new WOW().init();
  }

  function WidthSliderinit() {
    var $wrapper = $('.container_co-worker-1'),
      $slickTwo = $wrapper.find('.slick-slider.two-img'),
      $slickOne = $wrapper.find('.slick-slider.one-img'),
      $redBox = $wrapper.find('.right-part');


    $(window).on('resize', SlickWidth);
    SlickWidth();

    function SlickWidth() {
      $slickOne.width($(window).width()-$redBox.offset().left-703);
      $slickTwo.width($redBox.offset().left-96);

    }
  }

  function slickTwoinit() {
    $('.slick-slider.two-img').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1
    });
  }

  function slickOneinit() {
    $('.slick-slider.one-img').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1
    });
  }

})(jQuery);



