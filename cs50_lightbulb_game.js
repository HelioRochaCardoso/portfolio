$(document).ready(function() {
    var bulb_toggle1 = true,
        bulb_toggle2 = true,
        bulb_toggle3 = true,
        bulb_toggle4 = true,
        bulb_toggle5 = true,
        bulb_toggle6 = true,
        bulb_toggle7 = true,
        bulb_toggle8 = true;
    var binary_toggle = true,
        numbers_toggle = true,
        game_mode_toggle = false;
    var final_value = parseInt($("#user_count").val());
    var random_num_gen = 0;

    // $(function() {
    //     $(".bulb").click(function() {
    //         // for (var i = 1; i <= 8; i++) {
    //         // (toggleDic["bulb_toggle" + i]) === true ? ($(this).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg"), $(this).siblings(".binary").text("1"), final_value += parseInt($(this).siblings(".number").children(".numVal").val()), $("#user_count").val(final_value), figval = false, alert(figval)) : ($(this).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg"), $(this).siblings(".binary").text("0"), final_value -= parseInt($(this).siblings(".number").children(".numVal").val()), $("#user_count").val(final_value), figval = true, alert(figval));
    //         // }

    //         var toggleDic = {
    //             bulb_toggle1: true,
    //             bulb_toggle2: true,
    //             bulb_toggle3: true,
    //             bulb_toggle4: true,
    //             bulb_toggle5: true,
    //             bulb_toggle6: true,
    //             bulb_toggle7: true,
    //             bulb_toggle8: true
    //         };

    //         for (const i = 1; i <= 8; i++) {
    //             if (toggleDic["bulb_toggle" + i] === true) {
    //                 $(this).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg");
    //                 $(this).siblings(".binary").text("I").css("color", "green");
    //                 final_value += parseInt($(this).siblings(".number").children(".numVal").val());
    //                 $("#user_count").val(final_value);
    //                 toggleDic["bulb_toggle" + i] = false;
    //             } else if ((toggleDic["bulb_toggle" + i]) === false) {
    //                 $(this).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg");
    //                 $(this).siblings(".binary").text("0").css("color", "black");
    //                 final_value -= parseInt($(this).siblings(".number").children(".numVal").val());
    //                 $("#user_count").val(final_value);
    //                 toggleDic["bulb_toggle" + i] = true;
    //             }
    //         }
    //     });
    // });

    $("#bulb1").click(function() {
        if (bulb_toggle1 === true) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg");
            $("#binary1").text("1").css("color", "#b9936c");
            final_value += 128;
            $("#user_count").val(final_value);
            bulb_toggle1 = false;
            checkResult(final_value);
        } else if (bulb_toggle1 === false) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg");
            $("#binary1").text("0").css("color", "black");
            final_value -= 128;
            $("#user_count").val(final_value);
            bulb_toggle1 = true;
            checkResult(final_value);
        }
    });

    $("#bulb2").click(function() {
        if (bulb_toggle2 === true) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg");
            $("#binary2").text("1").css("color", "#b9936c");
            final_value += 64;
            $("#user_count").val(final_value);
            bulb_toggle2 = false;
            checkResult(final_value);
        } else if (bulb_toggle2 === false) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg");
            $("#binary2").text("0").css("color", "black");
            final_value -= 64;
            $("#user_count").val(final_value);
            bulb_toggle2 = true;
            checkResult(final_value);
        }
    });

    $("#bulb3").click(function() {
        if (bulb_toggle3 === true) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg");
            $("#binary3").text("1").css("color", "#b9936c");
            final_value += 32;
            $("#user_count").val(final_value);
            bulb_toggle3 = false;
            checkResult(final_value);
        } else if (bulb_toggle3 === false) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg");
            $("#binary3").text("0").css("color", "black");
            final_value -= 32;
            $("#user_count").val(final_value);
            bulb_toggle3 = true;
            checkResult(final_value);
        }
    });

    $("#bulb4").click(function() {
        if (bulb_toggle4 === true) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg");
            $("#binary4").text("1").css("color", "#b9936c");
            final_value += 16;
            $("#user_count").val(final_value);
            bulb_toggle4 = false;
            checkResult(final_value);
        } else if (bulb_toggle4 === false) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg");
            $("#binary4").text("0").css("color", "black");
            final_value -= 16;
            $("#user_count").val(final_value);
            bulb_toggle4 = true;
            checkResult(final_value);
        }
    });

    $("#bulb5").click(function() {
        if (bulb_toggle5 === true) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg");
            $("#binary5").text("1").css("color", "#b9936c");
            final_value += 8;
            $("#user_count").val(final_value);
            bulb_toggle5 = false;
            checkResult(final_value);
        } else if (bulb_toggle5 === false) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg");
            $("#binary5").text("0").css("color", "black");
            final_value -= 8;
            $("#user_count").val(final_value);
            bulb_toggle5 = true;
            checkResult(final_value);
        }
    });

    $("#bulb6").click(function() {
        if (bulb_toggle6 === true) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg");
            $("#binary6").text("1").css("color", "#b9936c");
            final_value += 4;
            $("#user_count").val(final_value);
            bulb_toggle6 = false;
            checkResult(final_value);
        } else if (bulb_toggle6 === false) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg");
            $("#binary6").text("0").css("color", "black");
            final_value -= 4;
            $("#user_count").val(final_value);
            bulb_toggle6 = true;
            checkResult(final_value);
        }
    });

    $("#bulb7").click(function() {
        if (bulb_toggle7 === true) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg");
            $("#binary7").text("1").css("color", "#b9936c");
            final_value += 2;
            $("#user_count").val(final_value);
            bulb_toggle7 = false;
            checkResult(final_value);
        } else if (bulb_toggle7 === false) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg");
            $("#binary7").text("0").css("color", "black");
            final_value -= 2;
            $("#user_count").val(final_value);
            bulb_toggle7 = true;
            checkResult(final_value);
        }
    });

    $("#bulb8").click(function() {
        if (bulb_toggle8 === true) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg");
            $("#binary8").text("1").css("color", "#b9936c");
            final_value += 1;
            $("#user_count").val(final_value);
            bulb_toggle8 = false;
            checkResult(final_value);
        } else if (bulb_toggle8 === false) {
            $(this).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg");
            $("#binary8").text("0").css("color", "black");
            final_value -= 1;
            $("#user_count").val(final_value);
            bulb_toggle8 = true;
            checkResult(final_value);
        }
    });

    $("#binary_code span").click(function() {
        binary_toggle === true ? ($(".binary").css("visibility", "hidden"), binary_toggle = false) : ($(".binary").css("visibility", "visible"), binary_toggle = true);
    });

    // toggles numbers on top of light bulbs
    $("#num_display span").click(function() {
        numbers_toggle === true ? ($(".number").css("visibility", "hidden"), numbers_toggle = false) : ($(".number").css("visibility", "visible"), numbers_toggle = true);
    });

    // clicking the plus symbol increases user input by 1
    $("#plus").click(function() {
        if (final_value < 255 && final_value >= 0) {
            $("#user_count").val(final_value = final_value + 1);
            // switch on bulb whenever user_count increases by 1
            for (const i = final_value; i < 255 && i >= 0; i++) {
                i === parseInt($("#user_count").val()) ? ($("#bulb" + i).attr("src", "https://image.flaticon.com/icons/svg/222/222546.svg"),
                    $("#binary" + i).text("1").css("color", "#b9936c")) : null;
            }
        }
    });

    // clicking minus symbol decreases user input by 1
    $("#minus").click(function() {
        if (final_value <= 255 && final_value > 0) {
            $("#user_count").val(final_value = final_value - 1);
            // switch off bulb whenever user_count decreases by 1
            for (const i = final_value; i <= 255 && i > 0; i--) {
                i === parseInt($("#user_count").val()) ? ($("#bulb" + i).attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg"),
                    $("#binary" + i).text("0").css("color", "black")) : null;
            }
        }
    });

    // activates game mode... FIX Does not disapear when disabled
    $("#game_mode .switch").click(function() {
        game_mode_toggle === false ? (random_num_gen = Math.ceil(Math.random() * 255),
            $("#modal").css("display", "block"),
            $("#random_number").html("<strong>" + random_num_gen + "<strong>").css("font-size", "20px"),
            $("#game_mode_num").css("display", "block").html("Represent the number <strong>" + random_num_gen + "</strong> in binary")) : ($("#modal").css("display", "none"),
            game_mode_toggle = true);

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            var modal = document.getElementById("modal");
            event.target === modal ? modal.style.display = "none" : null;
        }

        // When the user clicks on (x), close the modal
        $("#modal_close").click(function() {
            $("#modal").css("display", "none");
        });
    });

    function bulbsOn() {
        $(".top").css({
            /* Safari 4.0 - 8.0 */
            "-webkit-animation-name": "bulbsToggle",
            /* Safari 4.0 - 8.0 */
            "-webkit-animation-duration": "0.5s",
            /* Safari 4.0 - 8.0 */
            "-webkit-animation-iteration-count": "7",
            "animation-name": "bulbsToggle",
            "animation-duration": "0.5s",
            "animation-iteration-count": "7"
        });
    }

    function bulbsOff() {
        $(".bottom").css({
            /* Safari 4.0 - 8.0 */
            "-webkit-animation-name": "bulbsToggle2",
            /* Safari 4.0 - 8.0 */
            "-webkit-animation-duration": "0.5s",
            /* Safari 4.0 - 8.0 */
            "-webkit-animation-iteration-count": "7",
            "animation-name": "bulbsToggle2",
            "animation-duration": "0.5s",
            "animation-iteration-count": "7"
        });
    }

    // makes bulbs flicker
    function bulbsOnOff() {
        bulbsOn();
        bulbsOff();
    }

    // If user gets correct result, game mode ends
    function checkResult(result) {
        if (result > 0 && result === random_num_gen) {
            $("#modal2").css("display", "block");
            bulbsOnOff();
            $(".bulb").attr("src", "https://image.flaticon.com/icons/svg/248/248093.svg");

            // When the user clicks anywhere outside of the modal, it closes
            window.onclick = function(event) {
                var modal2 = document.getElementById("modal2");
                event.target === modal2 ? modal2.style.display = "none" : null;
            }

            // refreshes window
            return setTimeout(function() {
                location.reload(1);
            }, 6000);
        }
    }
});