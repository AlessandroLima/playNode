// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li>{post.name}</li>
        ))}
      </ul>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const apiKey = process.env.API_KEY;
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Osasco&units=metric&appid=${apiKey}`);
    const posts = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
  
  export default Blog