function loadJSONfile() {
    //Create a new XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();

    //spesify the data/url to be fetched using the GET method
    xmlhttp.open("GET", "https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750", true);

    //Send the request
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //take response and parse it to JSON
            var jsonDoc = xmlhttp.responseText;
            var jsData = JSON.parse(jsonDoc);

            // Display the JSON data in the table
            var txt = "<table border='1'>";

            if (jsData.Search && jsData.Search.length > 0){

                for (var i=0; i < jsData.Search.length; i++){
                    txt += "<tr><td>" + jsData.Search[i].Title + "</td><td><img src='" +
                    jsData.Search[i].Poster + "'</td></tr>";
                }
            }else {
                txt = "<tr><td colspan='2'>No results found.</td></tr>";
            }

            txt += "</table>";
            
            //show the contents in the myDiv element
            document.getElementById("myDiv").innerHTML = txt;

        }
    }

}

function loadXMLcd(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            var table = "<table border='1'>";
            table += "<tr><th>Artist</th><th>Title</th></tr>";

            var x = xmlDoc.getElementsByTagName("CD");

            for(var i=0; i < x.length; i++){
                table += "<tr><td>" + x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue 
                + "</td><td>" + x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue 
                + "</td></tr>";
            }
            table += "</table>";
            document.getElementById("myDiv").innerHTML = table;
        }
    }

    xmlhttp.open("GET", "https://www.w3schools.com/xml/cd_catalog.xml", true);
    xmlhttp.send();
}