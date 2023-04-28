import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.EventInfoSlice} EventInfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EventInfoSlice>} EventInfoProps
 * @param { EventInfoProps }
 */
const EventInfo = ({ slice }) => {
  return(
    <div className='event-info-block'>
      {slice.items.map((item, i) => {
        return(
          <div key={`eventinfo${i}`}><span>{item.label}</span> <b>{item.value}</b></div>
        )
      })}
    </div>
  )
}

export default EventInfo