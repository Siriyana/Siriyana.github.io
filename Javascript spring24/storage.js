if(localStorage.getItem("namelist")==null){
    var names = [];
    localStorage.setItem("nameList", JSON.stringify(names));
}

function saveData(){
    names = JSON.parse(localStorage.getItem("namelist"));
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;

    //Create a new object
    var fullName = {
        fname: firstName,
        lname: lastName,
    }

    //Save name to list
    names.push(fullName);

    //Save list to local storage
    localStorage.setItem("namelist", JSON.stringify(names));
    showData();
}

function showData(){
    var allNames = localStorage.getItem("namelist");
    var jsonNames = JSON.parse(allNames);

    var table = "<table border='1'><tr><th>Nro</th><th>First Name</th><th>Last Name</th></tr>";

    for(var i = 0; i < jsonNames.length; i++){
        table += "<tr><td>"+(i+1)+"</td><td>"+jsonNames[i].fname+"</td><td>"+jsonNames[i].lname+"</td></tr>";
    }
    var place = document.getElementById("storage_place");
    place.innerHTML = table;
}

function deleteData(){
    var delNum = document.getElementById("delNumber").value;
    var myNames = localStorage.getItem("namelist");
    var jsonNames = JSON.parse(myNames);

    jsonNames.splice(delNum, 1);
    localStorage.setItem("namelist", JSON.stringify(jsonNames));
    showData();
}