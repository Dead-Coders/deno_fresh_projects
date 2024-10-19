// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_HasNavbar_layout from "./routes/(HasNavbar)/_layout.tsx";
import * as $_HasNavbar_apps from "./routes/(HasNavbar)/apps.tsx";
import * as $_HasNavbar_blog_1 from "./routes/(HasNavbar)/blog/1.tsx";
import * as $_HasNavbar_blog_index from "./routes/(HasNavbar)/blog/index.tsx";
import * as $_HasNavbar_index from "./routes/(HasNavbar)/index.tsx";
import * as $_HasNavbar_portfolio from "./routes/(HasNavbar)/portfolio.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $apps_ttt from "./routes/apps/ttt.tsx";
import * as $Clock from "./islands/Clock.tsx";
import * as $Grid from "./islands/Grid.tsx";
import * as $Iframe from "./islands/Iframe.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(HasNavbar)/_layout.tsx": $_HasNavbar_layout,
    "./routes/(HasNavbar)/apps.tsx": $_HasNavbar_apps,
    "./routes/(HasNavbar)/blog/1.tsx": $_HasNavbar_blog_1,
    "./routes/(HasNavbar)/blog/index.tsx": $_HasNavbar_blog_index,
    "./routes/(HasNavbar)/index.tsx": $_HasNavbar_index,
    "./routes/(HasNavbar)/portfolio.tsx": $_HasNavbar_portfolio,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/apps/ttt.tsx": $apps_ttt,
  },
  islands: {
    "./islands/Clock.tsx": $Clock,
    "./islands/Grid.tsx": $Grid,
    "./islands/Iframe.tsx": $Iframe,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
