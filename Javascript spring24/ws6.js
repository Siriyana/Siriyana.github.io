
if(localStorage.getItem("varaukset")==null){
    var varaus = [];
    localStorage.setItem("varaukset", JSON.stringify(varaus));
}

function getData() {
    var varaus = JSON.parse(localStorage.getItem("varaukset")) || [];
    var sessionVaraus = JSON.parse(sessionStorage.getItem("sessionVaraukset")) || [];

    var destination = document.getElementById("destination").value;
    var arrival = document.getElementById("arrival").value;

    var internet = document.getElementById("CheckboxGroup1_0").checked;
    var ac = document.getElementById("CheckboxGroup1_1").checked;
    var minibar = document.getElementById("CheckboxGroup1_2").checked;
    var car = document.getElementById("CheckboxGroup1_3").checked;
    var sauna = document.getElementById("CheckboxGroup1_4").checked;

    // Create a new object
    var varausTiedot = {
        destination: destination,
        arrival: arrival,
        internet: internet,
        ac: ac,
        minibar: minibar,
        car: car,
        sauna: sauna,
    }

    // Save name to list in localStorage
    varaus.push(varausTiedot);
    localStorage.setItem("varaukset", JSON.stringify(varaus));

    // Save name to list in sessionStorage
    sessionVaraus.push(varausTiedot);
    sessionStorage.setItem("sessionVaraukset", JSON.stringify(sessionVaraus));

    loadData();
    onlySession();
}

function loadData(){
    var allVaraukset = localStorage.getItem("varaukset");
    var jsonVaraukset = JSON.parse(allVaraukset);

    var place = document.getElementById("sessiondata");

    if (jsonVaraukset && jsonVaraukset.length > 0) {
        // Näytä taulukon otsikot
        var table = "<table border='1'><tr><th>Nro</th><th>Destination</th><th>Arrival date</th><th>Services</th></tr>";

        for (var i = 0; i < jsonVaraukset.length; i++) {
            table += "<tr><td>" + (i + 1) + "</td><td>" + jsonVaraukset[i].destination + "</td><td>" + jsonVaraukset[i].arrival + "</td><td>" + 
                     "Internet: " + (jsonVaraukset[i].internet ? 'Yes' : 'No') +
                     "<br> AC: " + (jsonVaraukset[i].ac ? 'Yes' : 'No') + 
                     "<br> Minibar: " + (jsonVaraukset[i].minibar ? 'Yes' : 'No') + 
                     "<br> Car: " + (jsonVaraukset[i].car ? 'Yes' : 'No') +
                     "<br> Sauna: " + (jsonVaraukset[i].sauna ? 'Yes' : 'No') + "</td></tr>";
        }

        table += "</table>";
        place.innerHTML = table;
    } else {
        // Piilota taulukko
        place.innerHTML = "";
    }
}

function onlySession() {
    var allVaraukset = sessionStorage.getItem("sessionVaraukset");
    var jsonVaraukset = JSON.parse(allVaraukset) || [];

    var place = document.getElementById("onlySession");

    if (jsonVaraukset.length > 0) {
        // Näytä taulukon otsikot
        var table = "<table border='1'><tr><th>Nro</th><th>Destination</th><th>Arrival date</th><th>Services</th></tr>";

        for (var i = 0; i < jsonVaraukset.length; i++) {
            table += "<tr><td>" + (i + 1) + "</td><td>" + jsonVaraukset[i].destination + "</td><td>" + jsonVaraukset[i].arrival + "</td><td>" + 
                     "Internet: " + (jsonVaraukset[i].internet ? 'Yes' : 'No') +
                     "<br> AC: " + (jsonVaraukset[i].ac ? 'Yes' : 'No') + 
                     "<br> Minibar: " + (jsonVaraukset[i].minibar ? 'Yes' : 'No') + 
                     "<br> Car: " + (jsonVaraukset[i].car ? 'Yes' : 'No') +
                     "<br> Sauna: " + (jsonVaraukset[i].sauna ? 'Yes' : 'No') + "</td></tr>";
        }

        table += "</table>";
        place.innerHTML = table;
    } else {
        // Piilota taulukko
        place.innerHTML = "No data available.";
    }
}