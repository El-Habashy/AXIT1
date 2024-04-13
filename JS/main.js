$(function () {
    'use strict';
    var scrollbotton = $("#scroll-top");
    
    $(window).scroll(function () {
        
        //window.console.log($('.navbar').height());
       //window.console.log($(window).scrollTop());
        
        var navbar = $('.navbar');
            
        $(window).scrollTop() >= navbar.height() ?  navbar.addClass('scrolled') : navbar.removeClass('scrolled');
        
    });
    
    $('.taps-switch li').click(function () {
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
        $('.taps .taps-content >div').hide();
        
        $('.' + $(this).data('class')).show();
        
    });
    
    $(window).scroll(function () {
       
        $(this).scrollTop() >= 700 ? scrollbotton.show() : scrollbotton.hide();                   
     
    });
    
    //click on botton to scroll top
    
    scrollbotton.click(function () {
             
        $("html,body").animate({scrollTop: 0 }, 700);
    });
});