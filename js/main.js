function gsapAni() {
  gsap
    .timeline({
      delay: 0.7,
      onComplete: function () {
        gsap
          .timeline({ delay: 0.5, repeat: -1, repeatDelay: 2 })
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
  $('.expand-icon').on('click', function () {
    const $item = $(this).closest('.experience-item'); 
    const $jobRow = $item.find('.experience-job-row');

    $item.toggleClass('is-open');
    $jobRow.slideToggle(200);

    $(this).text($item.hasClass('is-open') ? 'expand_less' : 'expand_more');
  });
});


$(function () {

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
  scrollAnim(); 
  $(document).on("scroll", scrollAnim);

  gsapAni();
});


$(function () {
  const headerHeight = 60;
  const navLinks = $('nav.menu ul.menu-row.container a.menu-link[href^="#"]');

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

  $(window).trigger('scroll');
});
