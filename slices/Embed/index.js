import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.EmbedSlice} EmbedSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmbedSlice>} EmbedProps
 * @param { EmbedProps }
 */
const Embed = ({ slice }) => {
  return(
    <div className="embed" dangerouslySetInnerHTML={{__html: slice.primary.embed.html}}/>
  )
}

export default Embed