import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" >
        <button>Home</button>
      </NavLink>
      <NavLink to="/add">
        <button>Create new</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
