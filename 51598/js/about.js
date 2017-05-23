/**
 * tab栏切换
 */
$(document).ready(function () {
    $(".info-l ul>li").click(function () {
        var index=$(this).index();
        $(this).attr("class","tabhover").siblings("li").removeAttr("class");
        $(".info-r ul>li").eq(index-1).show().siblings("li").hide();
    })
})