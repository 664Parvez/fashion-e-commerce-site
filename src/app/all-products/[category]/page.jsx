import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sidegap from '@/components/sidegap'

// Image
import Demo from "../../../../public/image/demo.png"

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
          <div id={CategoriesCss.products_of_category_ways}>
            <div className="row">
                        <div className="col-lg-3">
                            <div id={CategoriesCss.product_filtering} className='mt-4'>
                                <h3>Filters</h3>
                                <hr />

                                <div className="mt-4">
                                    <h5>Availability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                            <label className="form-check-label" htmlFor="checkDefault">
                                                In stock (45)
                                            </label>
                                            </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="checkChecked" />
                                            <label className="form-check-label" htmlFor="checkChecked">
                                                Out of stock (6)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-4">
                                    <h5>Price</h5>
                                    <div className="d-flex justify-content-between align-items-center gap-3">
                                        <div>
                                            <input type="number" className='form-control form-control-lg' placeholder='0.00' />
                                        </div>
                                        <p>To</p>
                                        <div>
                                            <input type="number" className='form-control form-control-lg' placeholder='199.00' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 mt-4" id={CategoriesCss.product_card}>
                                    <Link href="">
                                        <div className="card">
                                            <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                                            <div className="card-body">
                                                <h5 className='mb-0'>Premeum Mesh T-shirt</h5>
                                                <p>Category: T-shirt</p>
                                                <h5 className='mt-4 mb-0'><span className={CategoriesCss.regular_price}>$300</span> | <span className={CategoriesCss.salling_price}>$150</span></h5>

                                                <div className='mt-4'>
                                                    <Link href="" className='btn' id={CategoriesCss.select_btn}>Select Size</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4" id={CategoriesCss.product_card}>
                                    <Link href="">
                                        <div className="card">
                                            <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                                            <div className="card-body">
                                                <h5 className='mb-0'>Premeum Mesh T-shirt</h5>
                                                <p>Category: T-shirt</p>
                                                <h5 className='mt-4 mb-0'><span className={CategoriesCss.regular_price}>$300</span> | <span className={CategoriesCss.salling_price}>$150</span></h5>

                                                <div className='mt-4'>
                                                    <Link href="" className='btn' id={CategoriesCss.select_btn}>Select Size</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4" id={CategoriesCss.product_card}>
                                    <Link href="">
                                        <div className="card">
                                            <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                                            <div className="card-body">
                                                <h5 className='mb-0'>Premeum Mesh T-shirt</h5>
                                                <p>Category: T-shirt</p>
                                                <h5 className='mt-4 mb-0'><span className={CategoriesCss.regular_price}>$300</span> | <span className={CategoriesCss.salling_price}>$150</span></h5>

                                                <div className='mt-4'>
                                                    <Link href="" className='btn' id={CategoriesCss.select_btn}>Select Size</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4" id={CategoriesCss.product_card}>
                                    <Link href="">
                                        <div className="card">
                                            <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                                            <div className="card-body">
                                                <h5 className='mb-0'>Premeum Mesh T-shirt</h5>
                                                <p>Category: T-shirt</p>
                                                <h5 className='mt-4 mb-0'><span className={CategoriesCss.regular_price}>$300</span> | <span className={CategoriesCss.salling_price}>$150</span></h5>

                                                <div className='mt-4'>
                                                    <Link href="" className='btn' id={CategoriesCss.select_btn}>Select Size</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4" id={CategoriesCss.product_card}>
                                    <Link href="">
                                        <div className="card">
                                            <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                                            <div className="card-body">
                                                <h5 className='mb-0'>Premeum Mesh T-shirt</h5>
                                                <p>Category: T-shirt</p>
                                                <h5 className='mt-4 mb-0'><span className={CategoriesCss.regular_price}>$300</span> | <span className={CategoriesCss.salling_price}>$150</span></h5>

                                                <div className='mt-4'>
                                                    <Link href="" className='btn' id={CategoriesCss.select_btn}>Select Size</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4" id={CategoriesCss.product_card}>
                                    <Link href="">
                                        <div className="card">
                                            <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                                            <div className="card-body">
                                                <h5 className='mb-0'>Premeum Mesh T-shirt</h5>
                                                <p>Category: T-shirt</p>
                                                <h5 className='mt-4 mb-0'><span className={CategoriesCss.regular_price}>$300</span> | <span className={CategoriesCss.salling_price}>$150</span></h5>

                                                <div className='mt-4'>
                                                    <Link href="" className='btn' id={CategoriesCss.select_btn}>Select Size</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4" id={CategoriesCss.product_card}>
                                    <Link href="">
                                        <div className="card">
                                            <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                                            <div className="card-body">
                                                <h5 className='mb-0'>Premeum Mesh T-shirt</h5>
                                                <p>Category: T-shirt</p>
                                                <h5 className='mt-4 mb-0'><span className={CategoriesCss.regular_price}>$300</span> | <span className={CategoriesCss.salling_price}>$150</span></h5>

                                                <div className='mt-4'>
                                                    <Link href="" className='btn' id={CategoriesCss.select_btn}>Select Size</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4" id={CategoriesCss.product_card}>
                                    <Link href="">
                                        <div className="card">
                                            <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                                            <div className="card-body">
                                                <h5 className='mb-0'>Premeum Mesh T-shirt</h5>
                                                <p>Category: T-shirt</p>
                                                <h5 className='mt-4 mb-0'><span className={CategoriesCss.regular_price}>$300</span> | <span className={CategoriesCss.salling_price}>$150</span></h5>

                                                <div className='mt-4'>
                                                    <Link href="" className='btn' id={CategoriesCss.select_btn}>Select Size</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </Sidegap>
    </>
  )
}

export default category