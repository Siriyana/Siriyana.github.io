function checkFields(){
    var email = document.forms[0].email.value;
    var comment = document.forms[0].comment.value;
    
    if(email==null || email=="" || email.length < 6 || email.length > 15 || email.indexOf("@") === -1){
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").innerHTML = "<b>*Fill in properly</b>"
        alert('Pieleen meni. Sähköpostissa pitää olla 7-14 merkkiä ja @-merkki');
        return false;
    } else {
        alert('Email address: ' + email);
    }

    if(comment==null || comment=="" || comment.length > 50){
        document.getElementById("comment").style.borderColor = "red";
        document.getElementById("comment").innerHTML = "<b>*Fill in properly</b>"
        alert('Pieleen meni... Kommenttikenttä on pakollinen. Maksimi 50 merkkiä.')
        return false;
    } else {
        alert('Comments: ' + comment)
    }

    return true
}
