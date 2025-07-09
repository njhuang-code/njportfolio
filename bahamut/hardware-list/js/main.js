$(document).ready(function(){
  // 篩選按鈕 click 狀態
  $('.btn-filter__input').click(function() {
    $('.form-filter').toggleClass('form-filter--active');
    var isChecked = !$(this).data('checked');
    $(this).prop('checked', isChecked).data('checked', isChecked);
  });

  // 單欄 雙欄 點擊狀態
  $(function() {
    $('.cart-list__title').click(function() {
        $('.estimate-list__left').removeClass('is-opening');
        $('.estimate-list__right').show();
    });
    $('.side-menu').click(function() {
        $('.estimate-list__left').addClass('is-opening');
        $('.estimate-list__right').hide();
    });
  });

  // 手風琴開合
  $('.icon-toggle').click(function(e){
    $(this).toggleClass('trigger__toggle');
    $(this).parent('.product-list__head').toggleClass('is-toggle').next('.product-list__body').slideToggle(300);
    e.stopPropagation();
  });

  $('.product-list__body').click(function(e){
      e.stopPropagation();
  });

  // 加價購點擊，顯示加價購頁面
  $('.product-list--add').click(function() {
    $('.section__main, .section__add').toggle();
  });
  $('.icon-back').click(function() {
    $('.section__main, .section__add').toggle();
  });
})

  // tippy js
  tippy('.product-link', {
    content: '<img src="https://www.sinya.com.tw/upload/prod/sd194252.jpg?10">',
    html: '#tippyTemplate',
    allowHTML: true,
    arrow: false, 
    size: 'small',
    placement: 'left', 
    theme: 'light'
  })