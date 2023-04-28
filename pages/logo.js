import { createClient } from "../prismicio";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const Logo = ({ settings }) => {
  console.log(settings)
  return (
    <div className="logo-animation">
      {prismicH.isFilled.image(settings.data.logo) && (
        <PrismicNextImage field={settings.data.logo} alt="logo"/>
      )}
      <div className="loop">
        {settings.data.slices[0].items.map((item, i) => {
          return(
            <h1>{item.text}</h1>
          )
        })}
        <h1>{settings.data.slices[0].items[0].text}</h1>
      </div>
    </div>
  );
};

export default Logo;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      settings,
    },
  };
}
