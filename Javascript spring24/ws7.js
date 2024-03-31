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
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.w3schools.com/xml/simple.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //find foods
            document.getElementById("foods").innerHTML = xmlhttp.responseText;

        }
    }
}




function loadAndParseXML() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            var table = "<table border='1'>";
            table += "<tr><th>Name</th><th>Price</th></tr>";

            var x = xmlDoc.getElementsByTagName("food");

            for(var i=0; i < x.length; i++){
                table += "<tr><td>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue 
                + "</td><td>" + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue 
                + "</td></tr>";
            }
            table += "</table>";
            document.getElementById("tabledata").innerHTML = table;
        }
    }

    xmlhttp.open("GET", "https://www.w3schools.com/xml/simple.xml", true);
    xmlhttp.send();
}



function loadAndParseNews(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            var list = "<ol>";

            var x = xmlDoc.getElementsByTagName("item");

            for(var i=0; i < x.length; i++){
                var link = x[i].getElementsByTagName("link")[0].textContent;
                var title = x[i].getElementsByTagName("title")[0].textContent;
                list += "<li>" + "<a href='" + link + "'>" + title + "</a></li>";
            }
            list += "</ol>";
            document.getElementById("newsfeed").innerHTML = list;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}