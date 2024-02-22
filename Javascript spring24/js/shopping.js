function checkFields(){
    var email = document.forms[0].email.value;
    var comment = document.forms[0].comment.value;
    
    if(email==null || email=="" || email.length < 6 || email.length > 15 || email.indexOf("@") === -1){
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").innerHTML = "<b>*Fill in properly</b>"
        alert('Pieleen meni. Sähköpostissa pitää olla 7-14 merkkiä ja @-merkki');
        return false;
    } 
    if(comment==null || comment=="" || comment.length > 50){
        document.getElementById("comment").style.borderColor = "red";
        document.getElementById("comment").innerHTML = "<b>*Fill in properly</b>"
        alert('Pieleen meni... Kommenttikenttä on pakollinen. Maksimi 50 merkkiä.')
        return false;
    } 

    alert('Email address: ' + email);
    alert('Comments: ' + comment)
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
        alert("You get a 20% discount, because you have chosen membership for more than two year!");
    }else if (vuodet >= 5){
        maara = maara * 0.8;
        tulos = maara * vuodet - 5;
        alert("You get a 20% discount + $5 discount, because you have chosen membership for five year or more! :)");
      
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

    var tulos = (quantity * price - discount + shipping) * (1 -(tax/100));

    if(tulos < 0){
        alert('Discount is incorrect!')
        return
    }

    document.getElementById("total").value = tulos;
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

function checkFields2(){
    var email = document.forms[0].email2.value;
    var comment = document.forms[0].comment.value;
    
    if(email==null || email=="" || email.length < 6 || email.length > 15 || email.indexOf("@") === -1){
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").innerHTML = "<b>*Fill in properly</b>"
        alert('Pieleen meni. Sähköpostissa pitää olla 7-14 merkkiä ja @-merkki');
        return false;
    } 
    if(comment==null || comment=="" || comment.length > 50){
        document.getElementById("comment").style.borderColor = "red";
        document.getElementById("comment").innerHTML = "<b>*Fill in properly</b>"
        alert('Pieleen meni... Kommenttikenttä on pakollinen. Maksimi 50 merkkiä.')
        return false;
    } 

    alert('Email address: ' + email);
    alert('Comments: ' + comment)
    return true
}