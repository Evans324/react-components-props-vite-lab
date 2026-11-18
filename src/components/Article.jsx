// Article: renders one blog post summary.
// Receives title, date, preview and minutes as props from ArticleList.
// If no date is passed, it falls back to a default date.
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;