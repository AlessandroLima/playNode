async function tempo(request, response) {
    
    const apiKey = process.env.API_KEY;
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Osasco&units=metric&appid=${apiKey}`);
    const weatherResponseJson = await weatherResponse.json();
    const temperature = weatherResponseJson.main.temp;
    const city = weatherResponseJson.name;
    const temp = new Date();
    
    response.setHeader('Cache-Control', 's-maxage=10', 'stale-while-revalidate');
    response.json(
        {
            temperature: temperature,
            city: city,
            hour: temp
        }
    );

    return {
        results: {
            weatherResponseJson,
        },
      }
}

function RenderPageTempo({ weatherResponseJson }) {
    return (
      <ul>
        {weatherResponseJson.map((result) => (
          <li> A temperatura em {result.city} é {result.temperature} graus!</li>
        ))}
      </ul>
    )
  }
  
 // export default RenderPageTempo;



export default tempo;