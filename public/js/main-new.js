$(function () {
    var winWidth = document.body.clientWidth;

    $('[data-toggle="tooltip"]').tooltip();
    $("input[type='tel']").mask("+7 (999) 999 - 99 - 99");

    // Антиспам
    $('.aj_form').append('<input type="text" name="org" value="" class="_org" style="visibility:hidden; height: 0; width: 0; padding: 0; border:none;"/>')
    // Антиспам х

    $(document).on("click", ".nav_burger", function (e) {
        e.preventDefault();
        var _obj = $(this),
            main_nav = $('.menuModal'),
            shadow = $('.fixed-shadow');

        if (main_nav.hasClass('-opened')) {
            main_nav.removeClass('-opened');
            // shadow.removeClass('active');
        } else {
            main_nav.addClass('-opened');
            //  shadow.addClass('active');
        }
    });

    $('.fixed-shadow, .menu-mobile_close').click(function (e) {
        var main_nav = $('.menuModal'), shadow = $('.fixed-shadow');
        main_nav.removeClass('-opened')
        //shadow.removeClass('active');
    });


    if (winWidth <= 1200) {
        $('.menu__item').click(function (e) {
            var _obj = $(this), list = _obj.parent('.menu__list');
            if (_obj.hasClass('active')) {
                _obj.removeClass('active');
                list.removeClass('list-active');
                //$('.menu-mobile_logo').removeClass('d-none');
                $('.close-submenu').text('');
                $('.close-submenu').addClass('d-none');

            } else {
                _obj.addClass('active');
                list.addClass('list-active');
                //$('.menu-mobile_logo').addClass('d-none');
                $('.close-submenu').text(_obj.find('a.menu__link--parent').text());
                $('.close-submenu').removeClass('d-none');
            }
        });

        $('.menu__link').click(function (e) {
            var _obj = $(this);
            var href = _obj.attr('href');
            if (_obj.hasClass('menu__link--parent')) {
                e.preventDefault();
            } else if (href) {
                window.location.href = href;
            }
        });

        $('.close-submenu').click(function (e) {
            $('.menu__list').removeClass('list-active');
            $('.menu__item').removeClass('active');
            $('.close-submenu').text('');
            //$('.menu-mobile_logo').removeClass('d-none');
            $('.close-submenu').addClass('d-none');
        });
    }

    var swiper_cases = new Swiper('.swiper-cases', {
        // effect: 'fade',
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button.swiper-button-next.cases',
            prevEl: '.swiper-button.swiper-button-prev.cases',
        },
        pagination: {
            el: '.swiper-pagination.cases',
            clickable: true,
        },
        /*autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },*/
    });

    var swiper_banner = new Swiper('.swiper-banner', {
        //effect: 'fade',

        autoHeight: true,
        pagination: {
            el: '.swiper-pagination.banner',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button.swiper-button-next.banner',
            prevEl: '.swiper-button.swiper-button-prev.banner',
        },
    });

    var swiper_banner2 = new Swiper('.swiper-banner2', {
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination.banner',
            clickable: true,
        },
        loop: !0,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button.swiper-button-next.banner',
            prevEl: '.swiper-button.swiper-button-prev.banner',
        },
    });

    var swiper_banner_detail = new Swiper('.swiper-banner-detail', {
        /*autoHeight: true,
        pagination: {
            el: '.swiper-pagination.banner',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button.swiper-button-next.banner',
            prevEl: '.swiper-button.swiper-button-prev.banner',
        },*/
    });


    var swiper_clients = new Swiper('.swiper-clients', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination.clients',
            clickable: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            768: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            991: {
                slidesPerView: 5,
                slidesPerGroup: 4
            },
            1200: {
                slidesPerView: 6,
                slidesPerGroup: 6
            },
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button.swiper-button-next.clients',
            prevEl: '.swiper-button.swiper-button-prev.clients',
        },
    });

    var swiper_tarif = new Swiper('.swiper-tarif', {
        spaceBetween: 20,
        slidesPerView: 1.8,
        centeredSlides: true,
        grabCursor: true,
        breakpoints: {
            576: {
                slidesPerView: 1.8,
                centeredSlides: true,
                grabCursor: true,
            },
            768: {
                slidesPerView: 1.8,
                centeredSlides: true,
                grabCursor: true,
            },
            991: {
                slidesPerView: 1.8,
                centeredSlides: true,
                grabCursor: true,
            },
            1200: {
                slidesPerView: 3,
                centeredSlides: false,
                grabCursor: false,
            },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    var swiper_tarif_bitrix = new Swiper('.swiper-tarif-bitrix-ox', {
        spaceBetween: 20,
        slidesPerView: 1.2,
        pagination: {
            el: '.swiper-pagination.swiper-tarif-bitrix',
            clickable: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 2.2,
            },
            991: {
                slidesPerView: 3.2,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    var swiper_tarif_kz = new Swiper('.swiper-tarif-kz', {
        spaceBetween: 20,
        slidesPerView: 1.8,
        centeredSlides: true,
        grabCursor: true,
        breakpoints: {
            576: {
                slidesPerView: 1.8,
                centeredSlides: true,
                grabCursor: true,
            },
            768: {
                slidesPerView: 1.8,
                centeredSlides: true,
                grabCursor: true,
            },
            991: {
                slidesPerView: 1.8,
                centeredSlides: true,
                grabCursor: true,
            },
            1200: {
                slidesPerView: 4,
                centeredSlides: false,
                grabCursor: false,
            },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    var swiper_portfolio_case = new Swiper('.swiper-portfolio-case', {
        spaceBetween: 20,
        slidesPerView: 1.8,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
        },
    });

    /*var swiper_partners = new Swiper('.swiper-partners', {
        slidesPerView: 1,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });*/


    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        Sticky()
    };
    // Get the header
    var header = document.getElementById("myHeader");
    var header_sticky = document.getElementById("sticky");
    // Get the offset position of the navbar
    var sticky = header.offsetTop + header.offsetHeight;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function Sticky() {
        if (window.pageYOffset > sticky) {
            header_sticky.classList.add("sticky");
            $('.body-services #myHeader').addClass('st');
        } else {
            header_sticky.classList.remove("sticky");
            $('.body-services #myHeader').removeClass('st');
        }
    }

    $('a[href^="#"]:not(.tab-link)').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 60
        }, 1200);
        e.preventDefault();
    });

    var videoThumbs = new Swiper('.video-thumbs', {
        loop: false,
        spaceBetween: 30,
        slidesPerView: 2,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        navigation: {
            nextEl: '.swiper-button-next.b-gallery',
            prevEl: '.swiper-button-prev.b-gallery',
        },
        breakpoints: {
            576: {
                slidesPerView: 4,
            },
        },
    });

    /* change active class when click */
    $(".video-thumbs .swiper-wrapper .swiper-slide a").click(function () {
        $(this)
            .closest(".swiper-slide")
            .addClass("selected")
            .siblings()
            .removeClass("selected");
        videoThumbs.slideTo(videoThumbs.clickedIndex);
    });

    $(".video-thumbs .swiper-slide")
        .first()
        .addClass("selected");


    var swiper_reviews = new Swiper('.swiper-reviews', {
        slidesPerView: 1,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: '.swiper-pagination.reviews',
            clickable: true,
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        // navigation: {
        //     nextEl: '.swiper-button.swiper-button-next.reviews',
        //     prevEl: '.swiper-button.swiper-button-prev.reviews',
        // },
    });

    var swiper_specialists = new Swiper('.swiper-specialists', {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 20,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
                centeredSlides: false,
            },
        },
        pagination: {
            el: '.swiper-pagination.specialists',
            clickable: true,
        },
        /*autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },*/
    });
    var swiper_newpartners = new Swiper('.swiper-new-partners', {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 18,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
                centeredSlides: false,
            },
        },
        pagination: {
            el: '.swiper-pagination.new-partners',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar.new-partners',
            draggable: true,
            //hide: true,
        },
        /*autoplay: {
            delay: 4500,
            delay: 4500,
            disableOnInteraction: false,
        },*/
    });

    var swiper_service1 = new Swiper('.swiper-service1', {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 18,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            576: {
                slidesPerView: 2.2,
            },
            768: {
                slidesPerView: 3.2,
            },
            991: {
                slidesPerView: 3.2,
                centeredSlides: false,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                centeredSlides: false,
            },
        },
        scrollbar: {
            el: '.swiper-scrollbar.service1',
            //hide: true,
            draggable: true,
        },
        pagination: {
            el: '.swiper-pagination.service1',
            clickable: true,
        }
    });
    var swiper_service2 = new Swiper('.swiper-service2', {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 18,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            576: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2.2,
            },
            991: {
                slidesPerView: 3.2,
                centeredSlides: false,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                centeredSlides: false,
            },
        },
        scrollbar: {
            el: '.swiper-scrollbar.service2',
            draggable: true,
            //hide: true,
        },
        pagination: {
            el: '.swiper-pagination.service2',
            clickable: true,
        }
    });
    var swiper_service3 = new Swiper('.swiper-service3', {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 18,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            576: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2.2,
            },
            991: {
                slidesPerView: 3.2,
                centeredSlides: false,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                centeredSlides: false,
            },
        },
        scrollbar: {
            el: '.swiper-scrollbar.service3',
            draggable: true,
            //hide: true,
        },
        pagination: {
            el: '.swiper-pagination.service3',
            clickable: true,
        }
    });
    var swiper_service4 = new Swiper('.swiper-service4', {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 18,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            576: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2.2,
            },
            991: {
                slidesPerView: 3.2,
                centeredSlides: false,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                centeredSlides: false,
            },
        },
        scrollbar: {
            el: '.swiper-scrollbar.service4',
            draggable: true,
            //hide: true,
        },
        pagination: {
            el: '.swiper-pagination.service4',
            clickable: true,
        }
    });

    var swiper_newclients = new Swiper('.swiper-new-clients', {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerColumn: 4,
        breakpoints: {
            576: {
                slidesPerView: 3,
                slidesPerColumn: 4,
            },
            991: {
                slidesPerView: 5,
                slidesPerColumn: 4,
            },
            1200: {
                slidesPerView: 6,
                slidesPerColumn: 4,
            },

        },
        pagination: {
            el: '.swiper-pagination.new-clients',
            clickable: true,
        }
    });

    var swiper_blog = new Swiper('.swiper-blog', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination.new-blog',
            clickable: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 1.5,
                slidesPerColumn: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                spaceBetween: 20,
            },

        }
    });

    if($('.swiper-case-2023-main').length > 0) {
        var swiper_case_main = new Swiper('.swiper-case-2023-main', {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination.swiper-case-2023-page',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2.2,
                    slidesPerColumn: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    spaceBetween: 30,
                },

            }
        });
        var w = $($('.case-square')[0]).outerHeight();
        $('.swiper-case-2023-main').height(w*2+30);
    }
    if($('.swiper-case-2023-main-3').length > 0) {
        var swiper_case_main_3 = new Swiper('.swiper-case-2023-main-3', {
            slidesPerView: 1.2,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination.swiper-case-2023-page-3',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }

    $(".custom-file-input_ffile").on("change", function () {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label_ffile").addClass("selected").html(fileName);
    });

    $('select').niceSelect();

    $('.chevron-down').on("click", function (e) {
        var _obj = $(this), parent_section = _obj.parents('section');
        var next_section = parent_section.next("section");

        var d_top = 0;
        if (winWidth <= 576) {
            d_top = 20;
        }
        if (next_section.length > 0) {
            $('html, body').stop().animate({
                scrollTop: next_section.offset().top - d_top
            }, 1000);
        }
    });

    $('.btn-show').on("click", function (e) {
        $('.direct-text').toggle("slow");
        $(this).remove();
    });

    $('#filt-select-service').on("change", function (e) {
        var selected_option_value = $(this).find(":selected").val();

        if (selected_option_value) {
            //$('.tab-link[data-id="'+selected_option_value+'"]').click();
            $('.tab-link[data-id="' + selected_option_value + '"]').trigger('click');

            setTimeout(function () {
                $('html').click();
            }, 100)

        }
    });

    $('#modal_form-feed_order, #modal_form-feed_tarif').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var recipient = button.data('whatever');
        var modal = $(this);
        modal.find('input#form-service').val(recipient);
    });

    // modx ajax send костыль
    $(document).on('af_complete', function (event, res) {
        if (res.success) {
            $('.modal').modal('hide');
            //$('#modal_form-feedback_result').modal('show');
            location = '/thankyou.html';
        }
    });

    $(".main-case-services-prices .tarif-text").hover(function () { // задаем функцию при наведении курсора на элемент и при его отведении
        //console.log('gjghjghj');
        $(".main-case-services-prices .tarif-text").toggleClass('no-hover');
        //$(".main-case-services-prices").toggleClass('auto-height');
        $(this).removeClass('no-hover').toggleClass("active"); // добавляем, или убираем класс у текущего элемента div
    });

    var swiper_tarif2 = new Swiper('.swiper-tarif2', {
        spaceBetween: 20,
        slidesPerView: 1.8,
        centeredSlides: true,
        grabCursor: true,
        breakpoints: {
            576: {
                slidesPerView: 1.8,
                centeredSlides: true,
                grabCursor: true,
            },
            768: {
                slidesPerView: 1.8,
                centeredSlides: true,
                grabCursor: true,
            },
            991: {
                slidesPerView: 2.8,
                centeredSlides: true,
                grabCursor: true,
            },
            1200: {
                slidesPerView: 3,
                centeredSlides: false,
                grabCursor: false,
            },
        },
        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },*/
    });

    var swiper_tarif3 = new Swiper('.swiper-tarif3', {
        spaceBetween: 20,
        slidesPerView: 1.1,
        centeredSlides: true,
        grabCursor: true,
        breakpoints: {
            576: {
                slidesPerView: 1.5,
                centeredSlides: true,
                grabCursor: true,
            },
            768: {
                slidesPerView: 1.8,
                centeredSlides: true,
                grabCursor: true,
            },
            991: {
                slidesPerView: 2.8,
                centeredSlides: true,
                grabCursor: true,
            },
            1200: {
                slidesPerView: 4,
                centeredSlides: false,
                grabCursor: false,
            },
        },
        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },*/
    });

    $('body').on('click', '.aggrement a, .agreement a', function (e) {
    //$('.aggrement a').on('click', function (e) {
        var $url = '/' + $(this).attr('href');
        $.ajax({
            type:'get',
            url: $url,
            data:{},
            success:function(data) {
                $('#modal_aggrement .modal_aggrement_html').html(data);
                $('#modal_aggrement').modal();
            }
        });
        e.preventDefault();
    });

    $('.toYakor').on('click', function (e) {
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 60
        }, 1200);
        e.preventDefault();
    });

    function setSale(value) {
        if (value)
            $("#get_bitrix24 + .nice-select").find('.current').append('<div class="percent-sale"><span>' + value + '</span></div>');
    }

    let getBitrix = $("#get_bitrix24");

    if (getBitrix.length > 0) {
        $("#get_bitrix24").change(function () {
            let licenseValue = getBitrix.val(),
                licenseTable = $("." + licenseValue);
            console.log(licenseValue)
            if (licenseValue == 'm1') setSale(m1);
            if (licenseValue == 'm3') setSale(m3);
            if (licenseValue == 'm12') setSale(m12);
            licenseTable.addClass("active").siblings().removeClass("active");
            // $("#lic-" + licenseValue).addClass("active").siblings().removeClass("active");
        });
        setTimeout(function () {
            $("#get_bitrix24").change();
        }, 500)
    }

    const counterElements = document.querySelectorAll(".counter");
    const speed = 50; // the lower the slower
    // Counters
    function counter(target, start, stop) {
        target.innerText = 0;
        const counterInterval = setInterval(() => {
            const inc = Number(stop / speed);
            start += inc;
            //const valueConverted = (Math.round(start * 100) / 100).toFixed(1);
            const valueConverted = (Math.round(start * 100) / 100).toFixed(0);
            target.innerText = valueConverted;
            if (valueConverted == stop) {
                clearInterval(counterInterval);
            }
        }, 30);
    }

    function obCallBack(entries) {
        entries.forEach((entry) => {
            const {target} = entry;
            // const stopValue = target.innerText;
            const stopValue = target.getAttribute('data-count');
            const startValue = 0;
            if (!entry.isIntersecting) return;
            counter(target, startValue, stopValue);
            counterObserver.unobserve(target);
        });
    }

    const counterObserver = new IntersectionObserver(obCallBack, {threshold: 1});
    counterElements.forEach((counterElem) => counterObserver.observe(counterElem));


    if ($(".js-is-ready").length > 0) {
        setInterval(function () {
            $(".js-is-ready").each(function () {
                var t = $(this), i = t.attr("data-is-ready-delay");
                i = i ? parseFloat(i) : 0, $(window).on("scroll", function (e) {
                    !t.hasClass("is-ready") && t.offset().top <= window.pageYOffset + window.innerHeight ? setTimeout(function () {
                        t.addClass("is-ready"), t.trigger("is-ready")
                    }, i) : t.hasClass("is-ready") && t.hasClass("animation-wave") && t.offset().top > window.pageYOffset + window.innerHeight && t.removeClass("is-ready")
                })

            });
        }, 250);

        setTimeout(function () {
            $(window).trigger("scroll")
        }, 250)
    }

    if($('.grid-masonry').length > 0) {
        console.log('sdfsdf')
        $grid = $('.grid-masonry').masonry({
            itemSelector: '.grid-item',
            //initLayout: false,
            //columnWidth: 200
        });
        /*$grid.masonry( 'on', 'layoutComplete', function() {
            console.log('layout is complete');
        });
        $grid.masonry();*/
        $grid.imagesLoaded().progress( function() {
            $grid.masonry('layout');
        });

        /*setTimeout(function (){
            console.log('lllllllll')
            $grid.masonry('reloadItems');
        }, 2000);*/

    }

    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }

    $('body')
        .on('mouseenter mouseleave','.header .dropdown',toggleDropdown)
        .on('click', '.header .dropdown-menu a', toggleDropdown);

    $( '.header .dropdown a.dropdown-toggle' ).on( 'click', function ( e ) {

        console.log('hfhfghfghf')

        var $el = $( this );
        $el.toggleClass('active-dropdown');
        var $parent = $( this ).offsetParent( ".dropdown-menu" );

        if($el.parent( "li" ).hasClass( 'show' )) {
            location.href = $el.attr('href');
        }

        if ( !$( this ).next().hasClass( 'show' ) ) {
            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = $( this ).next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );

        $( this ).parent( "li" ).toggleClass( 'show' );

        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
            $el.removeClass('active-dropdown');
        } );

        /*if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }*/

        return false;
    });

});

document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function (lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});