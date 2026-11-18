import Article from "./Article";

// ArticleList: receives the `posts` array from App and
// renders one Article for each post inside <main>.
// `key` helps React track each item in the list.
function ArticleList({ posts = [] }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;