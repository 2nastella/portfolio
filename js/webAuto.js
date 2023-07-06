$(function(){
    // 알라딘
    $("#aladin_box").mouseenter(function(){
        $("#aladin > li").stop().animate({marginTop:"-1180px"},4000)
    }).mouseleave(function(){
        $("#aladin > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // MET
    $("#met_box").mouseenter(function(){
        $("#met > li").stop().animate({marginTop:"-2200px"},6000)
    }).mouseleave(function(){
        $("#met > li").stop().animate({marginTop:"0px"}, 3000)
    })


    // DCL
    $("#dcl_box").mouseenter(function(){
        $("#dcl > li").stop().animate({marginTop:"-2420px"},6000)
    }).mouseleave(function(){
        $("#dcl > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // TENBY
    $("#tenbyten_box").mouseenter(function(){
        $("#tenbyten > li").stop().animate({marginTop:"-2665px"},6000)
    }).mouseleave(function(){
        $("#tenbyten > li").stop().animate({marginTop:"0px"},3000)
    })
})

