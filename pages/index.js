import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Event } from "../components/Event";

const Index = ({ events, navigation, settings }) => {
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
      <div className="container events">
        {events.map((item, i) => {
          const even = (i % 2 == 0);
          return(
            <Event item={item} even={even} i={i} key={`event${i}`} location={true}/>
          )
        })}
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
