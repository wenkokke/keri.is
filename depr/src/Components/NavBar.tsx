import React from "react";
import NavBarItem from "./NavBarItem";

function navbarToggle(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  const navbarBurger = e.currentTarget;
  const navbarMenu = document.getElementById(navbarBurger.dataset.target!)!;
  navbarBurger.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");
}

export default function NavBar({ items }) {
  const navbarItems = items.map(NavBarItem);
  return (
    <nav
      className="navbar has-ratio"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          onClick={navbarToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">{navbarItems}</div>
      </div>
    </nav>
  );
}
