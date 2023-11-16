import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page from "./Components/Page";

const items = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
];

function Main() {
  return (
    <HelmetProvider>
      <div className="container is-max-widescreen">
        <Page title="keri.is" items={items}>
          <p>hello</p>
        </Page>
      </div>
    </HelmetProvider>
  );
}

function Improv() {
  return (
    <HelmetProvider>
      <div className="container is-max-widescreen">
        <Page title="keri.is" items={items}>
          <p>improv</p>
        </Page>
      </div>
    </HelmetProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/improvising",
    element: <Improv />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
