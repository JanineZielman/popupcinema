import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Event } from "../components/Event";
import { PrismicRichText } from "@prismicio/react";
import { ArchiveItems } from "../components/ArchiveItems"; 

const Archive = ({ page, events, navigation, settings, locations, categories }) => {

  console.log(locations)

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
        <div className="filter">
          <div class="dropdown">
            <div class="dropbtn">Locations</div>
            <div class="dropdown-content">
             {locations.map((item, i) =>{
              return(
                <a key={`location${i}`} href={`${item.lang}/location/${item.uid}`}>{item.data.title}</a>
              )
             })}
            </div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">Categories</div>
            <div class="dropdown-content">
              {categories.map((item, i) =>{
                return(
                  <a key={`category${i}`} href={`${item.lang}/category/${item.uid}`}>{item.data.title}</a>
                )
              })}
            </div>
          </div>
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

  const locations = await client.getAllByType("location", { lang: locale });
  const categories = await client.getAllByType("category", { lang: locale });

  return {
    props: {
      page,
      events,
      navigation,
      settings,
      locations,
      categories
    },
  };
}
