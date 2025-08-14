import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Event } from "../components/Event";
import { ArchiveItems } from "../components/ArchiveItems";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

const Index = ({ events, navigation, settings, page }) => {
  var currentTime = new Date();
  currentTime.setDate(currentTime.getDate() - 1);
  return (
    <Layout
      alternateLanguages={settings.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.siteTitle)}</title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={prismicH.asText(settings.data.siteTitle)} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <div className="container events">
        {page.data.text[0]?.text &&
          <div className="content text-block page-text-block">
            <PrismicRichText field={page.data.text}/>
          </div>
        }
        {events.filter(event => new Date(event.data.date).getTime() >= currentTime.getTime() || new Date(event.data.end_date).getTime() >= currentTime.getTime()).map((item, i) => {
          const even = (i % 2 == 0);
          return(
            <Event item={item} even={even} i={i} key={`event${i}`} location={true} lang={settings.lang}/>
          )
        })}
        <div className="archive">
          <ArchiveItems settings={settings} events={events.filter(event => new Date(event.data.date).getTime() < currentTime.getTime() && new Date(event.data.end_date).getTime() < currentTime.getTime()).reverse().slice(0,5)} lang={settings.lang} archive={settings.data.translations[0].archive} />
          <Link className="button" href={`${settings.lang}/archive`}>{settings.data.translations[0].show_all}</Link>
          <br/><br/><br/><br/>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const eventsResponse = await client.getByType("event", {
    lang: locale,
    pageSize: 20,
    page: 1,
    orderings: { field: 'my.event.date', direction: 'desc' },
    fetchLinks: 'location.title category.title',
  });
  const events = eventsResponse.results.reverse();
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const page = await client.getByUID("page", "home", { lang: locale });


  return {
    props: {
      events,
      navigation,
      settings,
      page
    },
  };
}
