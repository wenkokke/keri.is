import React from "react";
import Page from "./Page";

export default function App() {
  const items = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
  ];
  return (
    <div className="container is-max-widescreen">
      <Page title="keri.is" items={items}>
        <p>hello</p>
      </Page>
    </div>
  );
}
