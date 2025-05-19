"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CartCss from "../styles/cart.module.css"

// Component
import Sidegap from '../../components/sidegap'

// Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";

// Image
import Product1 from "../../../public/image/product1.jpg"


const Cart = () => {

  const [counter, setCounter] = useState(1)


  return (
    <>
        <Sidegap>
            <div className="text-center my-5">
                <h1>Your Shopping Cart</h1>
                <p><Link href="/">Home</Link> | Cart</p>
            </div>

            <div className="container-fluid" id={CartCss.checkoutPage}>
              <form action="">
                <div className="row">

                  <div className="col-lg-8 col-md-12">
                    <div className={CartCss.checkoutLeft}>
                      <div className="table-responsive">
                        <table className="table align-middle">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex justify-content-start align-items-center gap-3">
                                  <div>
                                    <Link href="">
                                      <Image src={Product1} layout='responsive' className='rounded' height={0} width={0} alt=''></Image>
                                    </Link>
                                  </div>
                                  <div>
                                    <h5 className='mb-0'>Faux-leather trousers</h5>
                                    <p>Color: Black</p>
                                  </div>
                                </div>
                              </td>
                              <td><span>$125</span></td>
                              <td>
                                <div className='d-flex justify-content-start align-items-center gap-3'>
                                  <div>
                                    <span className={CartCss.incDecBtn} onClick={() => setCounter(counter + 1)}>+</span>
                                  </div>
                                  <div>
                                    <input type="text" className="form-control form-control-lg text-center" defaultValue={counter} />
                                  </div>
                                  <div>
                                    <span className={CartCss.incDecBtn} onClick={() => counter <= 1 ? setCounter(1) : setCounter(counter - 1)}>-</span>
                                  </div>
                                </div>
                              </td>
                              <td><span><b>$125</b></span></td>
                              <td className='text-end'><button className='btn btn-lg'><IoTrashBin /></button></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className={CartCss.checkoutRight}>
                      <h2>Order Summary</h2>

                      <div className="mt-4">
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                          <div>
                            <p>Subtotal</p>
                          </div>
                          <div>
                            <p>৳175</p>
                          </div>
                        </div>

                        <div className='d-flex justify-content-between align-items-center mt-4'>
                          <div>
                            <p>Delivery Fee</p>
                          </div>
                          <div>
                            <p>৳0</p>
                          </div>
                        </div>

                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <h5><b>Total </b></h5>
                          </div>
                          <div>
                            <h4><b>৳175</b></h4>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <button className='btn btn-lg' id={CartCss.checkoutBtn}>Checkout <FaArrowRightLong /></button>

                        <div className="text-center mt-3">
                          <h5>Or continue <Link href="/products" className={CartCss.cartShopLink}>Shopping</Link></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </Sidegap>
    </>
  )
}

export default Cart