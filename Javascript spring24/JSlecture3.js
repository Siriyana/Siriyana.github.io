var fieldset = document.getElementById("myFieldset")
fieldset.style.display = "none";

function myFirstFunction(number){
    for(var i=0; i < number; i++){
        console.log(i);
    }
    return 10;
}

function buttonFunction(){
    console.log("This event listener function");
    var element = document.getElementById("demo");
    element.innerHTML = "This is event listener text";
}

function showXY(e) {
    var x = e.clientX;
    var y = e.clientY;

    var coords = "X coords: " + x + ", <br> Y coords: " + y;
    document.getElementById("coordinates").innerHTML=coords;
}

function validateForm(){
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms.myForm.lname.value;
    
    if(fname==null || fname=="" || fname.length < 3){
        document.forms.myForm.fname.style.borderColor = "red";
        document.getElementById("feedback").innerHTML = "<b>*Fill in properly</b>"
        return false;
    }
}

function showExtraFields(){
    var y = document.getElementById("myFieldset");
    y.style.display="block";
}