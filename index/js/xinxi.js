$(function () {
    $(".student ul li span").click(function () {
        $(this).parents().siblings().find(".xinxi").hide();
        $(this).siblings(".xinxi").show();
    });
    $(function () {
        setTimeout(function () {
            $("#wrap").fadeIn("slow")
        }, 3000);
    });
})
