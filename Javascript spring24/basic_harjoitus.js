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