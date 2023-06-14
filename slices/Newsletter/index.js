import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.NewsletterSlice} NewsletterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsletterSlice>} NewsletterProps
 * @param { NewsletterProps }
 */
const Newsletter = ({ slice }) => (
  <section className='text-block newsletter'>
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
    <a className="button" data-eo-form-toggle-id="e621049e-0aba-11ee-a2d7-fb653a89d3ac" href="#">{slice.primary.button_text}</a>
  </section>
)

export default Newsletter