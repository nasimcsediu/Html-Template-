$(document).ready(function(){
    //Video youtube custom
    var onMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { onMobile = true; }
    if( ( onMobile === false ) ) {
        $('.blog-video').mb_YTPlayer({
            containment: "#blog-video",
            mute: false,
            loop: false,
            startAt: 0,
            autoPlay: false,
            showYTLogo: false,
            showControls: false
        });
        $(".video-controls").hide()
        $("#video").on("YTPStart",function(){
            $(".video-controls").show().css({opacity: 0, visibility: "visible"}).animate({opacity: 1},300);
            $(".placeholder-video-blog, .play").css({opacity: 1, visibility: "hidden"}).animate({opacity: 0},300);
        });
        $("#video").on("YTPPause",function(){
            $("#blog-video .play").css({opacity: 0, visibility: "visible"}).animate({opacity: 1},300);
            $(".video-controls").css({opacity: 1, visibility: "hidden"}).animate({opacity: 0},300);
        });
        $("#video").on("YTPEnd",function(){
            $("#blog-video .play").show().css({opacity: 0, visibility: "visible", display: "block"}).animate({opacity: 1},300);
        });
    }
});