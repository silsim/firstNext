
export default function Home({posts}) {
  console.log(posts);
  return (
    <main>
      <h1>Wellcome to My Blog</h1>
      <ul>
        {posts.map((a, i)=>{
          return(
            <li key={a.id}>{a.title}</li>
          )
        })}
      </ul>
    </main>
  );
}

export const getServerSideProps = async()=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
  const posts = await res.json()

  return{
    props: {
      posts
    }
  }
}
