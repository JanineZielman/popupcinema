import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { Event } from "../../components/Event";
import { ArchiveItems } from "../../components/ArchiveItems";

const Category = ({ page, navigation, settings, events }) => {
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {page.data.title} |{" "}
          {prismicH.asText(settings.data.siteTitle)}
        </title>
      </Head>
      <div className="container category-page">
        <div className="content">
          <h2 className="category page-title">{page.data.title}</h2>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        <div className="events">
          {events.filter(event => new Date(event.data.date).getTime() >= new Date().getTime()).map((item, i) => {
            const even = (i % 2 == 0);
            return(
              <Event item={item} even={even} i={i} key={`eventwrap${i}`} location={true} />
            )
          })}
        </div>
        <div className="archive">
          <ArchiveItems events={events.reverse()}/>
        </div>
      </div>
    </Layout>
  );
};

export default Category;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const allEvents = await client.getAllByType("event", { 
    lang: locale,
    orderings: {
			field: 'my.event.date',
			direction: 'asc',
		},
    fetchLinks: 'location.title category.title'
  });

  const events = allEvents.filter(event => event.data.category.uid == params.uid);

  const page = await client.getByUID("category", params.uid, { 
    lang: locale,
    fetchLinks: 'location.title category.title' 
  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      events,
      page,
      navigation,
      settings
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("category", { lang: "*" });

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
