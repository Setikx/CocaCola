(function ($) {

  $(window).load(function () {
     initElmsAnimation();
    WowInit();
    WidthSliderinitOneThree();
    WidthSliderinitTwo();
    slickTwoinit();
    slickOneinit();
    ScrollRevealinit()
  });

  /*ANIMATION*/
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

/* ANIMATION */
  function WowInit() {
    new WOW().init();
  }


/*SLIDER_auto-width-tunes---container_co-worker-1-3*/
  function WidthSliderinitOneThree() {
    var $wrapper = $('.container_co-worker-1, .container_co-worker-3'),
      $slickTwo = $wrapper.find('.slick-slider.two-img'),
      $slickOne = $wrapper.find('.slick-slider.one-img'),
      $redBox = $wrapper.find('div.text');


    $(window).on('resize', SlickWidth);
    SlickWidth();

    function SlickWidth() {
      $slickOne.width($(window).width()-$redBox.offset().left-703);
      $slickTwo.width($redBox.offset().left-96);
    }
  }


  /*SLIDER_auto-width-tunes---container_co-worker-2*/
  function WidthSliderinitTwo() {
    var $wrapper = $('.container_co-worker-2'),
        $slickOne = $wrapper.find('.slick-slider.one-img'),
        $slickTwo = $wrapper.find('.slick-slider.two-img'),
        $redBox = $wrapper.find('div.text');


    $(window).on('resize', SlickWidth);
    SlickWidth();

    function SlickWidth() {
      $slickOne.width($redBox.offset().left-96);
      $slickTwo.width($(window).width()-$redBox.offset().left-703);
    }
  }

/*Sliders Init*/
  function slickTwoinit() {
    $('.slick-slider.two-img').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false
    });
  }

  function slickOneinit() {
    $('.slick-slider.one-img').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false
    });
  }

  function ScrollRevealinit() {
    window.sr = ScrollReveal({reset: true});
    sr.reveal('---');
  }

})(jQuery);



