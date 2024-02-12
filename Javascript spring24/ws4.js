function changeHeading() {
    var h1s = document.getElementsByTagName("h1");
    for(var i=0; i<h1s.length; i++){
        h1s[i].innerHTML = "Modified Heading!";
        h1s[i].style.color = "green";
    }
}

function secondButton() {
    var muutos = document.getElementById("secondButton");
    muutos.style.fontSize = "40px";
    muutos.style.backgroundColor = "#F0FFFF";
    muutos.style.fontFamily = "Helvetica";
    muutos.style.fontStyle = "italic";
    muutos.style.color = "indigo";
    muutos.style.textShadow = "2px 2px 2px black";
}

function lisaaTeksti() {
    var Teksti = document.getElementById("siirrettavaTeksti");
    var logo = document.createElement("img");
    logo.src = "img/Valkoinen-kissa.png";
    logo.alt = "Logo";
    logo.style.width = "50px";
    logo.style.height = "auto";
    Teksti.appendChild(logo);

    var kohde = document.querySelector("p:nth-child(4)");
    kohde.innerHTML += Teksti.innerHTML;

    var body = document.body;
    var tausta = "img/Valkoinen-kissa.png";
    body.style.backgroundImage = "url('" + tausta + "')";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundColor = "yellow";

}

function hide() {
    var x = document.getElementById("me");
    x.style.display = "none";
}

function show() {
    var x = document.getElementById("me");
    x.style.display = "block";
}

function surprise() {
    var surprises = document.querySelectorAll(".surprise");
    surprises.forEach(function (element) {
        element.style.fontSize = "20px";
    });
}

    
var kuvaJoukko = {
    "BMW": "img/BMW.jpg",
    "Audi": "img/Audi.jpg",
    "Mercedes": "img/Mercedes.png",
    "Volvo": "img/Volvo.jpg"
    };

function kuvanVaihto(kuvaJoukko) {
    var kuva = document.getElementById("carimage");
    kuva.src = kuvaJoukko;
    }
    
function valinta() {
    var value = document.getElementById("mySelect").value;
    var kuvavalinta = kuvaJoukko[value];
    kuvanVaihto(kuvavalinta);

    alert("Valitsit " + value);

}

function reunaKuvaan() {
    var kuva = document.getElementById("carimage");
    kuva.style.borderStyle = "solid";
    kuva.style.borderColor = "darkgreen";
    kuva.style.borderWidth = "5px";
}

function ilmanReunaa() {
    var kuva = document.getElementById("carimage");
    kuva.style.border = "none";
}

function changePosition() {
    var div = document.getElementById("carimage");
    var currentPosition = parseInt(div.style.top) || 0;
    div.style.top = currentPosition + 500 + "px";
    div.style.left = currentPosition + 200 + "px";
    
/*    div.style.position = "relative";
    div.style.left = "200px";
    div.style.top = "500px"; 
    Tämä toimii myös */ 
}

var suunta = 1;
var kulkuleveys = 600;
var intervalId;

function liikkuu() {
    var div = document.getElementById("carimage");
    var leftVal = parseInt(div.style.left);

    if (leftVal + 1 * suunta > kulkuleveys || leftVal + 1 * suunta < 0) {
        suunta *= -1;
    }

    div.style.left = (leftVal + 1 * suunta) + "px";
}

function doMove() {
    intervalId = setInterval(liikkuu, 150);
}


var opacityValue = 1;  // Alkuperäinen opacity
var intervalId;

function fadeOut() {
    var kuva = document.getElementById("carimage");
    intervalId = setInterval(function () {
        if (opacityValue > 0) {
            opacityValue -= 0.01;  // Voit säätää tätä arvoa haluamasi nopeuteen
            kuva.style.opacity = opacityValue.toFixed(2);
        } else {
            clearInterval(intervalId);  // Pysäytä animaatio, kun opacity on nolla
        }
    }, 100);  // Päivitä opacity-arvoa joka 10 millisekunti
}

function remove() {
    var poistettavaKuva = document.getElementById("carimage");
    poistettavaKuva.parentNode.removeChild(poistettavaKuva);

}


function insertRows() {
    var table = document.getElementById("data");
    var rivi = table.insertRow(-1);
    var solu1 = rivi.insertCell(0);
    var solu2 = rivi.insertCell(1);
    var solu3 = rivi.insertCell(2);

    solu1.innerHTML = document.getElementById("textfield").value;
    solu2.innerHTML = document.getElementById("textfield2").value;
    solu3.innerHTML = document.getElementById("textfield3").value;
}

function replaceList() {
    var lis = document.getElementsByTagName("li");
    for(var i=0; i<lis.length; i++){
        var strong = document.createElement("strong");
        strong.innerHTML = lis[i].innerHTML;
        lis[i].parentNode.replaceChild(strong, lis[i]);
    }
    
}

replaceList()