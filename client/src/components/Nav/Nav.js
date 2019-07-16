import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark hfix">
      <a className="navbar-brand" href="/">
        <img src="./images/gbooks.png" alt="Google Books"></img>
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/search"}>Search <span className="sr-only">(current)</span></Link> 
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saved">Save</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;