import Head from "next/head";
import { PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import Moment from 'moment';
import { useRouter } from 'next/router'

const Event = ({ page, navigation, settings }) => {
  const router = useRouter()
  const even = router.query.even;

  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {prismicH.asText(page.data.title)} |{" "}
          {prismicH.asText(settings.data.siteTitle)}
        </title>
      </Head>
      <div className="container event-page news-page">
        <div className={`event-wrapper even-${even}`}>
          <div className={`gradient ${Moment(page.data.date).format("MMM").toLowerCase()}1 ${Moment(page.data.date).format("MMM").toLowerCase()}2`}>
            <div className="content-wrapper">
              <div className="gradient-content">
                <div className="news-page-wrapper">
                  <div className="flex">
                    <div className="date-time">
                      {page.data.date &&<span>{Moment(page.data.date).format("DD.MM.Y")}</span>}
                    </div>
                    <div className="title">
                      <h1>{prismicH.asText(page.data.title)}</h1>
                    </div>
                  </div>
                  <div className="image">
                    <PrismicNextImage field={page.data.image} alt="logo"/>
                  </div>
              
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

  const page = await client.getByUID("news_item", params.uid, { 
    lang: locale,
  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("news_item", { lang: "*" });

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