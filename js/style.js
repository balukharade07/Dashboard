function comment() {
    for (var i = 0; i < 5; i++) {
        document.write(i);
        document.write("<br>\n");
        // console.log(i);
    }

}

function myFunction() {
    var element = document.getElementById("myDIV");

    if (element.classList) {
        element.classList.toggle("mystyle");
    } else {
        var classes = element.className.split(" ");
        var i = classes.indexOf("mystyle");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("mystyle");
        element.className = classes.join(" ");
    }

}




$(document).ready(function() {
    $(".name_hide").hide();
    $(".login").hide();
    $(".gmail").hide();
    $(".notifications").hide();
    $("#Search").hide();

    $("#name_show").click(function() {
        $(".name_hide").toggle();
        $(".login").hide();
        $("header").toggleClass("header1");
        $(".container-fluid").toggleClass("container");
        $(".gmail").hide();
        $(".notifications").hide();
        $("#Search").hide();
    });
    $(".login_show").click(function() {

        $(".login").toggle();
        $(".gmail").hide();
        $(".name_hide").hide();
        $(".notifications").hide();
        $("#Search").hide();



    });

    $(".gmail_show").click(function() {

        $(".gmail").toggle();
        $(".login").hide();
        $(".notifications").hide();
        $(".name_hide").hide();
        $("#Search").hide();

    });

    $(".notifications_show").click(function() {

        $(".name_hide").hide();
        $(".login").hide();
        $(".gmail").hide();
        $("#Search").hide();
        $(".notifications").toggle();

    });

    $("#search_icon").click(function() {


        $("#Search").toggle();
        $(".name_hide").hide();
        $(".login").hide();
        $(".gmail").hide();
        $(".notifications").hide();


    });

    $(".container-fluid").click(function() {
        $(".name_hide").hide();
        $(".login").hide();
        $(".gmail").hide();
        $(".notifications").hide();
        $("#Search").hide();





    });



});