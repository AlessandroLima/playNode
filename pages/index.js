function Home({tempo}) {
    return <div>Teste de Página</div>
}

export default Home

function Blog({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    )
  }
  
  export default Blog