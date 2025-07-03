document.addEventListener('DOMContentLoaded', function () {
  const hasHash = window.location.hash && window.location.hash.length > 1;

  if (hasHash) {
    document.body.setAttribute('scroll-block', '');

    setTimeout(() => {
      const targetEl = document.querySelector(window.location.hash);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.getBoundingClientRect().top + window.scrollY,
          left: 0,
          behavior: 'auto'
        });
      }

      // ✅ 解鎖畫面
      document.body.removeAttribute('scroll-block');
    }, 0);
  } else {
    gsapAni();
  }
});


function gsapAni() {
  gsap
    .timeline({
      delay: 0.7,
      onStart: function () {
        if (!window.location.hash) {
          window.scrollTo(0, 0);
        }
      },
      onComplete: function () {
        gsap
          .timeline({ delay: 0.5, repeat: -1, repeatDelay: 2 })
          .from(".sloganImg", {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.35)",
            clearProps: "all",
            stagger: 0.8,
          }, "kvStart+=2.1")
          .from(".kv-deco-box > .skill", {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.35)",
            clearProps: "all",
            stagger: {
              each: 0.2,
              from: "random",
            },
          }, "kvStart+=0.5");
      },
    })
    .addLabel("kvStart")
    .from(".kv-title", {
      opacity: 0,
      scale: 0,
      ease: "elastic.out(1, 0.35)",
      duration: 0.8,
      clearProps: "all",
    }, "kvStart+=0.5")
    .from(".kv-sec-title", {
      scale: 0,
      opacity: 0,
      duration: 1.85,
      ease: "elastic.out(1, 0.35)",
      clearProps: "all",
    }, "kvStart+=1")
    .from(".kv-desc", {
      y: "-100%",
      opacity: 0,
      ease: "elastic.out(1, 0.35)",
      duration: 1.25,
      clearProps: "all",
    }, "kvStart+=1.5")
    .from(".kv-deco-box > .skill", {
      scale: 0,
      ease: "elastic.out(1, 0.35)",
      duration: 1.5,
      clearProps: "all",
      stagger: {
        each: 0.2,
        from: "random",
      },
    }, "kvStart+=0.5")
    .from(".kv-visual", {
      y: "-100%",
      opacity: 0,
      ease: "elastic.out(1, 0.35)",
      duration: 1.5,
      clearProps: "all"
    }, "kvStart+=0.8")
    .from(".kv-scroll", {
      y: "-100%",
      opacity: 0,
      ease: "elastic.out(1, 0.35)",
      duration: 1.5,
      clearProps: "all"
    }, "kvStart+=1.25");
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
      slideChange: function () {
        const wrapper = el.closest('.project-row');
        if (this.isEnd) {
          wrapper.classList.remove('has-fade-after');
        } else {
          wrapper.classList.add('has-fade-after');
        }
      },

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
  // scrollAnim
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


$(function () {
  const headerHeight = 60;
  const navLinks = $('nav.menu ul.menu-row.container a.menu-link[href^="#"]');

  // 收集對應區塊（nav 連結目標）
  const sections = navLinks.map(function () {
    const targetId = $(this).attr('href');
    return $(targetId).length ? $(targetId)[0] : null;
  });

  // nav 點擊平滑滾動 + 加 active
  navLinks.on('click', function (e) {
    const targetId = $(this).attr('href');

    if (targetId.length > 1) {
      e.preventDefault();

      const target = $(targetId);
      if (target.length) {
        const scrollTop = target.offset().top - headerHeight;

        navLinks.removeClass('is-active');
        $(this).addClass('is-active');

        $('html, body').animate({ scrollTop: scrollTop }, 800);
      }
    }
  });

  // kv-scroll 按鈕點擊，只平滑滾動，不動 .is-active
  $('.kv-scroll').on('click', function (e) {
    e.preventDefault();
    const target = $('#skill');
    if (target.length) {
      const scrollTop = target.offset().top - headerHeight;
      $('html, body').animate({ scrollTop: scrollTop }, 800);
    }
  });

  // 滾動監聽，動態切換 nav active（不包含 kv-scroll）
  $(window).on('scroll', function () {
    const scrollPos = $(window).scrollTop() + headerHeight + 1;

    let currentId = null;

    sections.each(function () {
      if ($(this).offset().top <= scrollPos) {
        currentId = this.id;
      }
    });

    if (currentId) {
      navLinks.removeClass('is-active');
      navLinks.filter(`[href="#${currentId}"]`).addClass('is-active');
    }
  });

  // 頁面載入先觸發一次滾動事件，確保狀態正確
  $(window).trigger('scroll');
});



