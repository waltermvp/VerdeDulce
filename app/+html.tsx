import { ScrollViewStyleReset } from "expo-router/html";
import { type PropsWithChildren } from "react";

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>
          verdedulce, comida fresca y de alta calidad. Sostenible y de origen
          local. Portoviejo
        </title>
        <meta
          name="description"
          content="verdedulce, comida fresca y de alta calidad. Sostenible y de origen local"
        />
        <meta
          property="og:title"
          content="verdedulce, comida fresca y de alta calidad"
        />
        <meta property="og:url" content="https://www.verdedulce.com/" />
        <meta property="og:description" content="Ordena Ya!" />
        <meta
          property="og:image"
          content="https://dta56yysqj9ke.cloudfront.net/eyJidWNrZXQiOiJhbXBsaWZ5LWQxcHR2cnZsb2Fob2pkLW1hLWR1bGNlZHJpdmVidWNrZXRhMGFjMDNmMi15c2tvZWxkeWl4aXIiLCJrZXkiOiJWZXJkZUR1bGNlX2xvZ28ucG5nIiwiZWRpdHMiOnsiY29udGVudE1vZGVyYXRpb24iOmZhbHNlLCJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjoyMDAsImZpdCI6ImNvdmVyIn0sInJvdGF0ZSI6MH19"
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_EC" />
        {/* <meta property="og:locale:alternate" content="fr_FR" /> */}
        <meta property="og:locale:alternate" content="es_ES" />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/*
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        {/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/* Add any additional <head> elements that you want globally available on web... */}
      </head>
      <body>{children}</body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
