"use strict";function hide_preloader(){rotate=0;$("#preloader").fadeOut(1e3);$.stellar("refresh")}function anim(){$("#preloader_image").animate({left:"-1400px"},8e3,function(){$("#preloader_image").animate({left:"0px"},5e3);if(rotate==1){anim()}})}function wresize(){var e=$("body").height();$("#banner-slide-img .item").height(e)}var rotate=1;var screen_ht=$(window).height();var preloader_ht=10;var padding=screen_ht/2-preloader_ht;$("#preloader").css("padding-top",padding+"px");anim();$(window).resize(function(){wresize()});jQuery(document).ready(function(e){wresize();e(".timeline ul li").hide();e(".loadmore").click(function(){e(".timeline").css("margin-bottom","72px");e(".timeline ul li").slideDown(700,function(){e.stellar("refresh")});e(".loadmore").hide();return false});e(".menu-mobile").click(function(){e(".menu-mobile").toggleClass("m-ef");e("header nav.menu").toggleClass("nav-ef")});e("header nav ul li a").click(function(){e(".menu-mobile").removeClass("m-ef");e("header nav.menu").removeClass("nav-ef")});e(".scroll-s1").click(function(){e("html,body").animate({scrollTop:e("#work").offset().top},"slow");return false});e("#services .link a").click(function(){e("html,body").animate({scrollTop:e("#contact").offset().top},"slow");return false});e(".search input").click(function(){e(this).attr("value","")});e("#subscribe input").click(function(){e(this).attr("value","")});e("#owl-banner").owlCarousel({autoPlay:3e3,slideSpeed:1e3,navigation:false,pagination:false,singleItem:true,transitionStyle:"fadeUp"});e("#owl-banner-img").owlCarousel({autoPlay:4e3,slideSpeed:1e3,navigation:false,pagination:false,singleItem:true,transitionStyle:"fade"});e("#owl").owlCarousel({autoPlay:1e4,items:4,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],navigation:true,pagination:false});e("#owl2").owlCarousel({autoPlay:1e4,slideSpeed:1e3,navigation:true,pagination:false,singleItem:true,transitionStyle:"fade"});e("#owl3").owlCarousel({autoPlay:2e4,items:1,navigation:false,pagination:true,transitionStyle:"fade",singleItem:true});e("#owl-blog-list").owlCarousel({autoPlay:1e4,slideSpeed:1e3,navigation:true,pagination:false,singleItem:true});e("#owl-lasted").owlCarousel({autoPlay:1e4,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],navigation:true,pagination:false});e(".home header nav ul li:eq(0)").addClass("current-page-item");e("header nav").onePageNav();e("#scroll-top").click(function(){e("html, body").animate({scrollTop:0},1e3)});if(e(window).width()>992){e.stellar({horizontalScrolling:true,verticalScrolling:true,horizontalOffset:0,verticalOffset:0,responsive:false,scrollProperty:"scroll",positionProperty:"position",parallaxBackgrounds:true,parallaxElements:true,hideDistantElements:true,hideElement:function(e){e.hide()},showElement:function(e){e.show()}})}if(e(window).width()>767){e("#bg-parallax2 .box").appear(function(){var t=e(".countup",this).html();e(".countup",this).countTo({from:0,to:t,speed:2500,refreshInterval:50})});(new WOW).init()}});var sticky=$("header");var origOffsetY=sticky.offset().top+1;$(window).scroll(function(){$(window).scrollTop()>origOffsetY?$("header").addClass("head-effect"):$("header").removeClass("head-effect")});$(document).ready(function(){if($(".popup-image").length>0){$(".popup-image").magnificPopup({type:"image"})}if($(".popup-gallery").length>0){$(".popup-gallery").magnificPopup({type:"inline",callbacks:{open:function(){$(".img-slideshow").owlCarousel({autoPlay:6e3,slideSpeed:500,navigation:true,pagination:false,singleItem:true})},close:function(){},imageLoadComplete:function(){}}})}if($(".popup-soundcloud").length>0){$(".popup-soundcloud").magnificPopup({type:"iframe",mainClass:"soundcloud-popup"})}if($(".popup-youtube, .popup-vimeo, .popup-gmaps").length>0){$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",fixedContentPos:false,fixedBgPos:false,mainClass:"mfp-fade",removalDelay:160,preloader:false})}})