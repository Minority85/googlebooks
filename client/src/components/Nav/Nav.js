import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-secondary">
      <a className="navbar-brand" href="/">
        <img src="./images/gbooks.png" alt="Google Books"></img>
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;