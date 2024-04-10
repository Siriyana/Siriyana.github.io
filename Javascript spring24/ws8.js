// variables for buttons for Dynamic Events
const name_json_btn = document.getElementById('name_json');
const all_json_btn = document.getElementById('all_json');
const load_raw_btn = document.getElementById('load_raw');
const load_parse_raw_btn = document.getElementById('load_parse_raw');
const weatherdata_btn = document.getElementById('weatherLoad');

//Dynamic events for buttons
name_json_btn.addEventListener('click', jsonNames);
all_json_btn.addEventListener('click', jsonAllData);
load_raw_btn.addEventListener('click', loadRawData);
load_parse_raw_btn.addEventListener('click', parseRawData);
weatherdata_btn.addEventListener('click', weatherData);

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


function jsonNames() {
    var employees = JSON.parse(text).employees;

    //Loop through employees
    for (var i = 0; i < employees.length; i++) {
        var etunimi = employees[i].firstName;
        var sukunimi = employees[i].lastName;

        document.getElementById("jsondata").innerHTML += etunimi + " " + sukunimi + "<br>";
    }

}


function jsonAllData() {
    var kaikki = JSON.parse(text);

    console.log(JSON.stringify(kaikki, null, "  "));

    for (var avain in kaikki) {
        if (kaikki.hasOwnProperty(avain)) {
            var arvo = kaikki[avain];
            document.getElementById("jsondata").innerHTML += "<br>" + avain + ": " + JSON.stringify(arvo) + "<br><br><br>"; //tulostaa kaikki tiedot, mutta myös sulkeet yms

            //Jos saisi tulostettua vain tekstit
            tulostus = "<u><b>" + avain + "</u></b>" + ": <br>"; //alkuun luokan, eli employees tallennus

            for (var i = 0; i < arvo.length; i++) {
                console.log(arvo[i]);
                for (var avain2 in arvo[i]) {
                    var arvo2 = arvo[i][avain2];
                    tulostus += "<b>" + avain2 + "</b>" + ": " + arvo2 + " ";
                }
                tulostus += "<br><br>";
                
            }
            }
            document.getElementById("jsondata").innerHTML += tulostus;
        } 
    }




function loadRawData() {
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
            document.getElementById("rawdata").innerHTML = jsonDoc;
        }
    }
}




function parseRawData() {
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
                var txt = "<table border='1'><tr><th>Movie</th><th>Poster</th></tr>";
    
                if (jsData.Search && jsData.Search.length > 0){
    
                    for (var i=0; i < jsData.Search.length; i++){
                        txt += "<tr><td>" + jsData.Search[i].Title + " (" + jsData.Search[i].Year + ")" + "<br><br> IMDB nro: " + jsData.Search[i].imdbID + "</td><td><img src='" +
                        jsData.Search[i].Poster + "'</td></tr>";
                    }
                }else {
                    txt = "<tr><td colspan='2'>No results found.</td></tr>";
                }
    
                txt += "</table>";
                
                //show the contents in the myDiv element
                document.getElementById("rawdata").innerHTML = txt;
    
            }
        }

}


function weatherData() {
    var apiKey = "c573ba4b5309b920542bda0bed7d2d21"

    //var locationURL = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=" + apiKey;
    //var getLocation = new XMLHttpRequest();
    //getLocation.open("GET", getLocation, true)
    var helsinki = {lat: 60.192059, lon: 24.945831}

    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + helsinki.lat + "&lon=" + helsinki.lon +"&appid=" + apiKey;

    var getweather = new XMLHttpRequest();
    getweather.open("GET", weatherURL, true);

    getweather.send()

    getweather.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var weatherDatas = getweather.responseText;
            console.log(weatherDatas);

            document.getElementById("weatherdata").innerHTML = weatherDatas;
        }
    };
}