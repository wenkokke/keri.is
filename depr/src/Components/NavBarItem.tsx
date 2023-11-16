import React from "react";

export default function NavBarItem({ title, url, items }) {
  const key = title.toLowerCase();
  if (Array.isArray(items) && items.length > 0) {
    const navbarItems = items.map(NavBarItem);
    return (
      <div className="navbar-item has-dropdown is-hoverable" key={key}>
        <a className="navbar-link" href={url}>
          {title}
        </a>
        <div className="navbar-dropdown">{navbarItems}</div>
      </div>
    );
  }
  return (
    <a className="navbar-item" href={url} key={key}>
      {title}
    </a>
  );
}
