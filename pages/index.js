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
      <Link href="/users">Users</Link>
      </div>
      <div>
      <Link href="/posts" legacyBehavior><a>Posts</a></Link>
      </div>
      <div>
      <Link href="/news" legacyBehavior><a>News</a></Link>
      </div>
      <div>
      <Link href="/dashboard" legacyBehavior><a>Dashboard</a></Link>
      </div>
      <div>
      <Link href="/dashboard-swr" legacyBehavior><a>Dashboard SWR</a></Link>
      </div>
      <div>
      <Link href="/event" legacyBehavior><a>Events</a></Link>
      </div>
      <div>
        <h1>This is starting page in next</h1>
      </div>
    </>
  );
}

export default Home;
