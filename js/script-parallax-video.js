$(document).ready(function(){
    //Script video for all section video parallax all pages
    var onMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { onMobile = true; }
    if( ( onMobile === false ) ) {
        $('.parallax-player').mb_YTPlayer({
            containment: "#bg-video",
            mute: false,
            loop: false,
            startAt: 0,
            autoPlay: false,
            showYTLogo: false,
            showControls: false
        });
        $(".video-controls").hide()
        $("#video-parallax").on("YTPStart",function(){
            $("#bg-video .video-controls").show().css({opacity: 1, visibility: "visible"});
            $(".placeholder-video-blog, #bg-video .play, #bg-video h2").css({opacity: 0, visibility: "hidden"});
        });
        $("#video-parallax").on("YTPPause",function(){
            $("#bg-video .play, #bg-video h2").css({opacity: 1, visibility: "visible"});
            $(".parallax-video .video-controls").css({opacity: 0, visibility: "hidden"});
        });
        $("#video-parallax").on("YTPEnd",function(){
            $("#bg-video .play").show().css({opacity: 1, visibility: "visible", display: "block"});
        });
    }
});