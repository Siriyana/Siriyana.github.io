$(document).ready(function(){
    console.log("myJQuery.js is loaded");

    $("#firstButton").click(function(){
        $("#myDiv").load("http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=JSON&APPID=ff64c247a136f706923d1ee0d55d71e2", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                console.log("Loaded succesfully");
            if(statusTxt == "error")
                console.log("Error " + xhr.status + ": " + xhr.statusTxt);
        });
    });

    $("#secondButton").click(function(){

        $("h1").html("New Heading");
        var newElement=$("<li>This is new row</li>");
        newElement.appendTo("#content");
        newElement.appendTo("ul.last");

    });

    $("#thirdButton").click(function(){
        $("h1").hide();
        $("h2").slideUp();
        $("h2").slideDown();

    });


});