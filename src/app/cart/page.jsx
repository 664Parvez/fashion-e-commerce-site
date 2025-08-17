"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CartCss from "../styles/cart.module.css"

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, increaseQty, decreaseQty, removeProductFromCart } from '@/redux/features/products/productSlice'

// Component
import Sidegap from '../../components/sidegap'

// Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";

// Image
import Product1 from "../../../public/image/product1.jpg"


const Cart = () => {

  const dispatch = useDispatch()
  var deliveryCost = 13
  const dataState = useSelector((data) => data.product.data)

  if (dataState.length < 1) {
    deliveryCost = 0
  }

  const totalPrice = dataState.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)


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
                  <div>
                    {
                      dataState.map((item) => {
                        return (
                          <>      
                            <div className='d-flex justify-content-between align-items-center' key={item.id}>
                              <div>
                                <div className="d-flex justify-content-start align-items-center gap-3" id={CartCss.mobileBlock}>
                                  <div>
                                    <Link href="">
                                      <Image src={Product1} layout='responsive' className='rounded' height={0} width={0} alt=''></Image>
                                    </Link>
                                  </div>
                                  <div>
                                    <h4 className='mb-0'>{item.title}</h4>
                                    <p>Color: Black</p>
                                    <div className="mt-4">
                                      <h5>${item.price}</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className='d-flex justify-content-between align-items-center gap-4' id={CartCss.cartIncDecPart}>
                                <div className="d-flex justify-content-between align-items-center gap-3">
                                  <div>
                                    <span className={CartCss.incDecBtn} onClick={() => dispatch(increaseQty(item))}>+</span>
                                  </div>
                                  <div>
                                    <input type="text" className="form-control form-control-lg text-center" value={item.quantity} readOnly />
                                  </div>
                                  <div>
                                    <span className={CartCss.incDecBtn} onClick={() => dispatch(decreaseQty(item))}>-</span>
                                  </div>
                                </div>

                                <div className="py-3 text-end">
                                  <button className='btn btn-lg' onClick={() => dispatch(removeProductFromCart(item))}><IoTrashBin /></button>
                                </div>
                              </div>

                            </div>

                            <hr />
                          </>
                        )
                      })
                    }
                  </div>
                </div>


                <div className="text-end my-5">
                  <button className='btn btn-lg btn-dark' onClick={() => dispatch(emptyCart())}>Cart Clear</button>
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
                        <p><b>${totalPrice}</b></p>
                      </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mt-4'>
                      <div>
                        <p>Delivery Fee</p>
                      </div>
                      <div>
                        <p>${deliveryCost}</p>
                      </div>
                    </div>

                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h5><b>Total </b></h5>
                      </div>
                      <div>
                        <h4><b>${totalPrice + deliveryCost}</b></h4>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Link href="/checkout" className='btn btn-lg' id={CartCss.checkoutBtn}>Checkout <FaArrowRightLong /></Link>

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