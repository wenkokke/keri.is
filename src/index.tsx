import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";
import Page from "./Page";

const root = createRoot(document.getElementById("root")!);

const items = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
];

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="container is-max-widescreen">
        <Page title="keri.is" items={items}>
          <p>hello</p>
        </Page>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
