import { ClerkApp, ClerkCatchBoundary, } from "@clerk/remix";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/styles/global.css";


import { rootAuthLoader } from "@clerk/remix/ssr.server";
// Import ClerkApp
// export const meta: MetaFunction = () => ({
//   charset: "utf-8",
//   title: "New Remix App",
//   viewport: "width=device-width,initial-scale=1",
// });

export const loader: LoaderFunction = (args) => rootAuthLoader(args);
export const CatchBoundary = ClerkCatchBoundary();

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}


function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// Wrap your app in ClerkApp(app)
export default ClerkApp(App);