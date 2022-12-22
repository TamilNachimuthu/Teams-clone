$(".people-icon").click(function () {
    alert("Onloading ");
});
// $(".people-tap").click(function(){
//         $(".people-content").animate({
//         height: 'toggle'
//         });
//     });
//     $(".chat-tap").click(function(){
//         $(".chat-content").slideToggle(5000);
//     });
$(".people-tap").click(function () {
    if ($(".people-content").hasClass("active")) {
        $(".people-content").removeClass("active");
        $(".items,.body-content,.body-bottom,.outrmenubar ").removeClass("activepeople");
        $(".people-tap").css("border-bottom", "none");
    }
    else {
        $(".items,.body-content,.body-bottom,.outrmenubar ").addClass("activepeople");
        $(".people-content").addClass("active");
        $(".chat-content").removeClass("active");
        $(".people-tap").css("border-bottom", "2px solid #9e9af9");
        $(".chat-tap").css("border-bottom", "none");
    }

})
$(".down-arrow").click(function () {
    if ($(".members-list").hasClass("active")) {
        $(".members-list").removeClass("active");
        $(".down-arrow").css("transform", "rotate(270deg)");
    }
    else {
        $(".members-list").addClass("active");
        $(".down-arrow").css("transform", "rotate(0deg)");
    }
})
$(".down-arrow2").click(function () {
    if ($(".members-list").hasClass("active")) {
        $(".members-list").removeClass("active");
        $(".down-arrow2").css("transform", "rotate(270deg)");
    }
    else {
        $(".members-list").addClass("active");
        $(".down-arrow2").css("transform", "rotate(0deg)");
    }
})
$(".cancel-btn, .cancel-btnpeople").click(function () {
    $(".people-content, .chat-content").removeClass("active");
    $(".items,.body-content,.body-bottom, .outrmenubar").removeClass("activepeople");
    $(".people-tap,.chat-tap").css("border-bottom", "none");
})

$(".chat-tap").click(function () {
    if ($(".chat-content").hasClass("active")) {
        $(".chat-content").removeClass("active");
        $(".items,.body-content,.body-bottom,.outrmenubar ").removeClass("activepeople");
        $(".chat-tap").css("border-bottom", "none");
    }
    else {
        $(".items,.body-content,.body-bottom,.outrmenubar ").addClass("activepeople");
        $(".chat-content").addClass("active");
        $(".people-content").removeClass("active");
        $(".people-tap").css("border-bottom", "none");
        $(".chat-tap").css("border-bottom", "2px solid #9e9af9");
    }
});
// $(".submit-btn").click(function(){
//     $(".messages").html("<span class='texthead'>27-04-2022 20:38</span><p class='spantextt'></p>").addClass("chat-para");
//     $(".chat-para").append($(".chat").val());
//     $(".chat").val("");
// })
$(".submit-btn").click(function () {
    var getMessage = $(".chat").val();
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if (getMessage !== "") {
        var newMessage = "<div class='chatPara send active'><span class='messageContent'>" + getMessage + "</span>" +
            "<span class='sendTime'>" + time + "</span>" +
            "<ion-icon name='ellipsis-horizontal' class='menuAction white'></ion-icon>" +
            "<div class='editMsg'><span class='editBtn'>Edit</span><span class='deleteBtn'>Delete</span></div>" +
            "</div>";
        $(".chat-box .messages").append(newMessage);
        $(".chat").val("");
    }
    else {
        alert("Type some text!");
    }
    $(".deleteBtn").on("click", function () {
        $(this).parent().parent(".send").remove();
    })
    $(".editBtn").on("click", function () {
        $(this).parent().siblings(".messageContent").attr("contenteditable", "true");
        $(".messages").css("border", "1px solid red");
        // $(".edit-box").removeClass("active");
        $(".outer-bg").addClass("active");
    })
});
$(".outer-bg").click(function () {
    $(".outer-bg").removeClass("active");
    $(".messageContent").attr("contenteditable", "false");
    $(".messages").css("border", "none");
})
$(".more-1").click(function () {
    if ($(".removeitem").hasClass("active")) {
        $(".removeitem").removeClass("active");
    }
    else {
        $(".remove-box-1").addClass("active");
    }
})
$(".more-2").click(function () {
    if ($(".removeitem").hasClass("active")) {
        $(".removeitem").removeClass("active");
    }

    else {
        $(".remove-box-2").addClass("active");
    }
})
$(".more-3").click(function () {
    if ($(".removeitem").hasClass("active")) {
        $(".removeitem").removeClass("active");
    }
    else {
        $(".remove-box-3").addClass("active");
    }
})
$(".more-4").click(function () {
    if ($(".removeitem").hasClass("active")) {
        $(".removeitem").removeClass("active");
    }

    else {
        $(".remove-box-4").addClass("active");
    }
})

$(".remove-1").click(function () {
    $(".body-items-1").hide();
    $(".person111").hide();
    $(".person11").show();
    $(".person111").removeClass("pcount");
    $(".counto1").addClass("ocount");
    $(".plenth").text($(".count1 .pcount").length);
    $(".olenth").text($(".count2 .ocount").length);

})
$(".add-1").click(function () {
    $(".body-items-1").show();
    $(".person111").show();
    $(".person11").hide();
    $(".person111").addClass("pcount");
    $(".counto1").removeClass("ocount");
    $(".plenth").text($(".count1 .pcount").length);
    $(".olenth").text($(".count2 .ocount").length);
})

$(".remove-2").click(function () {
    $(".body-items-2").hide();
    $(".person222").hide();
    $(".person12").show();
    $(".person222").removeClass("pcount");
    $(".counto2").addClass("ocount");
    $(".plenth").text($(".count1 .pcount").length);
    $(".olenth").text($(".count2 .ocount").length);
})
$(".add-2").click(function () {
    $(".body-items-2").show();
    $(".person222").show();
    $(".person12").hide();
    $(".person222").addClass("pcount");
    $(".counto2").removeClass("ocount");
    $(".plenth").text($(".count1 .pcount").length);
    $(".olenth").text($(".count2 .ocount").length);
})

$(".remove-3").click(function () {
    $(".body-items-3").hide();
    $(".person333").hide();
    $(".person13").show();
    $(".person333").removeClass("pcount");
    $(".counto3").addClass("ocount");
    $(".plenth").text($(".count1 .pcount").length);
    $(".olenth").text($(".count2 .ocount").length);
})
$(".add-3").click(function () {
    $(".body-items-3").show();
    $(".person333").show();
    $(".person13").hide();
    $(".person333").addClass("pcount");
    $(".counto3").removeClass("ocount");
    $(".plenth").text($(".count1 .pcount").length);
    $(".olenth").text($(".count2 .ocount").length);
})

$(".remove-4").click(function () {
    $(".body-items-4").hide();
    $(".person444").hide();
    $(".person14").show();
    $(".person444").removeClass("pcount");
    $(".counto4").addClass("ocount");
    $(".plenth").text($(".count1 .pcount").length);
    $(".olenth").text($(".count2 .ocount").length);
})
$(".add-4").click(function () {
    $(".body-items-4").show();
    $(".person444").show();
    $(".person14").hide();
    $(".person444").addClass("pcount");
    $(".counto4").removeClass("ocount");
    $(".plenth").text($(".count1 .pcount").length);
    $(".olenth").text($(".count2 .ocount").length);
})

$(".messages").click(function () {
    $(".editBtn").toggle();
    $(".deleteBtn").toggle();
});


