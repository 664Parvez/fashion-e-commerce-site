import React from 'react'
import Link from 'next/link'

// Component
import Sidegap from '../../components/sidegap'


const Cart = () => {
  return (
    <>
        <Sidegap>
            Cart

            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 col-md-6">

                </div>
                <div className="col-lg-4 col-md-6">
                  <div>
                    <h2>Order Summary</h2>

                    <div className="mt-4">
                      <div className='d-flex justify-content-between align-items-center'>
                        <div>
                          <p><b>Subtotal </b></p>
                        </div>
                        <div>
                          <p>৳175</p>
                        </div>
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

export default Cart