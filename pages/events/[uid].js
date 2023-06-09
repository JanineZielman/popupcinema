import Head from "next/head";
import { PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

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
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${prismicH.asText(page.data.title)} | ${prismicH.asText(settings.data.siteTitle)}`} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <div className="container event-page">
        <div className={`event-wrapper even-${even}`}>
          <PrismicLink className="location page-title" href={`/${settings.lang}/location/${page.data.location.uid}`}>
            {page.data.location.data?.title && page.data.location.data.title}
          </PrismicLink>
          <div className={`gradient ${Moment(page.data.date).format("MMM").toLowerCase()}1 ${Moment(page.data.date).format("MMM").toLowerCase()}2 ${page.data.category.slug && page.data.category.slug} time${page.data.time?.slice(0, 2)}`}>
            <div className="content-wrapper">
              <div className="gradient-content">
                <div className="title">
                  <h1>{prismicH.asText(page.data.title)}</h1>
                </div>
                <div className="info-wrapper">
                  <div className="date-time">
                    {page.data.end_date ?
                      <span>
                        {Moment(page.data.date).format("DD.MM")} - {Moment(page.data.end_date).format("DD.MM.Y")}
                      </span>
                      :
                      <span>
                        {Moment(page.data.date).format("DD.MM.Y")}
                      </span>
                    }
                    {page.data.time &&<span>{page.data.time} uur</span>}
                    {page.data.category.data?.title && <span><a href={`/${settings.lang}/category/${page.data.category.uid}`}>{page.data.category.data.title}</a></span>}
                  </div>
                </div>
              </div>
              <div className="content">
                {page.data.ticket_link && <PrismicLink className="ticket button" field={page.data.ticket_link}>{page.data.ticket_link_text}</PrismicLink>}
                <SliceZone slices={page.data.slices} components={components}/>
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

  const page = await client.getByUID("event", params.uid, { 
    lang: locale,
    fetchLinks: 'location.title category.title' 
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

  const pages = await client.getAllByType("event", { lang: "*" });

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