import * as prismicH from "@prismicio/helpers";
import Moment from 'moment';
import Link from "next/link";

export const Event = ({ item, even, i, location, lang }) => {
  console.log(item.data.preview_image.url)
  return (
    <div className={`event-wrapper even-${even}`} key={`event${i}`}>
      {location &&
        <div className="location">
          {item.data.location.data?.title && 
            <Link href={`/${lang}/location/${item.data.location.uid}`}>{item.data.location.data.title}</Link>
          }
        </div>
      }
      <div className="content-wrapper">
        {item.data.preview_image?.url &&<img className="hover-img" src={item.data.preview_image.url}/>}
        <div className={`gradient ${Moment(item.data.date).format("MMM").toLowerCase()}1 ${Moment(item.data.date).format("MMM").toLowerCase()}2 ${item.data.category.slug && item.data.category.slug} time${item.data.time?.slice(0, 2)}`}>
          <Link className="gradient-content" href={`/${lang}/events/${item.uid}?even=${even}`}>
            <div className="title">
              <h1>{prismicH.asText(item.data.title)}</h1>
            </div>
            <div className="info-wrapper">
              <div className="date-time">
                {item.data.end_date ?
                  <span>
                    {Moment(item.data.date).format("DD.MM")} - {Moment(item.data.end_date).format("DD.MM.Y")}
                  </span>
                  :
                  <span>
                    {Moment(item.data.date).format("DD.MM.Y")}
                  </span>
                }
                {item.data.time &&<span>{item.data.time} uur</span>}
                {item.data.category.data?.title && 
                  <span><Link href={`/${lang}/category/${item.data.category.uid}`}>{item.data.category.data.title}</Link></span>
                }
              </div>
              {item.data.preview_image?.url &&<img className="mobile-img" src={item.data.preview_image.url}/>}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
