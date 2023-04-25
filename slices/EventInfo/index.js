import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.EventInfoSlice} EventInfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EventInfoSlice>} EventInfoProps
 * @param { EventInfoProps }
 */
const EventInfo = ({ slice }) => {
  return(
    <>
      {slice.items.map((item, i) => {
        return(
          <div>{item.label}: {item.value}</div>
        )
      })}
    </>
  )
}

export default EventInfo