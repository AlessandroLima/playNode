//

async function tempo(request, response) {
    
    const apiKey = process.env.API_KEY;
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Osasco&units=metric&appid=${apiKey}`);
    const weatherResponseJson = await weatherResponse.json();
    const temperature = weatherResponseJson.main.temp;
    const city = weatherResponseJson.name;
    response.json(
        {
            temperature: temperature,
            city: city
        }
    );
}

export default tempo;