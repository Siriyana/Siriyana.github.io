const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');
    
    //Animate Links
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });  
    
    //Burger animation
    burger.classList.toggle('toggle');
    
    });

}

navSlide();

var rIndex, 
    table = document.getElementById("table");

//check the empty input
function checkEmptyInput(){
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;
    if(fname === ""){
        alert("First Name Cannot Be Empty");
        isEmpty = true;
    }
    else if(lname === ""){
        alert("Last Name Cannot Be Empty");
        isEmpty = true;
    }
    else if(age === ""){
        alert("Age Cannot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

//add row

function addHtmlTableRow(){
    // get the table by id
    //create a new row and cells
    //get value from input text
    // set the values into row cell´s
    if(!checkEmptyInput()){
    var newRow = table.insertRow(table.rows.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = age;


    // call the function to set the event to the new row
    selectedRowToInput();
    }   
}


// display selected row data into input text
function selectedRowToInput(){
    for(var i=1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function(){
            // get the selected row index
            rIndex = this.rowIndex;
            console.log(rIndex);
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
        };
    }
}

selectedRowToInput();

function editHtmlTableSelectedRow(){
    var fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;

    table.rows[rIndex].cells[0].innerHTML = fname;
    table.rows[rIndex].cells[1].innerHTML = lname;
    table.rows[rIndex].cells[2].innerHTML = age;
}

function removeSelectedRow(){
    table.deleteRow(rIndex);

    // clear input text
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
}

