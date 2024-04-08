import "./index.css";
const Navbar = () => {
  const name = "veera";

  return (
    <div className="navbar">
      <h1 className="name">Hello, {name}</h1>
      <p className="greet">Welcome to Data visualizer</p>
    </div>
  );
};

export default Navbar;
