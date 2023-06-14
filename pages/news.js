import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Event } from "../components/Event";
import { PrismicRichText } from "@prismicio/react";
import Moment from "moment";

const Archive = ({ page, news, navigation, settings }) => {

  return (
    <Layout
      alternateLanguages={settings.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.siteTitle)}</title>
      </Head>
      <h2 className="page-title">{prismicH.asText(page.data.title)}</h2>
      <div className="container news">
        <div className="events">
          {news.map((item, i) => {
            return(
              <div className="event-wrapper" key={`list${i}`} >
               <a href={`/${settings.lang}/news/${item.uid}`}>
                  <div className="content-wrapper"> 
                    <div className={`gradient ${Moment(item.data.date).format("MMM").toLowerCase()}1 ${Moment(item.data.date).format("MMM").toLowerCase()}2`}>
                      <div className="gradient-content">
                        <img src={item.data.image.previewImage?.url}/>
                        <div className="date-time">
                          {item.data.date &&<span>{Moment(item.data.date).format("DD.MM.Y")}</span>}
                        </div>
                        <div className="title">
                          <h1>{prismicH.asText(item.data.title)}</h1>
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

  const page = await client.getSingle("news", { lang: locale });
  const news = await client.getAllByType("news_item", { 
    lang: locale,
    orderings: {
			field: 'my.news_item.date',
			direction: 'desc',
		}
  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      news,
      navigation,
      settings,
    },
  };
}
