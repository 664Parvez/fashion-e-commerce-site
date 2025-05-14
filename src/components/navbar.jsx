"use client"

import React, {useState} from 'react'
import Link from "next/link"
import Image from 'next/image'
import NavbarCss from "../app/styles/navbar.module.css"


// Icons
import { FaShoppingCart, FaHeart, FaUser, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";

// Image
import NavbarLogo from "../../public/image/Navbar-Logo.png"


const Navbar = () => {

  const [showNav, setShowNav] = useState(false)


  return (
    <>
          <nav>
                <div id={NavbarCss.topbar}>
                    <div className="container">
                        <marquee behavior="" direction="">
                            <p className="mb-0">Free Delivery on orders over $200.</p>
                        </marquee>
                    </div>
                </div>
                <div id={NavbarCss.navbar}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div className="d-flex justify-content-left align-items-center">
                                <div className={NavbarCss.hamBarIcon}>
                                    <FaBarsStaggered />
                                </div>
                                <div id={NavbarCss.navbar_logo}>
                                  <Link href="/">
                                    <Image src={NavbarLogo} width={0} height={0} layout='responsive' alt=''></Image>
                                  </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={NavbarCss.main_menu}>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li id={NavbarCss.productsMenuItem} onMouseOver={() => setShowNav(true)} onMouseLeave={() => setShowNav(false)}>
                                        <Link href="/products">Products <IoIosArrowDown /></Link>
                                        <div id={`${showNav ? NavbarCss.NavProductCategoryDisplay : NavbarCss.NavProductCategoryDisplayNone}`}>
                                            <div className={NavbarCss.NavProductCategory}>
                                                <ul>
                                                    <li><Link href="">Men's</Link></li>
                                                    <li><Link href="">Women's</Link></li>
                                                    <li><Link href="">Kid's</Link></li>
                                                    <li><Link href="">Essential</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className={NavbarCss.navbar_icon}>
                                <ul>
                                    <li><Link href=""><FaShoppingCart /><sup>0</sup></Link></li>
                                    <li><Link href=""><FaHeart /><sup>0</sup></Link></li>
                                    <li><Link href="/login"><FaUser /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
          </nav>

          <div id={NavbarCss.mobile_menu}>
            <div className="mb-4">
              <IoClose id={NavbarCss.closeIcon} />
            </div>
            <input type="text" className='form-control form-control-lg' placeholder='What are looking for ?' />

            <div id={NavbarCss.mobile_menu_items}>
              <ul>
                <li><Link href="">Home</Link></li>
                <li><Link href="">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      Products
                    </span>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </div>
                </Link></li>
                <li><Link href="">About Us</Link></li>
                <li><Link href="">Blog</Link></li>
                <li><Link href="">Contact Us</Link></li>
              </ul>
            </div>

            <div className="d-flex justify-content-start align-items-center gap-4 mt-4">
              <div>
                <Link href="" className='btn btn-dark'><FaHeart /> Wishlist</Link>
              </div>
              <div>
                <Link href="" className='btn btn-dark'><FaUser /> Login</Link>
              </div>
            </div>

            <div className='mt-5'>
              <h5>Need Help ?</h5>
              <p>549 Oak St.Crystal Lake, IL 60014</p>
              <Link href="/contact-us">GET DIRECTION <FiArrowUpRight/></Link>

              <div className="mt-3">
                <p><FaPhoneAlt /> : info@amamfashion.com</p>
                <p><FaRegEnvelope /> : 315-666-6688</p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Navbar