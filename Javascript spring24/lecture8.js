const nappi = document.getElementById('nappi');
        const asiakaslista = document.getElementById('asiakkaat');

        nappi.addEventListener('click', async function () {
            const asiakkaat = await haetiedot();
            tulostaasiakkaat(asiakkaat);
        });

        async function haetiedot() {
            try {
                // Voit käyttää XML-tietoa tässä
                const xmlData = document.getElementById('xmlData').textContent;
                const parser = new DOMParser();
                const xmlDocument = parser.parseFromString(xmlData, 'text/xml');
                // Käsittele XML-dokumenttia täällä, esimerkiksi:
                const asiakkaat = xmlDocument.querySelectorAll('customer');
                console.log(asiakkaat);
                return asiakkaat;
            } catch (error) {
                console.log(error);
            }
        }

        function tulostaasiakkaat(asiakkaat) {
            let txt = '<table><tbody><tr><td><strong>Nimi</strong></td><td><strong>Puhelin</strong></td><td><strong>Email</strong></td><td><strong>Kaupunki</strong></td></tr>';
            for (let i = 0; i < asiakkaat.length; i++) {
                const nimi = asiakkaat[i].querySelector('name').textContent;
                const puhelin = asiakkaat[i].querySelector('phone').textContent;
                const email = asiakkaat[i].querySelector('email').textContent;
                let city = '';
                const address = asiakkaat[i].querySelector('address');
                if (address.hasChildNodes()) {
                    const street = address.querySelector('street').textContent;
                    city = address.querySelector('city').textContent;
                    const state = address.querySelector('state').textContent;
                    console.log(street, city, state);
                }
                txt += `<tr><td>${nimi}</td><td>${puhelin}</td><td>${email}</td><td>${city}</td><td></tr>`;
            }
            txt += '</tbody></table>';
            asiakaslista.innerHTML = txt;
        }



//lisätään eventlistener, joka kuuntelee kun sivu on latautunut
document.addEventListener('DOMContentLoaded', () => {
    //haetaan elementti, jonka id on Quotes
    const quoteContainer = document.getElementById('Quotes');
    //määritellään url-osoite, josta haetaan dataa
    const url = "https://dummyjson.com/quotes"
    //haetaan dataa url:sta fetch-metodilla, oka palauttaa promisen ja käsitellään se
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //kutsutaan displauCustomerInfo-funktiota, joka käsittelee datan ja tulostaa sen sivulle
            displayCustomerInfo(data);

        })
        // jos tulee virhe, tulostetaan se konsoliin
        .catch(error => {
            console.error('Error fetcing customer data:', error);
        });
    //määritellään displayCustomerInfo-funktio, joka käsittelee data ja tulostaa sen sivulle
    function displayCustomerInfo(quoteData) {
        //käydään läpi quoteData-objektin quotes-taulukko ja tulostetaan jokainen quote ja sen author
        console.log(quoteData);
        for(let i = 0; i < quoteData.quotes.length; i++) {
            const id = quoteData.quotes[i].author;
            const quote = quoteData.quotes[i].quote;
            // luodaan div-elementti, joka sisältää quote- ja id-tiedot ja listään se quoteContainer-elementtiin
            const quoteElement = document.createElement('div');
            quoteElement.innerHTML = `<h2> ${quote} </h2> <p> ${id} </p><hr>`;
            quoteContainer.appendChild(quoteElement);
        };

    }
});