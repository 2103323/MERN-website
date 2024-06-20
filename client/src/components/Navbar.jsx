import "./Navbar.css";
import { useAuth } from "../store/auth";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  console.log("login or not ", isLoggedIn);
  

  return (
    <div className="container">
      <nav>
        <Link to="/" className="title">
          StartupX
        </Link>
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
          {/* <li>
            <NavLink to="/service"> Services </NavLink>
          </li> */}
          <li>
            <NavLink to="/contact"> Contact </NavLink>
          </li>

          {isLoggedIn ? (
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/register"> Register </NavLink>
              </li>
              <li>
                <NavLink to="/login"> Login </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
