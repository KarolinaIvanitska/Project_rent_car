import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};

export default Navigation;
