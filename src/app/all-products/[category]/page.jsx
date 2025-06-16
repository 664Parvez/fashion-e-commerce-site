import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sidegap from '@/components/sidegap'

// Style
import CategoriesCss from "@/app/styles/categories.module.css"

const category = ({params}) => {

  const {category} = params

  return (
    <>
      <Sidegap>
        <div className="text-center my-5">
          <h1 className={CategoriesCss.headline}>{category}</h1>
          <p><Link href="/">Home</Link> | {category}</p>
        </div>

        <div className="my-5">
          <div id={CategoriesCss.products_of_category_ways}></div>
        </div>
      </Sidegap>
    </>
  )
}

export default category