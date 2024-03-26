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






document.getElementById("hae").addEventListener('click', function () {
    fetch('https://api.github.com/users/JariKovis/repos')
    .then((response) => {
        return response.text();
    })
    .then((myContent) => {
        document.querySelector('.par').innerHTML = myContent;
        document.querySelector('.par').classList.add('box');
    });
});

document.getElementById("haeDemo").addEventListener('click', function () {
    var demo = new XMLHttpRequest();
    demo.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    demo.open("GET", "books.xml", true);
    demo.send();
});


function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    document.getElementById("demo").innerHTML =
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
}



document.getElementById('myButton').addEventListener('click', function () {
    console.log('Button clicked');
    getUserData(1, handleUserData);
});

const divi = document.getElementById('munDiv')

function getUserData(userId, callback) {
    setTimeout(() => {
        const userData = {
            id: userId,
            username: `user${userId}`,
            email: `user${userId}@example.com`
        };

        callback(null, userData);
    }, 1000);
}

function handleUserData(error, data) {
    if (error) {
        console.log('Error fetching user data: ', error);
    } else {
        console.log('Fetched user data: ', data);
        divi.innerHTML = data.id + ' ' + data.username + ' ' + data.email
    }
}


document.getElementById('myButton2').addEventListener('click', function () {
    console.log('Button2 clicked');
    myFunction2()
});

const divi2 = document.getElementById('munDiv2')

const myPromise = new Promise((resolve, reject) => {
    const isSuccess = true;

    setTimeout(() => {
        if (isSuccess) {
            resolve('Promise resolved successfully');
        } else {
            reject('Promise rejected with an error');
        }
    }, 1000);

});

const myFunction2 = () => {
    myPromise
        .then((result) => {
            console.log('Success:', result);
            divi2.innerHTML = result
        })
        .catch((error) => {
            divi2.innerHTML = error
        });
}
