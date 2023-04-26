import * as prismicH from "@prismicio/helpers";
import Moment from 'moment';

export const Event = ({ item, even, i }) => {
  return (
    <a className={`event-wrapper even-${even}`} key={`event${i}`} href={`/events/${item.uid}?even=${even}`}>
      <div className="location">
        {item.data.location.data?.title && item.data.location.data.title}
      </div>
      <div className="content-wrapper">
        <div className={`gradient ${Moment(item.data.date).format("MMM").toLowerCase()}1 ${Moment(item.data.date).format("MMM").toLowerCase()}2 ${item.data.category.slug && item.data.category.slug} time${item.data.time?.slice(0, 2)}`}>
          <div className="gradient-content">
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
  );
};
