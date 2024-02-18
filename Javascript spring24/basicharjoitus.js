
function smoothScroll(target,duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top; // Fix typo here
    var startingPosition = window.pageYOffset;
    var distance = targetPosition - startingPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startingPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');

section1.addEventListener('click', function () {
    smoothScroll('.section2', 1000);
});

section2.addEventListener('click', function () {
    smoothScroll('.section1', 1000);
});

smoothScroll('.section1', 1000);

function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    console.log(introPosition);
    var screenPosition = window.innerHeight/2; /* kun jakaa 2 teksti ilmestyy puolessa välissä, jos ilman /2, niin ilmestyy heti kun scrollaa..*/
    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }
}

    window.addEventListener('scroll', scrollAppear);

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth; //gives our original width 

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners

nextButton.addEventListener('click',()=>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});