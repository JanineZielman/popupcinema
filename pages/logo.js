import { createClient } from "../prismicio";
import * as prismicH from "@prismicio/helpers";

const Logo = ({ settings }) => {
  return (
    <div className="logo-page" style={{backgroundColor: settings.data.slices[0].primary.background_color}}>
      <div className="logo-animation" id="capture">
        {prismicH.isFilled.image(settings.data.logo) && (
          <div className="logo-ani" style={{backgroundColor: settings.data.slices[0].primary.text_color, width: settings.data.logo.dimensions.width, height: settings.data.logo.dimensions.height  ,maskImage: `url(${settings.data.logo.url})`, '-webkitMaskImage': `url(${settings.data.logo.url})`}}></div>
        )}
        <div className={`loop amount${settings.data.slices[0].primary.amount}`}>
          {settings.data.slices[0].items.slice(0, settings.data.slices[0].primary.amount).map((item, i) => {
            return(
              <h1 key={`logo${i}`} style={{color: settings.data.slices[0].primary.text_color}}>{item.text}</h1>
            )
          })}
          <h1 style={{color: settings.data.slices[0].primary.text_color}}>{settings.data.slices[0].items[0].text}</h1>
        </div>
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
