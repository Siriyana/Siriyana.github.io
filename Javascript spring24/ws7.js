function parseData() {
    var quotesElements = document.getElementsByTagName("quotes");

    // Loop through each quotes element
    for (var i = 0; i < quotesElements.length; i++) {
        // Hae quote- ja author-elementit
        var quoteElement = quotesElements[i].querySelector("quote");
        var authorElement = quotesElements[i].querySelector("author");

        // Hae quote- ja author-tekstit
        var quote = quoteElement.textContent.trim();
        var author = authorElement.textContent.trim();

        document.getElementById("dataHere").innerHTML += quote + "<br> - " + author + " - <br><br>";
    }
}



function loadXMLFile() {
    // Create AJAX object
    var xmlhttp = new XMLHttpRequest();

    // Specify the data / url to be fetched
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // find myDiv and insert results there
            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
    };

    xmlhttp.open("GET", "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true);
    xmlhttp.send();
}
