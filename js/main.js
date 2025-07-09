function gsapAni() {
  gsap
    .timeline({
      delay: 0.7,
      onComplete: function () {
        gsap
          .timeline({ delay: 0.5, repeat: -1, repeatDelay: 2, opacity: 1, })
          .from(
            ".kv-deco-box > .skill",
            {
              opacity: 0,
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
      },
      onStart: function () {
        window.scrollTo(0, 0);
      },
    })
}


$(function () {

  var pageTop;
  var pageBottom;
  var activeOffset = 30;
  function scrollAnim() {
    pageTop = $(document).scrollTop();
    pageBottom = pageTop + $(window).height();
    var tags = $(".animate");

    tags.each(function (index) {
      if ($(this).offset().top < pageBottom - activeOffset) {
        $(this).addClass("animate_active");
      } else {
        $(this).removeClass("animate_active");
      }
    });
  }
  scrollAnim(); 
  $(document).on("scroll", scrollAnim);

  gsapAni();
});



document.querySelectorAll('.project-slide').forEach((el, index) => {
  const swiper = new Swiper(el, {
    slidesPerView: 1.25,
    spaceBetween: 16,
    navigation: {
      enabled: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2.25,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          enabled: true,
        },
      },
      1200: {
        slidesPerView: 3.25,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          enabled: true,
        },
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
  $('.tab-item').removeClass('is-active');
  $(this).addClass('is-active');

  const target = $(this).data('target');

  $('.project-row.swiper.project-slide').hide();
  $(target).show();
});

$(document).ready(function () {
  $('.toggle-trigger').on('click', function () {
    const $item = $(this).closest('.experience-item'); 
    const $jobRow = $item.find('.experience-job-row');

    $item.toggleClass('is-open');
    $jobRow.slideToggle(200);

    $(this).toggleClass('rotate');
  });
});


$(function () {
  const headerHeight = 60;
  const navLinks = $('a.menu-link[href^="#"]');

  const sections = navLinks.map(function () {
    const targetId = $(this).attr('href');
    return $(targetId).length ? $(targetId)[0] : null;
  });

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


  $('.kv-scroll').on('click', function (e) {
    e.preventDefault();
    const target = $('#skill');
    if (target.length) {
      const scrollTop = target.offset().top - headerHeight;
      $('html, body').animate({ scrollTop: scrollTop }, 800);
    }
  });

  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    const scrollPos = scrollTop + headerHeight + 1;
  
    let currentId = null;
  
    // 從下往上檢查 sections
    $([...sections].reverse()).each(function () {
      const $section = $(this);
      const sectionTop = $section.offset().top;
      const sectionHeight = $section.outerHeight();
  
      if (scrollPos >= sectionTop) {
        currentId = this.id;
        return false; // 找到符合的區塊就跳出
      }
    });
  
    navLinks.removeClass('is-active');
  
    if (currentId) {
      navLinks.filter(`[href="#${currentId}"]`).addClass('is-active');
    }
  });

  $(function () {
    $("#gotop").click(function () {
      jQuery("html,body").animate({
        scrollTop: 0
      }, 500);
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('#gotop').fadeIn("slow");
      } else {
        $('#gotop').stop().fadeOut("slow");
      }
    });
  });
  
});

