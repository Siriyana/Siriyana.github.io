console.log('Hello world') ;

// GLOBAL MUUTTUJAT ja FUNKTIOIDEN SISÄISET MUUTTUJAT

const life = 100;
const name = "Developer";

var ika = 30 ;
var nimi = "kissa" ;

ika = ika + 1

console.log(ika)
console.log(nimi)

var checkout = true;

var box = null;

// FUNKTIOITA

function logger() {
    console.log(name);
    console.log("Party time");
    console.log("Party time");    
    console.log("Party time");    
    console.log("Party time");    
    console.log("Party time");    
    console.log("Party time");    
    console.log("If you want to copy you press SHIFT+ALT+nuolialaspäin");    
}

logger();

function upperCase(text) {
    const uppercased = text.toUpperCase();
    console.log(uppercased);
}

upperCase(name)

function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(5, 10);

//OLIO JAVASCIPRTISSÄ

const user = {
    name: "edwin",
    age: 24,
    married: false,
    purchases: ["phone", "car", "laptop"],

    sayName: function() {
        console.log(this.name);
    }
};

function apple() {
    console.log("apple");
}


//WINDOW OBJECTS
window.apple();
console.log(this);

//funktiossa on this.name vertaa function sayMyAge() {console.log("My age is ${this"})}, jota kutsuttaisiin 
user.sayName();


const names = ["Ed", "John", "Maria", "Elisa", "Harry"];

for(nimi of names){
    console.log("Hello there ${nimi}");
}

for(nimi of names){
    console.log(nimi);
    if (nimi === "Maria"){
        console.log("Maria is in my list!");
        break;
    }
}

let loading = 0;

while(loading < 100){
    console.log("Website is still loading");

    loading++;
}

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

text.style.color = "red";
text.style.backgroundColor = "darkgrey";
/*text.classList.add("change");*/

changeColor.addEventListener("click", function() {
    text.classList.add("change");
});

const userList = document.querySelector(".name_list");
const listInput = document.querySelector(".list_input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function() {
    // Create an li
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    console.log(listInput.value);
    // Add the input value inside that li
    newLi.appendChild(liContent);
    // Attaching the li to the user list
    userList.appendChild(newLi);
});


var table = document.getElementById("table"),rIndex;

for(var i = 1; i < table.rows.length; i++){
    table.rows[i].onclick = function(){
        rIndex = this.rowIndex;

        document.getElementById("fname").value = this.cells[1].innerHTML;
        document.getElementById("lname").value = this.cells[2].innerHTML;
        document.getElementById("country").value = this.cells[3].innerHTML;
        document.getElementById("mNumber").value = this.cells[4].innerHTML;
    };
}

function editRow(){
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("fname").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("lname").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("country").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("mNumber").value;
}

function editTableDisplay(){
    document.querySelector('.editTable').setAttribute('style', 'display: block;')
}