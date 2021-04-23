$(document).ready(function(){
    $(".sidemenu-toggler").click(function(){
        $(".sidemenu").addClass("active");
    });

    $(".close").click(function(){
        $(".sidemenu").removeClass("active");
    });

    $(window).on("load",function(){
        var $container = $('.portfoliocontainer');
        $container.isotope({
            filter:'*',
            animationOptions: {
                queue: true
            }
        });

        $('.portfolio-nav li').click(function(){
            $('.portfolio-nav .current').removeClass('current');
            $(this).addClass('current');
            var Selector = $(this).attr('data-filter');
            $container.isotope({
                filter: Selector,
                animationOptions: {
                   queue: true
                }
            });
            return false
        });
    });

    $('portfolio-item').mixItUp();






});