import React from 'react'

/**
 * @typedef {import("@prismicio/client").Content.LogoAnimationSlice} LogoAnimationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogoAnimationSlice>} LogoAnimationProps
 * @param { LogoAnimationProps }
 */
const LogoAnimation = ({ slice }) => {

  return(
    <div className="logo-section">
      <div className="logo-animation" id="capture">
        <div className="logo-ani" style={{backgroundColor: slice.primary.text_color, width: '300px', height: '123px',  maskImage: `url(/logo.svg)`, '-webkitMaskImage': `url(/logo.svg)`}}></div>
        <div className={`loop amount${slice.primary.amount}`}>
          {slice.items.slice(0, slice.primary.amount).map((item, i) => {
            return(
              <h1 key={`logo${i}`} style={{color: slice.primary.text_color}}>{item.text}</h1>
            )
          })}
          <h1 style={{color: slice.primary.text_color}}>{slice.items[0].text}</h1>
        </div>
      </div>
    </div>
  )
}

export default LogoAnimation