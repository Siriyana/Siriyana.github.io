function checkFields(){
    var email = document.myForm.email.value;
    var comment = document.myForm.comment.value;
    
    if(email==null || email=="" || email.length < 6 || email.length > 15 || email.indexOf("@") === -1){
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("feedback").style.color = "red";
        document.getElementById("feedback").innerHTML = "Sähköpostissa pitää olla 7-14 merkkiä ja @-merkki";
        return false;
    } 
    if(comment==null || comment==""){
        document.getElementById("comment").style.borderColor = "red";
        document.getElementById("feedback2").style.color = "red";
        document.getElementById("feedback2").innerHTML = "Kommenttikenttä on pakollinen. Maksimi 50 merkkiä.";
        return false;
    } else {
        var comments = comment.substring(0, 50);
    }

    alert('Email address:\n' + email + '\n\nComments: ' + comments);
    return true
}


function laskeHinta(){
    var jasenyys = document.getElementById("type").value;
    var vuodet = document.getElementById("years").value;

    var maara;

    if(jasenyys == "basic"){
        maara = 10;
    }else if (jasenyys == "premium"){
        maara = 15;
    } else if (jasenyys == "gold"){
        maara = 20;
    }else if (jasenyys == "platinum"){
        maara = 25;
    }

    var tulos;

    if(vuodet <= 2){
        tulos = maara * vuodet;
    }else if(vuodet > 2 && vuodet < 5){
        maara = maara * 0.8;
        tulos = maara * vuodet;
        document.getElementById("alennus").innerHTML = "Saat 20% alennusta!";
    }else if (vuodet >= 5){
        maara = maara * 0.8;
        tulos = maara * vuodet - 5;
        document.getElementById("alennus").innerHTML = "Saat 20% alennusta + lisäalennuksen $5!";
      
    }


    document.getElementById("cost").value = "$" + tulos;
}


function calculate(){
    var quantityString = document.getElementById("quantity").value;
    var quantity = parseInt(quantityString);

    var priceString = document.getElementById("price").value;
    var price = parseFloat(priceString);

    var taxString = document.getElementById("tax").value;
    var tax = parseFloat(taxString);

    var discountString = document.getElementById("discount").value;
    var discount = parseFloat(discountString);

    var shippingString = document.getElementById("shipping").value; 
    var shipping = parseFloat(shippingString);

    if (isNaN(quantity) || isNaN(price) || isNaN(tax) || isNaN(discount) || isNaN(shipping)) {
        alert('Invalid input. Please enter valid numbers.');
        return;
    }

    if(quantity > 100){
        var discount = discount * 2;
    }

    var tulos = quantity * price * (1 +(tax/100)) - discount + shipping;

    if(tulos < 0){
        alert('Discount is incorrect!')
        return
    }

    document.getElementById("total").value = tulos;
}

function validateForm() {
    var fname = document.forms[testForm]["fname"].value;
    var lname = document.forms[testForm]["lname"].value;
    var email2 = document.forms[testForm]["email2Input"].value;
    var puhnro = document.forms[testForm]["puhnroInput"].value;
    var sms = document.forms[testForm]["smsInput"].value;

    if(fname == null || fname == "" || fname.length < 3) {
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("palaute").style.color = "red";
        document.getElementById("palaute").innerHTML = "Name must be filled out";
        return false;
    }
    if(lname == null || lname == "" || lname.length < 3) {
        document.getElementById("lname").style.borderColor = "red";
        document.getElementById("palaute2").style.color = "red";
        document.getElementById("palaute2").innerHTML = "Name must be filled out";
        return false;
    }
    if(email2==null || email2=="" || email2.length < 6 || email2.length > 25 || email2.indexOf("@") === -1){
        document.getElementById("email2Input").style.borderColor = "red";
        document.getElementById("palaute3").style.color = "red";
        document.getElementById("palaute3").innerHTML = "Sähköpostissa pitää olla 7-25 merkkiä ja @-merkki";
        return false;
    } 
    if(puhnro==null || puhnro==""){
        document.getElementById("puhnroInput").style.borderColor = "red";
        document.getElementById("palaute4").style.color = "red";
        document.getElementById("palaute4").innerHTML = "Must be filled and number cannot contain letters";
        return false;
    } 
    if(sms==null || sms==""){
        document.getElementById("smsInput").style.borderColor = "red";
        document.getElementById("palaute5").style.color = "red";
        document.getElementById("palaute5").innerHTML = "Must be filled and number cannot contain letters";
        return false;
    } 

    return true;
}

document.getElementById('email2').style.display = "none";
document.getElementById('phnro').style.display = "none";
document.getElementById('sms').style.display = "none";

function showFields(){
    
    var valinta = document.getElementById('valikko').value;
    var emailDiv = document.getElementById("email2");
    var phnroDiv = document.getElementById("phnro");
    var smsDiv = document.getElementById("sms");

    if(valinta === "empty"){
        emailDiv.style.display = "none";
        phnroDiv.style.display = "none";
        smsDiv.style.display = "none";
    }else if(valinta === "email2"){
        emailDiv.style.display = "block";
        phnroDiv.style.display = "none";
        smsDiv.style.display = "none";
    }else if(valinta === "phnro"){
        emailDiv.style.display = "none";
        phnroDiv.style.display = "block";
        smsDiv.style.display = "none";
    }else if(valinta === "sms"){
        emailDiv.style.display = "none";
        phnroDiv.style.display = "none";
        smsDiv.style.display = "block";
    }
}

