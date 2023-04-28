import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Event } from "../components/Event";
import { PrismicRichText } from "@prismicio/react";
import Moment from "moment";

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
        <div className="list">
          {events.map((item, i) => {
            return(
              <div className="list-item" key={`list${i}`} >
               <a href={`/events/${item.uid}`}>
                  <div className="content-wrapper">
                    <div className={`gradient ${Moment(item.data.date).format("MMM").toLowerCase()}1 ${Moment(item.data.date).format("MMM").toLowerCase()}2 ${item.data.category.slug && item.data.category.slug} time${item.data.time?.slice(0, 2)}`}>
                      <div className="gradient-content">
                        <div className="location">
                          {item.data.location.data?.title && item.data.location.data.title}
                        </div>
                        <div className="title">
                          <h1>{prismicH.asText(item.data.title)}</h1>
                        </div>
                        <div className="info-wrapper">
                          <div className="date-time" suppressHydrationWarning>
                            {item.data.date &&<span>{Moment(item.data.date).format("DD.MM.Y")}</span>}
                            {item.data.time &&<span>{item.data.time} uur</span>}
                            {item.data.category.data?.title && <span>{item.data.category.data.title}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
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
