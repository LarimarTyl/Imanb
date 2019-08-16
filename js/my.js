// 轮播图js
    $(function () {
        $(".smallpics li").mouseenter(function () {
            $(".big").attr("src",$(this).children("img").attr("src"));
        })
    });
// 轮播图js
// 分类列表选择案例
    $(function(){
        $("#book-list .list li").mouseenter(function(){
            $(this).find("div").addClass("list-select").addClass("up").parents("li").siblings().find("div").removeClass("list-select").removeClass("up")
        }).click(function () {
            $(this).find("div").addClass("list-active").parents("li").siblings().find("div").removeClass("list-active")
        })
        });
// 分类列表选择案例
//漫画项选择案例
    $(function () {
       $(".book-item li").mouseenter(function () {
           $(this).toggleClass("more-up")
       })
    });
//漫画项选择案例
