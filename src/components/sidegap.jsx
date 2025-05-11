import React from 'react'
import gapCss from "../app/styles/sidegap.module.css"

const sidegap = ({children}) => {
  return (
    <>
        <div id={gapCss.sideGap}>
            {children}
        </div>
    </>
  )
}

export default sidegap