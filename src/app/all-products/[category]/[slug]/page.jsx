"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Sidegap from '@/components/sidegap'

// Image
import Demo from "../../../../../public/image/demo.png"
import PaymentIcon from "../../../../../public/image/payment-getway-icon.png"

// Style
import SingleProductCss from "@/app/styles/single-product.module.css"

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, addCart } from '@/redux/features/products/productSlice'


// Products
const products = [
  {
      "id": 1,
      "quantity" : 1,
      "title": "iPhone 9",
      "slug" : "iphone-9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "quantity" : 1,
      "title": "iPhone X",
      "slug" : "iphone-x",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "quantity" : 1,
      "title": "Samsung Universe 9",
      "slug" : "Samsung-Universe-9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
      ]
    },
    {
      "id": 4,
      "quantity" : 1,
      "title": "OPPOF19",
      "slug" : "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      ]
    },
    {
      "id": 5,
      "quantity" : 1,
      "title": "Huawei P30",
      "slug" : "Huawei-P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
      ]
    },
    {
      "id": 6,
      "quantity" : 1,
      "title": "MacBook Pro",
      "slug" : "MacBook-Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
      "images": [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg"
      ]
    },
    {
      "id": 7,
      "quantity" : 1,
      "title": "Samsung Galaxy Book",
      "slug" : "Samsung-Galaxy-Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
      ]
    },
    {
      "id": 8,
      "quantity" : 1,
      "title": "Microsoft Surface Laptop 4",
      "slug" : "Microsoft-Surface-Laptop-4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/8/1.jpg",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg",
        "https://i.dummyjson.com/data/products/8/4.jpg",
        "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
      ]
    },
    {
      "id": 9,
      "quantity" : 1,
      "title": "Infinix INBOOK",
      "slug" : "Infinix-INBOOK",
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      "price": 1099,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "Infinix",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
      ]
    },
    {
      "id": 10,
      "quantity" : 1,
      "title": "HP Pavilion 15-DK1056WM",
      "slug" : "HP-pavilion-15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      "price": 1099,
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89,
      "brand": "HP Pavilion",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      "images": [
        "https://i.dummyjson.com/data/products/10/1.jpg",
        "https://i.dummyjson.com/data/products/10/2.jpg",
        "https://i.dummyjson.com/data/products/10/3.jpg",
        "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
      ]
    },
    {
      "id": 11,
      "quantity" : 1,
      "title": "perfume Oil",
      "slug" : "perfume-oil",
      "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      "price": 13,
      "discountPercentage": 8.4,
      "rating": 4.26,
      "stock": 65,
      "brand": "Impression of Acqua Di Gio",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/11/1.jpg",
        "https://i.dummyjson.com/data/products/11/2.jpg",
        "https://i.dummyjson.com/data/products/11/3.jpg",
        "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
      ]
    },
    {
      "id": 12,
      "quantity" : 1,
      "title": "Brown Perfume",
      "slug" : "brown-perfume",
      "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      "price": 40,
      "discountPercentage": 15.66,
      "rating": 4,
      "stock": 52,
      "brand": "Royal_Mirage",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/12/1.jpg",
        "https://i.dummyjson.com/data/products/12/2.jpg",
        "https://i.dummyjson.com/data/products/12/3.png",
        "https://i.dummyjson.com/data/products/12/4.jpg",
        "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
      ]
    },
    {
      "id": 13,
      "quantity" : 1,
      "title": "Fog Scent Xpressio Perfume",
      "slug" : "fog-scent-xpressio-perfume",
      "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      "price": 13,
      "discountPercentage": 8.14,
      "rating": 4.59,
      "stock": 61,
      "brand": "Fog Scent Xpressio",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      "images": [
        "https://i.dummyjson.com/data/products/13/1.jpg",
        "https://i.dummyjson.com/data/products/13/2.png",
        "https://i.dummyjson.com/data/products/13/3.jpg",
        "https://i.dummyjson.com/data/products/13/4.jpg",
        "https://i.dummyjson.com/data/products/13/thumbnail.webp"
      ]
    },
    {
      "id": 14,
      "quantity" : 1,
      "title": "Non-Alcoholic Concentrated Perfume Oil",
      "slug" : "non-alcoholic-concentrated-perfume-oil",
      "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      "price": 120,
      "discountPercentage": 15.6,
      "rating": 4.21,
      "stock": 114,
      "brand": "Al Munakh",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/14/1.jpg",
        "https://i.dummyjson.com/data/products/14/2.jpg",
        "https://i.dummyjson.com/data/products/14/3.jpg",
        "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
      ]
    },
    {
      "id": 15,
      "quantity" : 1,
      "title": "Eau De Perfume Spray",
      "slug" : "Eau-De-Perfume-Spray",
      "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      "price": 30,
      "discountPercentage": 10.99,
      "rating": 4.7,
      "stock": 105,
      "brand": "Lord - Al-Rehab",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/15/1.jpg",
        "https://i.dummyjson.com/data/products/15/2.jpg",
        "https://i.dummyjson.com/data/products/15/3.jpg",
        "https://i.dummyjson.com/data/products/15/4.jpg",
        "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
      ]
    },
]


