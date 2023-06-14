import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
       <link rel="stylesheet" href="https://use.typekit.net/txa4ybu.css"/>
       <script async src="https://eocampaign1.com/form/e621049e-0aba-11ee-a2d7-fb653a89d3ac.js" data-form="e621049e-0aba-11ee-a2d7-fb653a89d3ac"></script>
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
