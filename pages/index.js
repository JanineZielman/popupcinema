import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";
import Moment from 'moment';

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
      <div className="container">
        {events.map((item, i) => {
          return(
            <div className="event-wrapper" key={`event${i}`}>
              <div className="location">
                {item.data.location.data?.title && item.data.location.data.title}
              </div>
              <div className="gradient">
                <div className="title">
                  <h1>{prismicH.asText(item.data.title)}</h1>
                </div>
                <div className="info-wrapper">
                  <div className="event-info">
                    <SliceZone slices={item.data.slices} components={components} />
                  </div>
                  <div className="date-time">
                    {item.data.date &&<span>{Moment(item.data.date).format("DD.MM.Y")}</span>}
                    {item.data.time &&<span>{item.data.time} uur</span>}
                  </div>
                </div>
              </div>
            </div>
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
    fetchLinks: 'location.title'
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
