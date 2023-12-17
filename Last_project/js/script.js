fetch("https://restcountries.com/v3.1/name/Sweden?fullText=true")
            .then(data => data.json())
            .then(data => {
                console.log(data);
                test(data[0]); 
            });
        function test(data) {
            if (data.capital) {
                document.getElementById("capital").innerHTML = "Capital : " + data.capital;
            }
            if (data.currencies.SEK.name && data.currencies.SEK.symbol) {
                document.getElementById("currencies").innerHTML = "Currency : " + data.currencies.SEK.name + ", " + data.currencies.SEK.symbol;
            }
            if (data.borders) {
                document.getElementById("borders").innerHTML = "Neighboring Countries : " + data.borders;
            }
            
            if (data.timezones) {
                document.getElementById("timezones").innerHTML = "Timezone : " + data.timezones;
            }
            if (data.continents) {
                document.getElementById("continents").innerHTML = "Continent : " + data.continents;
            }
            if (data.languages.swe) {
                document.getElementById("languages").innerHTML = "Language : " + data.languages.swe;
            }
            if (data.area) {
                document.getElementById("area").innerHTML = "Area : " + data.area + " km2";
            }

            if (data.population) {
                document.getElementById("population").innerHTML = "Population : " + data.population + " Miljoner";
            }
        }