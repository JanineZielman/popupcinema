import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

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
    <div className='quote'>
      {slice.primary.quote &&
        <PrismicRichText field={slice.primary.quote}/>
      }
    </div>
    <div className='text'>
      {slice.primary.text &&
        <PrismicRichText field={slice.primary.text}/>
      }
      {slice.primary.button &&
        <div className='button text'>
          <PrismicLink field={slice.primary.button}>{slice.primary.button_label}</PrismicLink>
        </div>
      }
    </div>
  </section>
)

export default TextBlock