import Head from "next/head";
import { PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import Moment from "moment";
import { useEffect, useState } from "react";

const Event = ({ page, navigation, settings }) => {
  const [scrollY, setScrollY] = useState(0);
  const [imageWidth, setImageWidth] = useState(900); // Default max width
  const [innerHeight, setInnerHeight] = useState(900);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Get scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const maxScroll = 300;
        const minWidth = 900;
        const newWidth = Math.max(
          minWidth,
          window.innerWidth * (1 - scrollY / (maxScroll * 6))
        );
        setImageWidth(newWidth);
        setInnerHeight(window.innerHeight)
      };

      handleResize(); // Set initial width
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [scrollY]);

  const maxScroll = 300;
  const opacity = Math.max(0, 1 - scrollY / maxScroll);
  const translateY = Math.min(scrollY * 0.5, 200); // Move text upwards with a limit

  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <div className="container event-page news-page article-page">
        <div className="article-wrapper">
          <PrismicLink
            className="location page-title"
            href={`/${settings.lang}/articles`}
          >
            {settings.data.translations[0].articles}
          </PrismicLink>
          <div
            className={`gradient ${Moment(page.data.date)
              .format("MMM")
              .toLowerCase()}1 ${Moment(page.data.date)
                .format("MMM")
                .toLowerCase()}2`}
          >
            <div className="content-wrapper2">
              <div className="hero-image">
                <div
                  className="text-wrapper"
                  style={{ transform: `translate(-50%, calc(-${translateY}px - 50%))` }} // Moves text up
                >
                  <div className="author" id="author">
                    <h2>{page.data.author}</h2>
                  </div>
                  <div className="title" id="title">
                    <h1>{prismicH.asText(page.data.title)}</h1>
                  </div>
                </div>

                {/* Image with max width 900px, centered and bottom-aligned */}
                <PrismicNextImage
                  field={page.data.image}
                  alt="logo"
                  style={{
                    width: `${imageWidth}px`,
                    maxWidth: "100vw",
                    position: "absolute",
                    top: `${scrollY}px`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: `${scrollY > (innerHeight - 500) ? `auto` : `${scrollY}px`}`,
                    bottom: 0
                  }}
                />

                <div
                  style={{ opacity: opacity }}
                  className={`gradient gradient-overlay ${Moment(
                    page.data.date
                  )
                    .format("MMM")
                    .toLowerCase()}1 ${Moment(page.data.date)
                      .format("MMM")
                      .toLowerCase()}2`}
                ></div>
              </div>
              <div className="gradient-content">
                <div className="news-page-wrapper">
                  <div className="content">
                    <SliceZone slices={page.data.slices} components={components} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Event;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("article_item", params.uid, {
    lang: locale,
  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("article_item", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
