import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import checkoutCss from "../styles/checkout.module.css"

// Component
import Sidegap from '../../components/sidegap'

// Image
import product1 from "../../../public/image/product1.jpg"
import product2 from "../../../public/image/product2.jpg"

// Icons
import { FaTruckFast, FaRocketchat, FaGifts } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

const Checkout = () => {
  return (
    <>
        <Sidegap>
            <div className="text-center my-5">
              <h1>Checkout</h1>
              <p><Link href="/">Home</Link> | Checkout</p>
            </div>

            <div className="container-fluid">
              <div className="row">

                <div className="col-lg-7 col-md-6">
                  <div id={checkoutCss.leftContainer}>
                    <h2>Information</h2>

                    <form action="">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 mt-4">
                          <input type="text" className='form-control form-control-lg' placeholder='Full Name' required />
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4">
                          <input type="email" className='form-control form-control-lg' placeholder='Email' required />
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4">
                          <input type="tel" className='form-control form-control-lg' placeholder='Phone Number' required />
                        </div>
                        <div className="col-lg-12 col-md-12 mt-4">
                          <textarea name="" className='form-control form-control-lg' placeholder='Address' id="" rows={2} required></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 mt-4">
                          <textarea name="" className='form-control form-control-lg' placeholder='Write note ...'  id="" rows={5}></textarea>
                        </div>
                        
                        <div className="mt-5">
                          <h2>Choose Payment Option: </h2>
                        </div>

                        <div id={checkoutCss.payment_type_section}>
                          <div className='d-flex justify-content-between align-items-center' id={checkoutCss.paymentType}>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="cashOnDelivary" id="cashOnDelivary" defaultChecked></input>
                              <label className="form-check-label" htmlFor="cashOnDelivary" id={checkoutCss.radioInputText}>Cash On Delivery</label>
                            </div>
                            <div>
                              <h5 className='mb-0'>Cash On Delivery</h5>
                            </div>
                          </div>

                          <div className='d-flex justify-content-between align-items-center' id={checkoutCss.paymentType}>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="onlineDelivaryPay" id="onlineDelivaryPay"></input>
                              <label className="form-check-label" htmlFor="onlineDelivaryPay" id={checkoutCss.radioInputText}>Online Payment</label>
                            </div>
                            <div>
                              <h5 className='mb-0'>SSLCommerze</h5>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12 mt-5">
                          <div className="text-center">
                            <button className='btn btn-lg'>Payment</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-lg-5 col-md-6">
                  <div id={checkoutCss.rightContainer}>
                    <h2>Shopping Cart</h2>
                    <p className='mb-5'>2 Items in your bag</p>

                    <div className={checkoutCss.product_item}>
                      <div className='d-flex align-items-center gap-4'>
                        <div>
                          <Link href="">
                            <Image src={product1} id={checkoutCss.itemImg} className='rounded' layout='responsive' width="0" height="0" loading='lazy' alt=''></Image>
                          </Link>
                        </div>
                        <div className='d-flex align-items-center justify-content-between flex-grow-1'>
                            <div>
                              <Link href=""><h4>Faux-leather trousers</h4></Link>
                              <p>Size: XL</p>
                              <p>Qty: 1</p>
                            </div>
                            <div>
                              <h4><b>৳175</b></h4>
                            </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className={checkoutCss.product_item}>
                      <div className='d-flex align-items-center gap-4'>
                        <div>
                          <Link href="">
                            <Image src={product2} id={checkoutCss.itemImg} className='rounded' layout='responsive' width="0" height="0" loading='lazy' alt=''></Image>
                          </Link>
                        </div>
                        <div className='d-flex align-items-center justify-content-between flex-grow-1'>
                            <div>
                              <Link href=""><h4>Faux-leather trousers</h4></Link>
                              <p>Size: XL</p>
                              <p>Qty: 1</p>
                            </div>
                            <div>
                              <h4><b>৳175</b></h4>
                            </div>
                        </div>
                      </div>
                    </div>


                    <div id={checkoutCss.checkout_right_pricing} className='mt-5'>
                    <hr />
                      <div className='d-flex align-items-center justify-content-between mt-4'>
                        <div>
                          <p><b>Shipping </b></p>
                        </div>
                        <div>
                          <p>Free</p>
                        </div>
                      </div>
                      <div className='d-flex align-items-center justify-content-between mt-4'>
                          <div>
                            <p><b>Discount </b></p>
                          </div>
                          <div>
                            <p>-৳15</p>
                          </div>
                      </div>
                      <hr />

                      <div className='d-flex align-items-center justify-content-between mt-4'>
                          <div>
                            <h3><b>Total </b></h3>
                          </div>
                          <div>
                            <h3><b>-৳150</b></h3>
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid my-lg-5">
              <div className="row">
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className={checkoutCss.bottom_section_box}>
                    <div className="d-flex justify-content-start align-items-center gap-3">
                      <div>
                        <FaTruckFast className={checkoutCss.bottom_section_box_icon} />
                      </div>
                      <div>
                        <h5 className='mb-0'><b>Free Shipping</b></h5>
                        <p className='mb-0'>When you spend ৳150+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className={checkoutCss.bottom_section_box}>
                    <div className="d-flex justify-content-start align-items-center gap-3">
                      <div>
                        <MdOutlineSupportAgent className={checkoutCss.bottom_section_box_icon} />
                      </div>
                      <div>
                        <h5 className='mb-0'><b>Call Us Anytime</b></h5>
                        <p className='mb-0'>+34 555 5555</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className={checkoutCss.bottom_section_box}>
                    <div className="d-flex justify-content-start align-items-center gap-3">
                      <div>
                        <FaRocketchat className={checkoutCss.bottom_section_box_icon} />
                      </div>
                      <div>
                        <h5 className='mb-0'><b>Chat With Us</b></h5>
                        <p className='mb-0'>We offer 24-hour chat support</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className={checkoutCss.bottom_section_box}>
                    <div className="d-flex justify-content-start align-items-center gap-3">
                      <div>
                        <FaGifts className={checkoutCss.bottom_section_box_icon} />
                      </div>
                      <div>
                        <h5 className='mb-0'><b>Gift Cards</b></h5>
                        <p className='mb-0'>For your loved one, in any amount</p>
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

export default Checkout