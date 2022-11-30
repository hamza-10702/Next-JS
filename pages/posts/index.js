import Link from "next/link";
function PostList(props) {
  return (
    <>
      <h1>Post list</h1>
      {props.posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} passHref>
              <h5>
                {post.id}). {post.title}
              </h5>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();

  return {
    props: {
      posts: data
    },
  };
}
