"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Component
import Sidegap from '../../components/sidegap'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '@/redux/features/products/productSlice'
import { removeFromWishlist } from "../../redux/features/wishlist/wishlistSlice"

// Icon
import { IoTrashBin } from "react-icons/io5";

// Image
import Product1 from "../../../public/image/product1.jpg"


const Favourite = () => {

  const dispatch = useDispatch()
  const wishData = useSelector((item) => item.wishlist.data)

  return (
    <>
      <Sidegap>
        <div className="text-center my-5">
          <h1>Your Wishlist</h1>
          <p><Link href="/">Home</Link> | Wishlist</p>
        </div>

        <div className='container-fluid'>
          <div className="row">
            {
              wishData.map((item) => {
                return (
                  <>
                    <div className="col-lg-2" key={item.id}>
                      <div className="card">
                        <Image src={Product1} className='card-image' width={0} height={0} layout='responsive' alt=''></Image>

                        <div className="card-body">
                          <div className="card-title">
                            <h5>{item.title}</h5>
                            <p>{item.category}</p>

                            <h4>{item.price}</h4>

                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <button className='btn btn-dark' onClick={() => 
                                  {dispatch(addCart(item)), dispatch(removeFromWishlist(item))}
                                }>Add To Cart</button>
                              </div>
                              <div>
                                <button className='btn btn-danger' onClick={() => dispatch(removeFromWishlist(item))}><IoTrashBin /></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                  </>
                )
              })
            }
          </div>
        </div>
      </Sidegap>
    </>
  )
}

export default Favourite