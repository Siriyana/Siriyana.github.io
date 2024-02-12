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