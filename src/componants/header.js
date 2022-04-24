function Header({ title }) {
  return (
    // <header className="App-header">
    <h1>
      {title}
    </h1>
    // </header>
  );
}

Header.defaultProps = {
  title: "Default List",
};

export default Header;
