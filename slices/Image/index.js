import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param { ImageProps }
 */
const Image = ({ slice }) => (
  <section className='image'>
    <img src={slice.primary.image.url}/>
  </section>
)

export default Image