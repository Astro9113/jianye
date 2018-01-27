function closes(i) {
    document.getElementById(i).style.display = "none";
}

function sub(i, biaoqian) {
    //手机
    var mobile = /^(13+\d{9})|(14+\d{9})|(15+\d{9})|(16+\d{9})|(18+\d{9})|(19+\d{9})$/;

    var isIDCard = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;

    if (i == 1) {

        if ($("#UserPhone1").val() == "") {
            alert("手机号不可为空！");
        }
        else if (!mobile.test($("#UserPhone1").val())) {
            alert("请务必正确填写您的手机号！")
        }
        else if ($("#UserName1").val() == "") {
            alert("姓名不可为空！");
        }

        else {

            $.post("http://y58kg.cn:3000/api/user", {
                    UserName: $("#UserName1").val(),
                    UserPhone: $("#UserPhone1").val(),
                    FeedbackText: ".",
                    page: "PC表单",
                    Url: window.location.href,
                    biaoqian: biaoqian
                },
                function (data) {

                });

            $("#UserName1").val("");
            $("#UserPhone1").val("");
            alert("√提交成功！")

        }

    }

    if (i == 2) {

        if ($("#UserPhone2").val() == "") {
            alert("手机号不可为空！");
        }
        else if (!mobile.test($("#UserPhone2").val())) {
            alert("请务必正确填写您的手机号！")
        }
        else if ($("#UserName2").val() == "") {
            alert("姓名不可为空！");
        }

        else {

            $.post("http://y58kg.cn:3000/api/user", {
                    UserName: $("#UserName2").val(),
                    UserPhone: $("#UserPhone2").val(),
                    FeedbackText: ".",
                    page: "PC表单",
                    Url: window.location.href,
                    biaoqian: biaoqian
                },
                function (data) {

                });

            $("#UserName2").val("");
            $("#UserPhone2").val("");
            alert("√提交成功！")

        }

    }

    if (i == 3) {

        if ($("#UserPhone3").val() == "") {
            alert("手机号不可为空！");
        }
        else if (!mobile.test($("#UserPhone3").val())) {
            alert("请务必正确填写您的手机号！")
        }
        else if ($("#UserName3").val() == "") {
            alert("姓名不可为空！");
        }

        else {

            $.post("http://y58kg.cn:3000/api/user", {
                    UserName: $("#UserName3").val(),
                    UserPhone: $("#UserPhone3").val(),
                    FeedbackText: ".",
                    page: "PC表单",
                    Url: window.location.href,
                    biaoqian: biaoqian
                },
                function (data) {

                });

            $("#UserName3").val("");
            $("#UserPhone3").val("");
            alert("√提交成功！")

        }

    }

    if (i == 4) {

        if ($("#UserPhone4").val() == "") {
            alert("手机号不可为空！");
        }
        else if (!mobile.test($("#UserPhone4").val())) {
            alert("请务必正确填写您的手机号！")
        }
        else if ($("#UserName4").val() == "") {
            alert("姓名不可为空！");
        }

        else {

            $.post("http://y58kg.cn:3000/api/user", {
                    UserName: $("#UserName4").val(),
                    UserPhone: $("#UserPhone4").val(),
                    FeedbackText: ".",
                    page: "PC表单",
                    Url: window.location.href,
                    biaoqian: biaoqian
                },
                function (data) {

                });

            $("#UserName4").val("");
            $("#UserPhone4").val("");
            alert("√提交成功！")

        }

    }


    if (i == 5) {

        if ($("#UserPhone5").val() == "") {
            alert("手机号不可为空！");
        }
        else if (!mobile.test($("#UserPhone5").val())) {
            alert("请务必正确填写您的手机号！")
        }
        else if ($("#UserName5").val() == "") {
            alert("姓名不可为空！");
        }

        else {

            $.post("http://y58kg.cn:3000/api/user", {
                    UserName: $("#UserName5").val(),
                    UserPhone: $("#UserPhone5").val(),
                    FeedbackText: ".",
                    page: "PC表单",
                    Url: window.location.href,
                    biaoqian: biaoqian
                },
                function (data) {
                });

            $("#UserName5").val("");
            $("#UserPhone5").val("");
            alert("√提交成功！")

        }

    }

    if (i == 6) {

        if ($("#UserPhone6").val() == "") {
            alert("手机号不可为空！");
        }
        else if (!mobile.test($("#UserPhone6").val())) {
            alert("请务必正确填写您的手机号！")
        }
        else if ($("#UserName6").val() == "") {
            alert("姓名不可为空！");
        }

        else {

            $.post("http://y58kg.cn:3000/api/user", {
                    UserName: $("#UserName6").val(),
                    UserPhone: $("#UserPhone6").val(),
                    FeedbackText: ".",
                    page: "PC表单",
                    Url: window.location.href,
                    biaoqian: biaoqian
                },
                function (data) {

                });

            $("#UserName6").val("");
            $("#UserPhone6").val("");
            alert("√提交成功！")

        }

    }
    if (i == 7) {

        if ($("#UserPhone7").val() == "") {
            alert("手机号不可为空！");
        }
        else if (!mobile.test($("#UserPhone7").val())) {
            alert("请务必正确填写您的手机号！")
        }
        else if ($("#UserName7").val() == "") {
            alert("姓名不可为空！");
        }

        else {

            $.post("http://y58kg.cn:3000/api/user", {
                    UserName: $("#UserName7").val(),
                    UserPhone: $("#UserPhone7").val(),
                    FeedbackText: ".",
                    page: "PC表单",
                    Url: window.location.href,
                    biaoqian: biaoqian
                },
                function (data) {

                });

            $("#UserName7").val("");
            $("#UserPhone7").val("");
            alert("√提交成功！")

        }

    }
    if (i == 8) {

        if ($("#UserPhone8").val() == "") {
            alert("手机号不可为空！");
        }
        else if (!mobile.test($("#UserPhone8").val())) {
            alert("请务必正确填写您的手机号！")
        }
        else if ($("#UserName8").val() == "") {
            alert("姓名不可为空！");
        }

        else {

            $.post("http://y58kg.cn:3000/api/user", {
                    UserName: $("#UserName8").val(),
                    UserPhone: $("#UserPhone8").val(),
                    FeedbackText: ".",
                    page: "PC表单",
                    Url: window.location.href,
                    biaoqian: biaoqian
                },
                function (data) {

                });

            $("#UserName8").val("");
            $("#UserPhone8").val("");
            alert("√提交成功！")

        }

    }
    if (i == 9) {

        if ($("#UserPhone9").val() == "") {
            alert("手机号不可为空！");
        }
        else if (!mobile.test($("#UserPhone9").val())) {
            alert("请务必正确填写您的手机号！")
        }
        else if ($("#UserName9").val() == "") {
            alert("姓名不可为空！");
        }

        else {

            $.post("http://y58kg.cn:3000/api/user", {
                    UserName: $("#UserName9").val(),
                    UserPhone: $("#UserPhone9").val(),
                    FeedbackText: ".",
                    page: "PC表单",
                    Url: window.location.href,
                    biaoqian: biaoqian
                },
                function (data) {

                });

            $("#UserName9").val("");
            $("#UserPhone9").val("");
            alert("√提交成功！")
        }
    }
    if (i == 10) {

        if ($("#UserPhone10").val() == "") {
            alert("手机号不可为空！");
        }
        else if (!mobile.test($("#UserPhone10").val())) {
            alert("请务必正确填写您的手机号！")
        }
        else if ($("#UserName10").val() == "") {
            alert("姓名不可为空！");
        }

        else {

            $.post("http://y58kg.cn:3000/api/user", {
                    UserName: $("#UserName10").val(),
                    UserPhone: $("#UserPhone10").val(),
                    FeedbackText: ".",
                    page: "PC表单",
                    Url: window.location.href,
                    biaoqian: biaoqian
                },
                function (data) {

                });

            $("#UserName10").val("");
            $("#UserPhone10").val("");
            alert("√提交成功！")
        }
    }
}
