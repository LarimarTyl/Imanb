// 轮播图js
    $(function () {
        $(".smallpics li").mouseenter(function () {
            $(".big").attr("src",$(this).children("img").attr("src"));
        })
    });
// 轮播图js
