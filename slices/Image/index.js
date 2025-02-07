import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param { ImageProps }
 */
const Image = ({ slice }) => (
 
  <section className='image'>
    <ScrollAnimation animateIn="fadeIn">
      <img src={slice.primary.image.url}/>
      <PrismicRichText field={slice.primary.caption}/>
    </ScrollAnimation>
  </section>
  
)

export default Image