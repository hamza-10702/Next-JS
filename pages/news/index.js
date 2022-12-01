import Link from "next/link";
const NewsArticles = ({ articles }) => {
  return (
    <>
      <div>NewsArticles</div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <Link href={`/news/${article.category}`}>
              <h2>
                {article.id} {article.title} | {article.category}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default NewsArticles;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
