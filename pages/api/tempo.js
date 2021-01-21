//

async function tempo(request, response) {

    const weatherResponse = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Osasco&units=metric&appid=3e40fae3f25784f4776d736951958715");
    const weatherResponseJson = await weatherResponse.json();
    const temperature = weatherResponseJson.main.temp;
    response.json(
        {
            temperature: temperature
        }
    );
}

export default tempo;