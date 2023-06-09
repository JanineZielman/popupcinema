import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { PrismicRichText } from "@prismicio/react";
import { ArchiveItems } from "../components/ArchiveItems"; 

const Archive = ({ page, events, navigation, settings, locations, categories, tags }) => {

  return (
    <Layout
      alternateLanguages={settings.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(page.data.title)} |  {prismicH.asText(settings.data.siteTitle)}</title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${prismicH.asText(page.data.title)} | ${prismicH.asText(settings.data.siteTitle)}`} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <div className="container archive">
        <h2 className="page-title">{prismicH.asText(page.data.title)}</h2>
        {page.data.text[0]?.text &&
          <div className="content text-block">
            <PrismicRichText field={page.data.text}/>
          </div>
        }
        <ArchiveItems events={events} lang={settings.lang} settings={settings} locations={locations} categories={categories} tags={tags}/>
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
			direction: 'desc',
		},
    fetchLinks: 'location.title category.title'
  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  const locations = await client.getAllByType("location", { lang: locale });
  const categories = await client.getAllByType("category", { lang: locale });
  const tags = await client.getAllByType("tag", { lang: locale });

  return {
    props: {
      page,
      events,
      navigation,
      settings,
      locations,
      categories,
      tags
    },
  };
}
