import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { PrismicRichText } from "@prismicio/react";
import Moment from "moment";

const Articles = ({ page, news, navigation, settings }) => {
  
  return (
    <Layout
      alternateLanguages={settings.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(page.data.title)} | {prismicH.asText(settings.data.siteTitle)}</title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${prismicH.asText(page.data.title)} | ${prismicH.asText(settings.data.siteTitle)}`} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <h2 className="page-title">{prismicH.asText(page.data.title)}</h2>
      <div className="container news articles">
        <div className="events">
          {news.map((item, i) => {
            return(
              <div className="event-wrapper" key={`list${i}`} >
               <a href={`/${settings.lang}/articles/${item.uid}`}>
                  <div className="content-wrapper"> 
                    <div className={`gradient ${Moment(item.data.date).format("MMM").toLowerCase()}1 ${Moment(item.data.date).format("MMM").toLowerCase()}2`}>
                      <div className="gradient-content">
                        <img src={item.data.image.previewImage?.url}/>
                        <div className="author">
                          <h1>{item.data.author}</h1>
                        </div>
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

export default Articles;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("articles", { lang: locale });
  const news = await client.getAllByType("article_item", { 
    lang: locale,
    orderings: {
			field: 'my.article_item.date',
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
