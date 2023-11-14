import React from "react";
import Hero from "./Hero";

export default function Page({ title, items, children }) {
  return (
    <>
      <Hero title={title} items={items} />
      <main className="section">
        <div className="columns is-max-widescreen is-centered">
          <div className="column is-four-fifths content">{children}</div>
        </div>
      </main>
    </>
  );
}
