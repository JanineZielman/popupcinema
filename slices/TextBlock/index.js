import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param { TextBlockProps }
 */
const TextBlock = ({ slice }) => (
  <section className='text-block'>
    <div className="title">
      {slice.primary.title &&
        <PrismicRichText field={slice.primary.title}/>
      }
    </div>
    <div className='text'>
      {slice.primary.text &&
        <PrismicRichText field={slice.primary.text}/>
      }
    </div>
  </section>
)

export default TextBlock