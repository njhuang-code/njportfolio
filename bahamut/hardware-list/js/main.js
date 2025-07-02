$(document).ready(function(){
  // 篩選按鈕 click 狀態
  $('.btn-filter__input').click(function() {
    // 點擊切換 active 狀態
    $('.form-filter').toggleClass('form-filter--active');
    // 取 input data('checked')屬性的相反值
    var isChecked = !$(this).data('checked');
    // 當前被點擊的屬性，檢查該值的狀態
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
    // 點擊觸發 arrow 轉向 
    $(this).toggleClass('trigger__toggle');
    // 點擊 icon-toggle，父層會開合下一層 body 列表內容
    $(this).parent('.product-list__head').toggleClass('is-toggle').next('.product-list__body').slideToggle(300);
    // 防止當前事件冒泡觸發其他 item 的點擊事件
    e.stopPropagation();
  });
  // 防止 body 列表觸發 head 點擊事件
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