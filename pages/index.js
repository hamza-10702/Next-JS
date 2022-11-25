import Link from "next/link";
function Home() {
  return (
    <>
      <div>
      <Link href="/blog">Blog</Link>
      </div>
      <div>
      <Link href="/product">Product</Link>
      </div>
      <div>
        <h1>This is starting page in next</h1>
      </div>
    </>
  );
}

export default Home;
