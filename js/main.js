function gsapAni() {
  gsap
    .timeline({
      delay: 0.7,
      onComplete: function () {
        gsap
          .timeline({ delay: 0.5, repeat: -1, repeatDelay: 2 })
          // .from(
          //   ".kv-title",
          //   {
          //     scale: 0,
          //     opacity: 0,
          //     duration: 1.5,
          //     ease: "elastic.out(1, 0.35)",
          //     clearProps: "all",
          //   },
          //   "kvStart+=0.5"
          // )
          .from(
            ".sloganImg",
            {
              scale: 0,
              opacity: 0,
              duration: 1.5,
              ease: "elastic.out(1, 0.35)",
              clearProps: "all",
              stagger: 0.8,
            },
            "kvStart+=2.1"
          )
          .from(
            ".kv-deco-box > .skill",
            { 
              scale: 0,
              opacity: 0,
              duration: 1.5,
              ease: "elastic.out(1, 0.35)",
              clearProps: "all",
              stagger: 0.8,
              stagger: {
                each: 0.2,
                from: "random",
              },
            
            },
            "kvStart+=0.5"
          );
      },
      onStart: function () {
        window.scrollTo(0, 0);
      },
    })
    .addLabel("kvStart")
    .from(
      ".kv-title",
      {
        opacity: 0,
        scale: 0,
        ease: "elastic.out(1, 0.35)",
        duration: 0.8,
        clearProps: "all",
      },
      "kvStart+=0.5"
    )
    .from(
      ".kv-sec-title",
      {
        scale: 0,
        opacity: 0,
        duration: 1.85,
        ease: "elastic.out(1, 0.35)",
        clearProps: "all",
      },
      "kvStart+=1"
    )
    .from('.kv-desc ', {
      y: '-100%',
      opacity: 0,
      ease: "elastic.out(1, 0.35)",
      duration: 1.25,
      clearProps: 'all',
    },
      "kvStart+=1.5"
    )
    .from(
      ".kv-deco-box > .skill",
      {
        scale: 0,
        ease: "elastic.out(1, 0.35)",
        duration: 1.5,
        stagger: 0.8,
        clearProps: "all",
        stagger: {
          each: 0.2,
          from: "random",
        },
      
      },
      "kvStart+=0.5"
    )
    .from(
      '.kv-visual',
      {
      y: '-100%',
      opacity: 0,
      ease: "elastic.out(1, 0.35)",
      duration: 1.5,
      clearProps: 'all'
    },
    "kvStart+=0.8"
    )
    .from(
      ".kv-scroll",
      {
        y: '-100%',
        opacity: 0,
        ease: "elastic.out(1, 0.35)",
        duration: 1.5,
        clearProps: 'all'
      },
      "kvStart+=1.25"
    );
}

document.querySelectorAll('.project-slide').forEach((el, index) => {
  const swiper = new Swiper(el, {
    slidesPerView: 1.25,
    spaceBetween: 16,
    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
    breakpoints: {
      768: {
        slidesPerView: 2.25,
      },
      1200: {
        slidesPerView: 3.25,
      },
    },

    on: {
      // 每次滑動都觸發（含手動或點箭頭）
      slideChange: function () {
        const wrapper = el.closest('.project-row'); // 最外層容器
        if (this.isEnd) {
          wrapper.classList.remove('has-fade-after');
        } else {
          wrapper.classList.add('has-fade-after');
        }
      },

      // 初始化就判斷一次（避免一開始就顯示在底）
      afterInit: function () {
        const wrapper = el.closest('.project-row');
        if (this.isEnd) {
          wrapper.classList.remove('has-fade-after');
        } else {
          wrapper.classList.add('has-fade-after');
        }
      },
    },
  });
});


$('.tab-item').on('click', function () {
  // tab 樣式切換
  $('.tab-item').removeClass('is-active');
  $(this).addClass('is-active');

  // 取得要顯示的目標 ID
  const target = $(this).data('target');

  // 顯示對應 swiper 區塊，隱藏其他
  $('.project-row.swiper.project-slide').hide();
  $(target).show();
});

$(document).ready(function () {
  // 點擊每個 .expand-icon 時
  $('.expand-icon').on('click', function () {
    const $item = $(this).closest('.experience-item'); // 對應這一項
    const $jobRow = $item.find('.experience-job-row');

    // 切換展開狀態
    $item.toggleClass('is-open');
    $jobRow.slideToggle(200);

    // 切換箭頭方向（可選）
    $(this).text($item.hasClass('is-open') ? 'expand_less' : 'expand_more');
  });
});


$(function () {

  // scrollAnim // 
  var pageTop;
  var pageBottom;
  var activeOffset = 30;
  function scrollAnim() {
    pageTop = $(document).scrollTop();
    pageBottom = pageTop + $(window).height();
    var tags = $(".js-animate");

    tags.each(function (index) {
      if ($(this).offset().top < pageBottom - activeOffset) {
        $(this).addClass("js-animate--active");
      } else {
        $(this).removeClass("js-animate--active");
      }
    });
  }
  scrollAnim(); // init
  $(document).on("scroll", scrollAnim);

  gsapAni();
});


$('[href^="#"]').on('click', function (e) {
  const targetId = $(this).attr('href');
  
  // 排除 href="#" 或空字串
  if (targetId.length > 1) {
    e.preventDefault();
    const target = $(targetId);

    if (target.length) {
      const headerHeight = 60; // 如果有固定 header 請改這個值
      const scrollTop = target.offset().top - headerHeight;

      $('html, body').animate({
        scrollTop: scrollTop
      }, 800);
    }
  }
});
