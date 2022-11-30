import { useRouter } from "next/router";
function Post(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h5>
        {props.post.id}). {props.post.title}
      </h5>
      <p>{props.post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // let data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: { postId: `${post.id}` },
  //   };
  // });
  // return {
  //   paths,
  //   fallback: true,
  // };

  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
      { params: { postId: "4" } },
      { params: { postId: "5" } },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  let data = await response.json();

  if (!data.id) {
    return {
      notFound: true
    }
  }
  
  return {
    props: {
      post: data,
    },
  };
}
