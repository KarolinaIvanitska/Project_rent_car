import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <Outlet />
    </div>
  );
};

export default Navigation;
