'use strict'
$(function(){
    $('.fa-minus').click(function(){
        // $(this).parent().children('.who-is').toggle('normal');
        $(this).parent().siblings('.who-is').hide(1500);
        $(this).parent().children('.fa-plus').show();
        $(this).parent().children('.subtitle, .fa-minus').css('color', '#262626');
        $(this).parent().children('.fa-minus').hide();
        return false;
    });
    $('.fa-plus').click(function(){
        $(this).parent().siblings('.who-is').fadeToggle(1500);
        $(this).parent().children('.subtitle, .fa-minus').css('color', 'red');
        // $('.subtitle, .fa-minus').css('color', 'red');
        // $('.who-is').fadeToggle();
        $(this).parent().children('.fa-minus').show();
        $(this).parent().children('.fa-plus').hide();
        // $('.fa-minus').show();
        // $('.fa-plus').hide();
        return false;
    });

    $('#nav-toggle').click(function(){
        $('.main-menu').toggleClass('menu-open');
     });
})(jQuery);