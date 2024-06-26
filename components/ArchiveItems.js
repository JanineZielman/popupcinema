import * as prismicH from "@prismicio/helpers";
import Moment from "moment";
import Link from "next/link";

export const ArchiveItems = ({events, lang, archive, categories, locations, settings, tags}) => {
  var currentTime = new Date();
  currentTime.setDate(currentTime.getDate() - 1);
  return(
    <div className="list">
      {events.filter(event => new Date(event.data.date).getTime() < currentTime.getTime() && new Date(event.data.end_date).getTime() < currentTime.getTime()).map((item, i) => {
        return(
          <>
            {i == 0 &&
              <div className="text-block">
                <h2>{archive}</h2>
                {locations && categories &&
                  <div className="filter">
                    <div class="dropdown">
                      <div class="dropbtn">{settings.data.translations[0].locations}</div>
                      <div class="dropdown-content">
                      {locations.map((item, i) =>{
                        return(
                          <a key={`location${i}`} href={`/${item.lang}/location/${item.uid}`}>{item.data.title}</a>
                        )
                      })}
                      </div>
                    </div>
                    <div class="dropdown">
                      <div class="dropbtn">{settings.data.translations[0].categories}</div>
                      <div class="dropdown-content">
                        {categories.map((item, i) =>{
                          return(
                            <a key={`category${i}`} href={`/${item.lang}/category/${item.uid}`}>{item.data.title}</a>
                          )
                        })}
                      </div>
                    </div>
                    <div class="dropdown">
                      <div class="dropbtn">Tags</div>
                      <div class="dropdown-content">
                        {tags.map((item, i) =>{
                          return(
                            <a key={`tag${i}`} href={`/${item.lang}/tag/${item.uid}`}>{item.data.title}</a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                }
              </div>
            }
            
            <div className={`list-item`} key={`list${i}`}>
              <Link href={`/${lang}/events/${item.uid}`}>
                <div className="content-wrapper">
                  <div className={`gradient ${Moment(item.data.date).format("MMM").toLowerCase()}1 ${Moment(item.data.date).format("MMM").toLowerCase()}2 ${item.data.category.slug && item.data.category.slug} time${item.data.time?.slice(0, 2)}`}>
                    <div className="gradient-content">
                      <div className="location">
                        {item.data.location.data?.title && 
                          <Link href={`/${lang}/location/${item.data.location.uid}`}>{item.data.location.data.title}</Link>
                        }
                      </div>
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
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        )
      })}
    </div>
  )
};