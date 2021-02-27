// posts will be populated at build time by getStaticProps()
function Temperatura({ weatherResponseJson }) {
    return (
      <ul>
        {weatherResponseJson.map((temp) => (
          <li>{temp.name}</li>
        ))}
      </ul>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function tempo() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const apiKey = process.env.API_KEY;
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Osasco&units=metric&appid=${apiKey}`);
    const weatherResponseJson = await weatherResponse.json();
    const temperature = weatherResponseJson.main.temp;
    const city = weatherResponseJson.name;
    
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        weatherResponseJson,
      },
    }
  }
  
  export default Temperatura