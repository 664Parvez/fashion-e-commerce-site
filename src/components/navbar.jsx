"use client"

import React, {useState} from 'react'
import Link from "next/link"
import Image from 'next/image'
import NavbarCss from "../app/styles/navbar.module.css"


// Icons
import { FaShoppingCart, FaTimes, FaHeart, FaUser, FaPhoneAlt, FaRegEnvelope, FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";

// Image
import NavbarLogo from "../../public/image/Navbar-Logo.png"
import Image1 from "../../public/image/product1.jpg"


const Navbar = () => {

  const [showNav, setShowNav] = useState(false)
  const [mobileNavShow, setMobileNavShow] = useState(false)
  const [mobileDropdownMenu, setMobileDropdownMenu] = useState(false)
  const [searchRightBar, setSearchRightBar] = useState(false)

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
                        <div style={{flexGrow: 1}}>
                            <div className="d-flex justify-content-left align-items-center">
                                <div className={NavbarCss.hamBarIcon}>
                                    <FaBarsStaggered onClick={() => setMobileNavShow(true)} />
                                </div>
                                <div id={NavbarCss.navbar_logo}>
                                  <Link href="/">
                                    <Image src={NavbarLogo} width={0} height={0} layout='responsive' alt=''></Image>
                                  </Link>
                                </div>
                            </div>
                        </div>
                        <div style={{flexGrow: 4}}>
                            <div className={NavbarCss.NavSearchBar}>
                                <input type="text" className='form-control form-control-lg' placeholder='Search your product here . . .' />
                            </div>
                        </div>
                        <div style={{flexGrow: 1}}>
                            <div className={NavbarCss.navbar_icon}>
                                <ul>
                                    <li className={NavbarCss.search_icon} onClick={() => setSearchRightBar(!searchRightBar)}><FaSearch /></li>
                                    <li><Link href="/cart"><FaShoppingCart /><sup>0</sup></Link></li>
                                    <li><Link href="/wishlist"><FaHeart /><sup>0</sup></Link></li>
                                    <li><Link href="/login"><FaUser /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className={NavbarCss.navMenuItems}>
                    <div className={NavbarCss.main_menu}>
                        <ul>
                            <li className={NavbarCss.pcMenuHome}><Link href="/">Home</Link></li>
                            <li><Link href="/all-products">All Products</Link></li>
                            <li><Link href="/new-arrivals">New Arrivals <sup>New</sup></Link></li>
                            <li><Link href="/mens">Men's</Link></li>
                            <li><Link href="/womens">Women's</Link></li>
                            <li><Link href="/kids">Kid's</Link></li>
                            <li><Link href="/accessories">Accessories</Link></li>
                        </ul>
                    </div>
                  </div>
          </nav>

          <div id={NavbarCss.mobile_menu} className={mobileNavShow ? NavbarCss.mobile_menu_show : NavbarCss.mobile_menu_hide }>
            <div className="mb-4">
              <IoClose id={NavbarCss.closeIcon} onClick={() => setMobileNavShow(false)} />
            </div>
            <input type="text" className='form-control form-control-lg' placeholder='What are looking for ?' />

            <div id={NavbarCss.mobile_menu_items}>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/new-arrivals">New Arrivals <sup>New</sup></Link></li>
                <li>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link href="/all-products">
                      <span>
                        All Products
                      </span>
                    </Link>
                      <span onClick={() => setMobileDropdownMenu(!mobileDropdownMenu)}>
                        <IoIosArrowDown />
                      </span>
                  </div>
                  <div className={mobileDropdownMenu ? NavbarCss.mobileDropdownMenuShow : NavbarCss.mobileDropdownMenuHide}>
                    <ul>
                      <li><Link href="">Men's</Link></li>
                      <li><Link href="">Women's</Link></li>
                      <li><Link href="">Kid's</Link></li>
                      <li><Link href="">Accessories</Link></li>
                    </ul>
                  </div>
                </li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
              </ul>
            </div>

            <div className="d-flex justify-content-start align-items-center gap-4 mt-4">
              <div>
                <Link href="/wishlist" className='btn btn-dark'><FaHeart /> Wishlist</Link>
              </div>
              <div>
                <Link href="/login" className='btn btn-dark'><FaUser /> Login</Link>
              </div>
            </div>

            <div className='mt-5'>
              <h5>Need Help ?</h5>
              <p>549 Oak St.Crystal Lake, IL 60014</p>
              <Link className={NavbarCss.mobile_get_direction} href="/contact-us">GET DIRECTION <FiArrowUpRight/></Link>

              <div className="mt-3">
                <p><FaPhoneAlt /> : info@amamfashion.com</p>
                <p><FaRegEnvelope /> : 315-666-6688</p>
              </div>
            </div>
          </div>

          <div className={searchRightBar ? NavbarCss.search_right_side : NavbarCss.search_right_side_hide }>
            <div className="text-end">
              <FaTimes className={NavbarCss.search_right_bar_close} onClick={() => setSearchRightBar(false)} />
            </div>
            <h4>Search product here</h4>
            <input type="text" className='form-control form-control-lg' placeholder='Search . . .' />

            <hr />

            <div className={NavbarCss.search_product_show}>
              <div className="d-flex justify-content-start align-items-center gap-3">
                <div>
                  <Image src={Image1} layout='responsive' width={0} height={0} alt=''></Image>
                </div>
                <div>
                  <h4>Product Name Here</h4>
                  <p>Price: $45.25</p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Navbar