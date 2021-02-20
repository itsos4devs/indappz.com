(function($) {

    "use strict";


    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);

        });
    }

    //Sortable Masonary with Filters
    function sortableMasonry() {
        if ($('.sortable-masonry').length) {

            var winDow = $(window);
            // Needed variables
            var $container = $('.sortable-masonry .items-container');
            var $filter = $('.filter-btns');

            $container.isotope({
                filter: '*',
                masonry: {
                    columnWidth: 0
                },
                animationOptions: {
                    duration: 500,
                    easing: 'linear'
                }
            });


            // Isotope Filter 
            $filter.find('li').on('click', function() {
                var selector = $(this).attr('data-filter');

                try {
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: 'linear',
                            queue: false
                        }
                    });
                } catch (err) {

                }
                return false;
            });


            winDow.on('resize', function() {
                var selector = $filter.find('li.active').attr('data-filter');

                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
            });


            var filterItemA = $('.filter-btns li');

            filterItemA.on('click', function() {
                var $this = $(this);
                if (!$this.hasClass('active')) {
                    filterItemA.removeClass('active');
                    $this.addClass('active');
                }
            });

            $container.isotope("on", "layoutComplete", function(a, b) {

                var a = b.length,
                    pcn = $(".portfolio-pagination .current");
                TweenMax.to(pcn, 0.2, {
                    force3D: true,
                    y: -10,
                    opacity: 0,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        TweenMax.to(pcn, 0.1, {
                            force3D: true,
                            y: 10
                        });
                        pcn.html(a);
                    }
                });
                TweenMax.to(pcn, 0.2, {
                    force3D: true,
                    y: 0,
                    delay: 0.3,
                    opacity: 1,
                    ease: Power2.easeOut
                });
            });

            var mi = $(".masonry-item").length;
            $(".portfolio-pagination .total").html(mi);
        }
    }

    sortableMasonry();


    //testimonial-03-carousel
    if ($('.testimonial-03-carousel').length) {
        $('.testimonial-03-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 1200,
            autoplay: 4000,
            navText: ['<span class="fas fa-long-arrow-alt-left"></span>', '<span class="fas fa-long-arrow-alt-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }


    if ($('.paroller').length) {
        $('.paroller').paroller({
            factor: 0.2, // multiplier for scrolling speed and offset, +- values for direction control  
            factorLg: 0.4, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
            type: 'foreground', // background, foreground  
            direction: 'horizontal',
            transition: 'transform 15s ease-in' // vertical, horizontal  
        });
    }

    //LightBox / Fancybox
    function lightbox() {
        if ($('.lightbox-image').length) {
            $('.lightbox-image').fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                helpers: {
                    media: {}
                }
            });
        }
    }
    lightbox();

    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
                $(target).fadeIn(300);
                $(target).addClass('active-tab animated fadeIn');
            }
        });
    }

    //Tabs Box
    if ($('.tabs-box-two').length) {
        $('.tabs-box-two .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab-two'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box-two').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box-two').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box-two').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
                $(target).fadeIn(300);
                $(target).addClass('active-tab animated fadeIn');
            }
        });
    }

    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function() {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, { accY: 0 });
    }

    (function($) {
        $(window).enllax();
    })(jQuery);

    //Update Sidebar Progress Line
    function sidebarProgressLine() {
        if ($('.fixed-left-column .page-progress-bar').length) {
            var progressLineBar = $('.fixed-left-column .page-progress-bar .bar-inner .page-progress');
            var pageHeight = $(document).height();
            var windwoHeight = $(window).height();
            var windowPos = $(window).scrollTop();
            var progressLineBarWidth = windowPos / (pageHeight - windwoHeight) * 100;
            $(progressLineBar).css('width', (progressLineBarWidth + '%'));
        }
    }

    sidebarProgressLine();

    //Progress Bar
    if ($('.progress-line').length) {
        $('.progress-line').appear(function() {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, { accY: 0 });
    }

    //progressBarConfig
    function progressBarConfig() {
        var progressBar = $('.progress');
        if (progressBar.length) {
            progressBar.each(function() {
                var Self = $(this);
                Self.appear(function() {
                    var progressValue = Self.data('value');

                    Self.find('.progress-bar').animate({
                        width: progressValue + '%'
                    }, 100);

                    Self.find('span.value').countTo({
                        from: 0,
                        to: progressValue,
                        speed: 100
                    });
                });
            })
        }
    }

    //clients-carousel
    if ($('.clients-carousel').length) {
        $('.clients-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            mode: 'horizontal',
            smartSpeed: 700,
            autoplay: 4000,
            navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    /* ScrollAnimations */
    var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
    $containers.scrollAnimations();


    /* cursor */
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    $("a,.menu-open").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $("a,.menu-open").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");

    });


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }



    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function() {
        sidebarProgressLine();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
        sortableMasonry();
        progressBarConfig();
        sidebarProgressLine();
    });

})(window.jQuery);