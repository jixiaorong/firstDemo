/**
 * Created by hzf on 2017/5/22.
 */
<!--动态生成内容-->

<!--获取插件的函数-->
//封装一个获取参数的插件
(function($){
    $.getUrlParam
        = function(name)
    {
        var reg
            = new RegExp("(^|&)"+
            name +"=([^&]*)(&|$)");
        var r
            = window.location.search.substr(1).match(reg);
        if (r!=null) return unescape(r[2]); return null;
    }
})(jQuery);


var index_=$.getUrlParam('txt');
$.ajax({
    url:'../txt.xml',
    type:"POST",
    async:true,
    success:function(data){
        var text_list=$(data).find("#txt"+index_);
        $('.title').html(text_list.find('.title'));
        $('.time').html(text_list.find('.time'));
        var cont=text_list.find('.content').html();
        var txt=cont.replace(/\s{2,}/gm,'<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        $('.content').html(txt);
    }
})

