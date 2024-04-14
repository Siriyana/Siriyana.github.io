// variables for buttons for Dynamic Events
const name_json_btn = document.getElementById('name_json');
const all_json_btn = document.getElementById('all_json');
const load_raw_btn = document.getElementById('load_raw');
const load_parse_raw_btn = document.getElementById('load_parse_raw');
//const weatherdata_btn = document.getElementById('weatherLoad');//
const search_btn = document.getElementById('search');

//Dynamic events for buttons
name_json_btn.addEventListener('click', jsonNames);
all_json_btn.addEventListener('click', jsonAllData);
load_raw_btn.addEventListener('click', loadRawData);
load_parse_raw_btn.addEventListener('click', parseRawData);
//weatherdata_btn.addEventListener('click', weatherData);//
search_btn.addEventListener('click', findLocation);


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
            document.getElementById("jsondata").innerHTML += "<br>Tulostus sulkeineen kaikkineen: <br>" + avain + ": " + JSON.stringify(arvo) + "<br><br><br>"; //tulostaa kaikki tiedot, mutta myös sulkeet yms

            //Jos saisi tulostettua vain tekstit
            tulostus = "Tulostus ilman sulkeita ja aseteltuna: <br> <u><b>" + avain + "</u></b>" + ": <br>"; //alkuun luokan, eli employees tallennus

            for (var i = 0; i < arvo.length; i++) {
                console.log(arvo[i]);
                for (var avain2 in arvo[i]) {
                    var arvo2 = arvo[i][avain2];
                    tulostus += "<b>" + avain2 + "</b>" + ": " + arvo2 + " ";
                }
                tulostus += "<br>";
                
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
                var txt = "<table border='1'><tr><th>Movie</th><th>Poster</th><th>IMDB nro</th></tr>";
    
                if (jsData.Search && jsData.Search.length > 0){
    
                    for (var i=0; i < jsData.Search.length; i++){
                        txt += "<tr><td>" + jsData.Search[i].Title + " (" + jsData.Search[i].Year + ")" + "</td><td><img src='" +
                        jsData.Search[i].Poster + "'</td><td>&nbsp;&nbsp;" + jsData.Search[i].imdbID + "&nbsp;&nbsp;</tr>";
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


function weatherData(location) {
    var apiKey = "c573ba4b5309b920542bda0bed7d2d21"

    var location = location;

    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + location.lat + "&lon=" + location.lon +"&appid=" + apiKey;

    var getweather = new XMLHttpRequest();
    getweather.open("GET", weatherURL, true);

    getweather.send()

    getweather.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var weatherJson = getweather.responseText;
            console.log(weatherJson);
            var weatherInfo = JSON.parse(weatherJson);

            var saaTiedot = {
                main: weatherInfo.weather[0].main,
                temperature: weatherInfo.main.temp,
                clouds: weatherInfo.clouds.all,
                humidity: weatherInfo.main.humidity,
                place: weatherInfo.name
            };

            var celsius = (saaTiedot.temperature - 273.15).toFixed(1);

            var tulostus = "Location: " + saaTiedot.place + "<br>Weather: " + saaTiedot.main + "<br>Temperature: " + celsius + "°C<br>Cloudy: " + saaTiedot.clouds + "%<br>Humidity: " + saaTiedot.humidity + "%<br>";

            document.getElementById("weatherdata").innerHTML = tulostus;

        }
    }
}

function locationWeather() {

    var choice = document.getElementById('city').value;
    if (choice == "Helsinki") {
        var location = {lat: 60.192059, lon: 24.945831};
    } else if (choice == "Stockholm") {
        var location = {lat: 59.33258, lon: 18.0649};
    } else if (choice == "Rome") {
        var location = {lat: 41.9028, lon: 12.4964};
    } else if (choice == "New York") {
        var location = {lat: 40.71277530, lon: -74.00597280};
    }

    weatherData(location);
}



function findLocation() {

    var city_name = document.getElementById('citysearch').value;

    var apiKey = "c573ba4b5309b920542bda0bed7d2d21";

    var locationURL = "https://api.openweathermap.org/geo/1.0/direct?q={" + city_name + "}&appid=" + apiKey;
    var getLocation = new XMLHttpRequest();
    getLocation.open("GET", locationURL, true);

    getLocation.send();

    getLocation.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var locationJson = getLocation.responseText;
            var locationData = JSON.parse(locationJson);
            console.log(locationData);

            var location = {
                lat: locationData[0].lat,
                lon: locationData[0].lon
            };

            console.log(location);
            weatherData(location);
        }
    }


}