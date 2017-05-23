/**
 * Created by hzf on 2017/5/11.
 */

window.onload = function () {

}

/**
 * 封装一个函数，当页面滚动的高度超出整屏的高度，让申请体验表的定位在顶部
 */
BottomJumpPage= function () {
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if (scrollTop + windowHeight >= scrollHeight) { //滚动到底部执行事件
        $("#extra").addClass("fixed-top").removeClass("fixed-bottom")
    }
    else{
        $("#extra").addClass("fixed-bottom").removeClass("fixed-top")
    }
}
$(window).scroll(BottomJumpPage);

//点击x关闭窗口
$("#close").click(function () {
    $("#extra").addClass("hide")
})
/***
 * 功能视频链接
 * 鼠标经过li的时候改变computer的背景图片src属性  并且改变href的链接地址
 */
var img=$(".bg>img")
$(".img1").mouseover(function () {
    img.attr("src","./images/bg_01.png")
})
$(".img2").mouseover(function () {
    img.attr("src","./images/bg_02.png")
})
$(".img3").mouseover(function () {
    img.attr("src","./images/bg_03.png")
})
$(".img4").mouseover(function () {
    img.attr("src","./images/bg_04.png")
})
$(".img5").mouseover(function () {
    img.attr("src","./images/bg_05.png")
})
$(".img6").mouseover(function () {
    img.attr("src","./images/bg_06.png")
})
$(".start").click(function () {
    if(img.attr("src")=="./images/bg_01.png"){
        $(".computer a").attr("href","./index_3.html")
    }if(img.attr("src")=="./images/bg_02.png"){
        $(".computer a").attr("href","./vid02.html")
    }if(img.attr("src")=="./images/bg_03.png"){
        $(".computer a").attr("href","./vid03.html")
    }if(img.attr("src")=="./images/bg_04.png"){
        $(".computer a").attr("href","./vid04.html")
    }if(img.attr("src")=="./images/bg_05.png"){
        $(".computer a").attr("href","./vid05.html")
    }if(img.attr("src")=="./images/bg_06.png"){
        $(".computer a").attr("href","./vid06.html")
    }
})
//注册验证
$('#sub2').click(function(){

    var rname=$("#user2").val();
    var phone=$("#tel2").val();

    if(rname==""){
        layer.msg('名称不能为空…',{icon:2}) ;setTimeout(function(){},2000);return false;
    }

    if(phone==""){
        layer.msg('手机不能为空…',{icon:2});setTimeout(function(){},2000);return false;
    }

    // var data={
    //     name:rname,
    //     phone:phone
    // }
    // $.ajax({
    //     url: "",
    //     type:"post",
    //     data: data
    // })
})
/*控制flv格式的视频*/
$('#box').mouseenter(function () {
    $('.totel .fp-embed').hide();
    $('.totel .fp-brand').remove();
});



