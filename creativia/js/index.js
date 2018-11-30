'use strict'
$(function () {
    var $page = $('html, body');
    $('.main-menu a[href*="#"], .to-page-nav').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 99
        }, 900);
        return false;
    });
    $('.fa-minus').click(function () {
        $(this).parent().siblings('.who-is').hide(1500);
        $(this).parent().children('.fa-plus').show();
        $(this).parent().children('.subtitle, .fa-minus').css('color', '#262626');
        $(this).parent().children('.fa-minus').hide();
        return false;
    });
    $('.fa-plus').click(function () {
        $(this).parent().siblings('.who-is').fadeToggle(1500);
        $(this).parent().children('.subtitle, .fa-minus').css('color', 'red');
        $(this).parent().children('.fa-minus').show();
        $(this).parent().children('.fa-plus').hide();
        return false;
    });

    $('#nav-toggle, .main-menu li a').click(function () {
        $('.main-menu').toggleClass('menu-open');
    });
    $(document).click(function (event) {
        if ($(event.target).closest("#nav-toggle").length) return;
        $('.main-menu').removeClass('menu-open');
        event.stopPropagation();
    });
})(jQuery);