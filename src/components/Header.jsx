// Header: displays the blog's name.
// Receives `name` as a prop from App.
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;