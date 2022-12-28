;(function($){
"use strict";
    
    var nav_offset_top = $('header').height()+10; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.menu-nav').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".menu-nav").addClass("navbar_fixed");
                } else {
                    $(".menu-nav").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    //======Isotope-recennt-projects-area=====//
    function projectMasonry(){
        if ( $('#portfolio').length ){
            $('#portfolio').imagesLoaded( function() {
                $("#portfolio").isotope({
                    itemSelector: ".portfolio-col",
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth:'.grid-sizer'
                    }
                });
                // Add isotope click function
                $("#portfolio-filter li").on('click',function(){
                    $("#portfolio-filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#portfolio").isotope({
                        filter: selector
                    })
                })
				
            })
        }
    }
    projectMasonry();
    
    /* ===== Parallax Effect===== */
	
	function parallaxEffect() {
    	$('.bg-parallax').parallax();
	}
	parallaxEffect();

   /* ===== Parallax Stellar ===== */
    
    function popupGallery(){
        if ($('.popup-gallery').length) {
            $('.popup-gallery').each(function(){
                $('.popup-gallery').magnificPopup({
                    delegate: 'a.popup',
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    removalDelay: 300,
                    mainClass:  'my-mfp-slide-bottom',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image,
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                        titleSrc: function(item) {
                            return '<a href="'+ item.el.attr('data-source') +'">'+ item.el.attr('title') +'</a>' + '<small>'+  item.el.attr('data-desc')+'</small>';
                        }
                    }
                });
            })
        }
    }
    popupGallery();
    
    function counterActivator(){
        if ( $('.counter').length ){
            $('.counter').counterUp({
                delay: 70,
                time: 1000
            })
        }
    }
    counterActivator();
    
    $('.innovation-key-info').owlCarousel({
        loop:true,
        margin:30,
        items:3,
        nav: false,
        autoplay:true,
        smartSpeed: 2000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            992:{
                items:3,
            }
        }
    });
    
    
    $('.img_slider').owlCarousel({
        loop:true,
        margin:30,
        items:1,
        nav: false,
        autoplay:true,
        smartSpeed: 2000,
        responsiveClass:true,
    });
    
    
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function business_slider(){
        if ( $('#business_slider').length ){
            $("#business_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"on",
                dottedOverlay:"on",
                navigation: {
                    onHoverStop: 'on',
                    touch:{
                        touchenabled:"on"
                    },
                    bullets:{
                        enable:true,
                        hide_onmobile:false,
                        style:"bullet-bar",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:0,
                        v_offset:50,
                        space: 10,
                        tmp:''
                    }
                },
                responsiveLevels:[4096,1199,992,767,650],
                gridwidth:[1170,970,750,700,300],
                gridheight:[780,780,780,600,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    business_slider();
    
    function business_slider2(){
        if ( $('#rev_slider_1174_1').length ){
            $("#rev_slider_1174_1").revolution({
                sliderType:"hero",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[868,768,960,720],
                lazyType:"none",
                parallax: {
                    type:"scroll",
                    origo:"slidercenter",
                    speed:400,
                    levels:[10,15,20,25,30,35,40,-10,-15,-20,-25,-30,-35,-40,-45,55],
                },
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "60px",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    business_slider2();
    
    //    progress-bar....//
    $(".progress-element").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view',
        });
    });
    
    function offcanvasActivator(){
        if ( $('.offcanvas-toggler').length ){
            $('.offcanvas-toggler').on('click', function(){
                $('.offcanvas-menu,.offcanvas_closer').toggleClass('open')
            });
            $('.offcanvas_closer,.close-offcanvas').on('click',function(){
                $('.offcanvas-menu,.offcanvas_closer').removeClass('open')
            })
        }
    }
    offcanvasActivator();
    
    /*-----blog-img-slider-----*/
    $('.slider,.service_slider,.ar_testimonial').owlCarousel({
        loop:true,
        margin:30,
        items:1,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        navContainer: '.slider',
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:1
            },
            992:{
                items:1,
            }
        }
        
    });
    $('.sliders').owlCarousel({
        loop:true,
        margin:30,
        items:1,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        navContainer: '.sliders',
        autoplay:true,
        
    });
    
    $('.sidebar_slider').owlCarousel({
        loop:true,
        margin:30,
        items:1,
        nav:false,
        autoplay:true,
        
    });
    
    /*===========full-s-baner================*/
    $('.full-slider').owlCarousel({
        loop:false,
        items:1,
        nav:false,
        navContainer: '',
        autoplay:true,
        
    });
    
    /*===========testimonial_slider================*/
    $('.testimonial_slider').owlCarousel({
        loop:false,
        items:1,
        nav:false,
        autoplay:true,
        animateOut: 'fadeOut',
    });
    
    /*====== bransds logo js ====*/
    $('.brands-logos').owlCarousel({
        loop:true,
        margin:30,
        items:6,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        navContainer: '.brands-logos',
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            481:{
                items:3
            },
            700:{
                items:3
            },
            992:{
                items:6,
            }
        }
        
    });
    
    /*====== bransds logo js ====*/
    $('.team_carousel').owlCarousel({
        loop:true,
        margin:0,
        items:3,
        nav:false,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3,
                center: true
            }
        }
        
    });
    
    
    /*---------------scroll-top-js--------*/
     $(".scroll-t").on('click', function(){
        $("body,html").animate({"scrollTop" : "0"}, 700);
    });
    
    $('.search_dropdown a').on('click', function(){
        if( $(this).parent().hasClass('open') ){
            $(this).parent().removeClass('open')
        }
        else{
            $(this).parent().addClass('open')
            $('.offcanvas_closer').addClass('show')
        }
        return false
    });
    $('.offcanvas_closer').on('click',function(){
        $('.offcanvas_closer').removeClass('show')
        $('.search_dropdown').removeClass('open')
    })
    

       
    $('.input_label').on('click', function(){
        if( $(this).hasClass('open') ){
            $(this).removeClass('open')
        }
        else{
            $(this).addClass('open')
        }
        return false
    });
    $('body').on('click',function(){
        if ( $(".input_label").hasClass('open') ){
            $(".input_label").removeClass('open')
        }
    });
    
    // preloader js
     $(window).on('load', function() { // makes sure the whole site is loaded
		$('.loader').fadeOut(); // will first fade out the loading animation
		$('.sampleContainer').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
    });
    
    /*Magnificpopup*/
    $('.popup-youtube').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass:  'my-mfp-slide-bottom'
    });
    
    /*video js */
    plyr.setup();
    

      /*---------------------
      Main Slider Fade Effect
      -----------------------*/
      if($(".swiper-main-slider-fade").length !== 0) { 
          //Slider Animated Caption 
          var swiper = new Swiper('.swiper-container', {
              effect: 'fade',
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },  
              pagination: '.swiper-pagination',
              paginationClickable: true,
              nextButton: '.swiper-button-next',
              prevButton: '.swiper-button-prev',
              spaceBetween: 0,
              loop: true,
              simulateTouch: true,
              autoplay: 5000,
              speed: 1000,
              onSlideChangeEnd: function(swiper) {
                  $('.swiper-slide').each(function() {
                      if ($(this).index() === swiper.activeIndex) {
                          // Fadein in active slide
                          $(this).find('.slider-content').fadeIn(300);
                      } else {
                          // Fadeout in inactive slides
                          $(this).find('.slider-content').fadeOut(300);
                      }
                  });
              }
          });
      } 
    
    function initVivus() {
        $('.animated-icon').each(function(index, el) {
          var startAt = $(el).parents('[data-animation]').length ? 'manual' : 'inViewport';
          if ($(el).parents('#fullpage').length) {
            startAt = 'autostart';
          }
          var delay = ($(el).parents('[data-animation]').length && $window.width() > 767)
            ? $(el).parents('[data-animation]').data('delay')
            : 0;
          new Vivus(el, {
            file: $(el).data('icon'),
            start: startAt,
            onReady: function(obj) {
              if ($(el).hasClass('gradient-icon')) {
                var colors = $(el).data('gradients')
                  ? $(el).data('gradients').replace(' ', '').split(',')
                  : ['#cf93ff', '#00c3da'];
                var xmlns = 'http://www.w3.org/2000/svg';
                var grad = document.createElementNS(xmlns, 'linearGradient');
                var uid = 'grad-' + MAIN.guid(6);
                grad.setAttributeNS(null, 'id', uid);
                grad.setAttributeNS(null, 'gradientUnits', 'userSpaceOnUse');

                var stop1 = document.createElementNS(xmlns, 'stop');
                stop1.setAttributeNS(null, 'offset', 0);
                stop1.setAttributeNS(null, 'stop-color', colors[0]);

                var stop2 = document.createElementNS(xmlns, 'stop');
                stop2.setAttributeNS(null, 'offset', 100);
                stop2.setAttributeNS(null, 'stop-color', colors[1]);

                grad.append(stop1, stop2);

                $(obj.el).prepend(grad);
                obj.el.setAttributeNS(null, 'stroke', 'url(#' + uid + ')');
                $(obj.map).each(function(index, item) {
                  item.el.setAttributeNS(null, 'stroke', 'url(#' + uid + ')');
                });
              }

              if ($(el).data('custom-color')) {
                var customColor = $(el).data('custom-color');
                obj.el.setAttributeNS(null, 'stroke', customColor);
                $(obj.map).each(function(index, item) {
                  item.el.setAttributeNS(null, 'stroke', customColor);
                });
              }

              if ($(el).parents('[data-animation]')) {
                $(el).parents('[data-animation]').appear(function() {
                  setTimeout(
                    function() {
                      obj.play();
                    },
                    delay
                  );
                });
              }
            },
          });
        });
      }
    initVivus(); 
    
    $('.video_btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    
    setInterval(function() {
      $('.sliders_img > img:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('.sliders_img');
    }, 5000);
    
    
    
    function heroslider(){
        if($(".hero_content,.hero_img_slider").length){
            $('.hero_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.hero_slider',
                autoplay: true,
                autoplaySpeed: 5000,
            });
            $('.hero_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.hero_content',
                dots: true,
                arrows : false,
                fade: true,
                centerMode: true,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 5000,
            });
        }
    }
    heroslider();
    
    function bodyScrollAnimation() {
    if($(window).width()>768){
        new WOW({
            animateClass: 'animated', // animation css class (default is animated)
            offset:       100,          // distance to the element when triggering the animation (default is 0)
            mobile:       false, 
            duration:     1000,
            }).init()
        }
    }
    bodyScrollAnimation();
    
    
    
	/*-------------------------------------------------------------------------------
	  Loader
	-------------------------------------------------------------------------------*/



	$(".animsition").animsition({
	   inClass: 'fade-in',
       outClass: 'fade-out',
	   inDuration: 1000,
	   outDuration: 700,
	   linkElement: '.side',
	   // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	   loading:true,
	   loadingParentElement: 'body', //animsition wrapper element
	   loadingClass: 'spinner',
	   loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>', // e.g '<img src="loading.svg" />'
	   timeout: false,
	   timeoutCountdown:5000,
	   onLoadEvent: true,
	   browser: [ 'animation-duration', '-webkit-animation-duration'],
	   // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	   // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	   overlay : false,
	   overlayClass : 'animsition-overlay-slide',
	   overlayParentElement : 'body',
	   transition: function(url){ window.location.href = url; }
	});
    
})(jQuery)