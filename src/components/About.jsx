// About: shows the blog image and a short bio.
// Receives `image` and `about` as props from App.
// If no image is passed, it falls back to a placeholder image.
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;