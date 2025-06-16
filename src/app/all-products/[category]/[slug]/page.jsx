import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sidegap from '@/components/sidegap'

// Style
import SingleProductCss from "@/app/styles/single-product.module.css"

const singleProduct = ({params}) => {

  const {slug} = params

  return (
    <>
      <Sidegap>
        <div className="text-center my-5">
          <h1 className={SingleProductCss.headline}>{slug}</h1>
          <p><Link href="/">Home</Link> | {slug}</p>
        </div>

        <div className="my-5">
          <div id={SingleProductCss.single_product}></div>
        </div>

        <div className="my-5">
          <h3>Recommended Products</h3>
        </div>
      </Sidegap>
    </>
  )
}

export default singleProduct