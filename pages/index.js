import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Event } from "../components/Event";
import { ArchiveItems } from "../components/ArchiveItems";

const Index = ({ events, navigation, settings }) => {

  return (
    <Layout
      alternateLanguages={settings.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.siteTitle)}</title>
      </Head>
      <div className="container events">
        {events.filter(event => new Date(event.data.date).getTime() >= new Date().getTime()).map((item, i) => {
          const even = (i % 2 == 0);
          return(
            <Event item={item} even={even} i={i} key={`event${i}`} location={true}/>
          )
        })}
      </div>
      <div className="archive">
        <ArchiveItems events={events.filter(event => new Date(event.data.date).getTime() < new Date().getTime()).reverse().slice(0,5)}/>
        <a className="button" href="/archive">Show all</a>
        <br/><br/><br/><br/>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

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
      events,
      navigation,
      settings,
    },
  };
}
