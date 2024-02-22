window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-desciption');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.locationTimezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=YOUR_API_KEY`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temp } = data.main;
                    const { description, icon } = data.weather[0];

                    // Set DOM Elements from the API
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = data.name;

                    // Set Icons
                    setIcons(icon, document.querySelector('.icon'));

                    // Change temperature to celsius
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent === "F") {
                            temperatureSpan.textContent = "C";
                            temperatureDegree.textContent = temp;
                        } else {
                            temperatureSpan.textContent = "F";
                            temperatureDegree.textContent = (temp * 9) / 5 + 32;
                        }
                    });
                });
        });
    } else {
        h1.textContent = "Hey, this is not working because reasons";
    }

    function setIcons(icon, iconId) {
        const skycons = new skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, skycons[currentIcon]);
    }
});