import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "./NavBar";

export default function Hero({ title, items }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className="hero is-primary">
        <div className="hero-head">
          <NavBar items={items}></NavBar>
        </div>
        <div className="hero-body">
          <h1 className="title">{title}</h1>
        </div>
      </header>
    </>
  );
}
