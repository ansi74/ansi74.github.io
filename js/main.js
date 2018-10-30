$(function () {

    $('.js-menu').click(function () {
        $('.js-main-menu').slideToggle();
        $('.js-close').show();
        return false;
    });
    $('.js-close').click(function () {
        $('.js-main-menu').slideToggle();
        $('.js-close').hide();
        return false;
    });
    $('a[href*="#"]')
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    var ww = ($(window).width() < window.screen.width) ? $(window).width() : window.screen.width;
                    var mw = 540;
                    var ratio = ww / mw;
                    if (ww < mw) {
                        $('.js-main-menu').slideToggle();
                        $('.js-close').hide();
                    }
                }
                if (
                        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                        &&
                        location.hostname == this.hostname
                        ) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                return false;
                            } else {
                                $target.attr('tabindex', '-1');
                                $target.focus();
                            }
                            ;
                        });
                    }
                }
            });
    $(window).resize(function () {
        $('.js-close').hide();
    });
     ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.19, 61.32],
            zoom: 11
        }),
        
                
            myPlacemark0 = new ymaps.Placemark([55.165258785672,61.381437813492], {
                balloonContent: 'г. Челябинск, ул. Энгельса, 43  (ПН-ВС с 08:00 до 21:00)',
                hintContent: 'г. Челябинск, ул. Энгельса, 43  (ПН-ВС с 08:00 до 21:00)'
            }, {
                iconImageHref: '/uploads/valun.png',
                iconImageSize: [41, 50],
                iconImageOffset: [-3, -50]
            });
            
            myMap.geoObjects.add(myPlacemark0);
            myMap.controls.add('zoomControl', { top: 75, left: 5 });
    }
 });