const singleProduct = ({ params }) => {

  const { slug } = params

  const router = useRouter()

  const dispatch = useDispatch()
  const dataState = useSelector((item) => item.product.data)
  
  const qtyData = dataState.map((item) => {
    return item.quantity
  })

  // const addAndRedirect = () => {
    
  // }

  return (
    <>
      <Sidegap>
        <div className="text-center my-5">
          <h1 className={SingleProductCss.headline}>{slug}</h1>
          <p><Link href="/">Home</Link> | {slug}</p>
        </div>

        {
          products.map((item) => {
            return (
              <>
                {
                  item.slug === params.slug ? 
                  <div className="my-5">
                    <div id={SingleProductCss.single_product}>
                      <div className="row">
                        <div className="col-lg-4" key={item.id}>
                          <div className={SingleProductCss.main_image}>
                            <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                          </div>
                          <div id={SingleProductCss.subImage} className='mt-3'>
                            <div className="row">
                              <div className="col-lg-2">
                                <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <h2 className={SingleProductCss.prodTitle}>{item.title}</h2>

                          <div className="my-4">
                            <h5>Short Description:</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni modi exercitationem laboriosam cum et laborum sunt, impedit placeat velit ex sit, consectetur nulla id omnis minus dicta molestiae magnam?</p>
                          </div>

                          <div className="my-4">
                            <h2>${item.price - (item.price * item.discountPercentage / 100).toFixed(2)} <sup className={SingleProductCss.prevPrice}>${item.price}</sup></h2>
                          </div>

                          <div className="d-flex justify-content-start align-items-center gap-3">
                            <div>
                              <small>Size</small>
                              <select name="" id="" className='form-select form-select-lg'>
                                <option value="">-- Select Size --</option>
                                <option value="xl">XL</option>
                                <option value="x">X</option>
                                <option value="m">M</option>
                                <option value="s">S</option>
                              </select>
                            </div>
                            <div>
                              <small>Color</small>
                              <select name="" id="" className='form-select form-select-lg'>
                                <option value="">-- Select Color --</option>
                                <option value="xl">Red</option>
                                <option value="x">White</option>
                                <option value="m">Blue</option>
                                <option value="s">Green</option>
                              </select>
                            </div>
                          </div>

                          <div className='mt-3'>
                            <h5>Quantity</h5>
                            <div className="d-flex justify content-between align-items-center gap-3">
                              <div>
                                <button className='btn btn-lg btn-dark' onClick={() => dispatch(decreaseQty(item))} disabled={qtyData < 1}>-</button>
                              </div>
                              <div>
                                <div>
                                  <h4 className='mb-0'>{qtyData < 2 ? 1 : qtyData}</h4>
                                </div>
                              </div>  
                              <div>
                                <button className='btn btn-lg btn-dark' onClick={() => dispatch(addCart(item))}>+</button>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex justify-content-start align-items-center gap-3 my-4" id={SingleProductCss.cartBuyBtn}>
                            <div className={SingleProductCss.addBtnSpace}>
                              <button className='btn btn-lg' id={SingleProductCss.addtocartBtn} onClick={() => dispatch(addCart(item), router.push("/cart"))} >Add To Cart</button>
                            </div>
                            <div>
                              <button className='btn btn-lg' id={SingleProductCss.bynowBtn} onClick={() => dispatch(addCart(item), router.push("/checkout"))}>Buy Now</button>
                            </div>
                          </div>

                          <Link href="/">Delivery terms & condition</Link>
                        </div>

                        <div className='col-lg-3'>
                          <div className={SingleProductCss.deliveryOption}>
                            <h4>Delivery Options</h4>
                            <div className="d-flex justify content-between align-items-center gap-3">
                              <div></div>
                              <div>
                                <h5>Regular</h5>
                                <p>Delivery within 2-3 days</p>
                              </div>
                            </div>
                          </div>
                          <div className={SingleProductCss.returnOption}>
                            <h4>Return</h4>
                            <div>
                              <p>You have <b>60 days</b> to return the items using any of the following methods:</p>
                              <ul className='mt-3 mb-0'>
                                <li>- Free store return</li>
                                <li>- Free return via USPS Dropoff Service</li>
                              </ul>
                            </div>
                          </div>
                          <div className={SingleProductCss.paymentIconOption}>
                            <h4>Secure your payment guarantee.</h4>
                            <Image src={PaymentIcon} width={0} height={0} layout='responsive' alt=''></Image>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id={SingleProductCss.description_and_reviews} className='mt-5'>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description-tab-pane" type="button" role="tab" aria-controls="description-tab-pane" aria-selected="true">Description</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false">Reviews</button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active p-4" id="description-tab-pane" role="tabpanel" aria-labelledby="description-tab" tabIndex="0">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis sit saepe error voluptates alias nisi, ipsa fuga suscipit sapiente delectus quaerat nihil expedita doloribus, exercitationem earum laudantium nam hic? Fugiat odio consectetur ipsa commodi doloremque officia delectus, hic, ut debitis fugit dolorem nulla maxime autem expedita, iusto quaerat cumque facere laborum? Nihil maxime aliquam iure accusamus aperiam quidem quasi? Quidem perferendis vero eligendi autem cumque blanditiis iste ipsam non fuga quod, praesentium, earum dolore laboriosam voluptatum assumenda reprehenderit quo ad odit impedit facere. Totam delectus repudiandae dicta. Earum nesciunt amet est fugit ex ipsa eligendi fugiat voluptate rem corrupti accusamus facilis eaque ut mollitia hic praesentium, nostrum corporis vero deleniti error, animi adipisci. Quo tempora nisi deleniti accusamus quibusdam optio incidunt soluta rerum nobis numquam perspiciatis suscipit voluptatum dignissimos repudiandae consequuntur at debitis molestias provident veritatis maxime ut nesciunt, illum ducimus. Explicabo suscipit laborum, sequi vel amet autem nobis. Non asperiores aliquam deleniti corrupti modi optio tempore in quibusdam sequi, accusantium quod exercitationem odit impedit alias temporibus accusamus fugit perspiciatis quisquam explicabo veniam quasi. Perspiciatis fuga qui commodi explicabo illum autem, accusamus itaque iusto tenetur quo nostrum repellat iste. Perspiciatis non omnis eius eos ad mollitia neque sequi facilis.</p>
                        </div>
                        <div className="tab-pane fade p-4" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabIndex="0">
                          <form action="">
                            <label htmlFor="">Email</label>
                            <input type="text" className='form-control form-control-lg' placeholder='Enter your email' />
                            <label htmlFor="" className='mt-4'>Write Reviews</label>
                            <textarea name="" className='form-control form-control-lg' id="" placeholder='Write your reviews'></textarea>
                            <div className='mt-4'>
                              <button className='btn btn-lg' id={SingleProductCss.review_send_btn}>Send Review</button>
                            </div>
                          </form> 
                        </div>
                      </div>
                    </div>
                  </div> : ""
                }
              </>
            )
          })
        }


        <div className="my-5">
          <h3>Recommended Products</h3>

          <div>
            <div className="row">
              {
                products.map((item) => {
                  return (
                    <> 
                      {
                        item.category === "smartphones" ? 
                        <div className="col-lg-2 col-md-4 mt-4" id={SingleProductCss.product_card} key={item.id}>
                          <Link href={`/all-products/${item.category}/${item.slug}`}>
                            <div className="card" key={item.id}>
                              <Image src={Demo} width={0} height={0} layout='responsive' alt=''></Image>
                              <div className="card-body">
                                <h5 className='mb-0'>{item.title}</h5>
                                <p>Category: {item.category}</p>
                                <h5 className='mt-4 mb-0'><span className={SingleProductCss.regular_price}>${item.price}</span> | <span className={SingleProductCss.salling_price}>${item.price - (item.price * item.discountPercentage / 100).toFixed(2)}</span></h5>

                                <div className='mt-4'>
                                  <Link href="" className='btn' id={SingleProductCss.select_btn}>Select Size</Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div> : ""
                      }    
                    </>
                  )
                })
              }
              
            </div>
          </div>
        </div>
      </Sidegap>
    </>
  )
}

export default singleProduct