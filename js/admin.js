$(function () {
    //tabs控制
    $(".admin-tab li").on("click", function () {
        $(this).addClass("left_active").siblings().removeClass("left_active").removeClass("admin-active");
    });
    $(".admin-tab li").mouseenter(function () {
        $(this).addClass("admin-active").siblings().removeClass("admin-active")
    }).mouseleave(function () {
        $(this).removeClass("admin-active");
    });
    // 按钮控制宽度
    $(".list-btn").click(function () { 
        $(".admin-tabs").toggleClass("short");
        $(".admin-tabs .admin-tab").toggleClass("short");
        $(".admin-tabs .admin-tab li").toggleClass("short");
        $("#admin-content").toggleClass("long").toggleClass("wd80")
     })
});   

$(function(){
    //单个文件上传
   $(".newInputIcon").change(function () {
   var filePath = $(this).val();
   var fileType = filePath.substring(filePath.lastIndexOf("."));
       if (fileType == ".jpg" ||fileType == ".JPG") {
           $(this).parent().siblings("img").attr("src", URL.createObjectURL($(this)[0].files[0]));
       } else {
           var flag = confirm("上传图片格式不正确，请重新选择(.jpg)");
       };
});
// 批量上传
$(".newInputPath").change(function () {
    var files = this.files;
    var show = $("#showImg")
    show.empty();
    for(var i = 0 ; i<files.length;i++){
        var img = $("<img/>").addClass("img");
        img.attr("src",URL.createObjectURL(files[i]))
        console.log(img)
        img.appendTo(show);
    } 
   console.log(files);
    console.log(show)
   })
})