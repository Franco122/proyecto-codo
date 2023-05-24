const url = 'https://goweather.herokuapp.com/weather/{buenos aires}';

fetch(url)
.then(response => response.json())
.then(data => {
    console.log("temperatura en bs as" , data.temperature)

})

