import React from 'react'
import Link from 'next/link'
import CartCss from "../styles/cart.module.css"

// Component
import Sidegap from '../../components/sidegap'

// Icons
import { FaArrowRightLong } from "react-icons/fa6";


const Cart = () => {
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

                  <div className="col-lg-8 col-md-6">
                    <div className={CartCss.checkoutLeft}>
                      <div class="table-responsive">
                        <table class="table align-middle">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Quantity</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody></tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
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