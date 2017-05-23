/***
 * 选择版本 改变价格
 * 点击上下箭头 修改购买数量
 */
$("document").ready(function () {
    count();
    price();
})

//选择版本 改变价格
function price() {
    $("input[type='radio']").click(function () {
        //点击选中的radio的时候添加一个类名 并移除兄弟元素的类名
        $(this).attr("class","check").siblings().removeAttr("class")
        //判断谁有该类名之后 修改对应的价格
        if( $("#gj").hasClass("check")){
            $("#price").val("4800");
        }
        if($("#jg").hasClass("check")){
            $("#price").val("6800");
        }
    })
}
//点击上下箭头 修改购买数量
function count() {
    var num=$(".num").val();
    //点击向上箭头 添加数量
    $(".up").click(function () {
       num++;
        if(num>=2){
            num=2;
        }
        $(".num").val(num);
    });
//点击向下箭头 减少数量
    $(".down").click(function () {
        num--;
        if(num<=1){
            num=1
        }
        $(".num").val(num);
    })
}