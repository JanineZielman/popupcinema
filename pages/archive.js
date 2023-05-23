import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Event } from "../components/Event";
import { PrismicRichText } from "@prismicio/react";
import { ArchiveItems } from "../components/ArchiveItems"; 

const Archive = ({ page, events, navigation, settings }) => {
  console.log(events)

  return (
    <Layout
      alternateLanguages={settings.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.siteTitle)}</title>
      </Head>
      <div className="container archive">
        <h2 className="page-title">{prismicH.asText(page.data.title)}</h2>
        <div className="content text-block">
          <PrismicRichText field={page.data.text}/>
        </div>
        <ArchiveItems events={events}/>
      </div>
    </Layout>
  );
};

export default Archive;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("archive", { lang: locale });
  const events = await client.getAllByType("event", { 
    lang: locale,
    orderings: {
			field: 'my.event.date',
			direction: 'asc',
		},
    fetchLinks: 'location.title category.title'
  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      events,
      navigation,
      settings,
    },
  };
}
