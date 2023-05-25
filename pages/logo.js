import { createClient } from "../prismicio";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const Logo = ({ settings }) => {
  console.log(settings)
  return (
    <>
    <div className="logo-animation" style={{ 
      fontFamily: "new-hero",
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      }}>
      {prismicH.isFilled.image(settings.data.logo) && (
        <PrismicNextImage field={settings.data.logo} alt="logo"/>
      )}
      <div className="loop" style={{ 
          height: '95px',
          overflow: 'hidden',
        }}>
        {settings.data.slices[0].items.map((item, i) => {
          return(
            <h1 style={{ 
              fontFamily: "new-hero",
              fontWeight: '400',
              fontSize: '54px',
              whiteSpace: 'nowrap',
              lineHeight: '1.4'
            }} key={`logo${i}`}>{item.text}</h1>
          )
        })}
        <h1 style={{ 
          fontFamily: "new-hero",
        }}>
        {settings.data.slices[0].items[0].text}</h1>
      </div>
      <style jsx global>{`
      .logo-animation{
        .loop h1:first-child{
          margin-top: 0;
          animation: logoAni 6s ease 1s infinite;
          // animation-fill-mode: forwards;
        }
      }

      @keyframes logoAni {
        0%   {margin-top: 0px;}
        20%  {margin-top: -100px;}
        40%  {margin-top: -200px;}
        60%  {margin-top: -300px;}
        80%  {margin-top: -400px;}
        100%  {margin-top: -500px;}
      }
    `}</style>
    </div>
    </>
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
