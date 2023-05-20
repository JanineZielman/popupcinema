import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ImageTextSlice} ImageTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageTextSlice>} ImageTextProps
 * @param { ImageTextProps }
 */
const ImageText = ({ slice }) => {
  return(
    <section className='image-text'>
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
      <div className='items'>
        {slice.items.map((item, i) => {
          return(
            <div className='item'>
              {item.image.url && <img src={item.image.url}/>}
              {item.title && <PrismicRichText field={item.title}/>}
              {item.text && <PrismicRichText field={item.text}/>}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ImageText