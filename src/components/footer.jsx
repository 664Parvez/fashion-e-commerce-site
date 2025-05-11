import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import footerCss from "../../src/app/styles/footer.module.css"

// Component
import Sidegap from './sidegap'

// Image
import FooterLogo from "../../public/image/Website-navbar-Logo.png"
import PaymentGetway from "../../public/image/payment-getway-icon.png"

// Icons
import { MdArrowOutward, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {

    const date = new Date().getFullYear()

  return (
    <>
        <Sidegap>
            <footer className={footerCss.footer}>
                <hr />
                <div className={footerCss.footer_top}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <Image className={footerCss.footer_logo} layout='responsive' width="0" height="0" src={FooterLogo} loading='lazy' alt=''></Image>

                                <ul>
                                    <li><FaPhoneAlt /> 315-666-6688</li>
                                    <li><FaRegEnvelope /> themesflat@gmail.com</li>
                                    <li><MdLocationOn /> 549 Oak St.Crystal Lake, IL 60014</li>
                                </ul>

                                <div className="mt-5">
                                    <Link className={footerCss.getDirection} href="/contact-us">Get Direction <MdArrowOutward /></Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" id={footerCss.footerInfo}>
                                <h4>Infomation</h4>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="/new-arrivals">New Arrivals</Link></li>
                                    <li><Link href="/my-account">My Account</Link></li>
                                    <li><Link href="/size-guide">Size Guide</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6" id={footerCss.footerService}>
                                <h4>Customer Services</h4>
                                <ul>
                                    <li><Link href="/shipping">Shipping</Link></li>
                                    <li><Link href="/orders-faqs">Orders FAQs</Link></li>
                                    <li><Link href="/returns-and-refund">Returns & Refund</Link></li>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                                    <li><Link href="/disclaimer">Disclaimer</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4>Subscribe to our newsletter</h4>
                                
                                <form action="">
                                    <label htmlFor="" className='mb-2'>Sign up for our newsletter and get 10% off your first purchase</label>
                                    <input type="text" className='form-control form-control-lg' placeholder='Enter your e-mail' />
                                    <button className='btn btn-lg btn-bg-white mt-4'>Subscribe <MdArrowOutward /></button>
                                </form>

                                <div className={footerCss.footer_social_media_icon}>
                                    <h4 className='mt-4'>Social Media</h4>
                                    <ul>
                                        <li><Link href=""><FaFacebook /></Link></li>
                                        <li><Link href=""><FaInstagram /></Link></li>
                                        <li><Link href=""><FaLinkedin /></Link></li>
                                        <li><Link href=""><FaTiktok /></Link></li>
                                        <li><Link href=""><FaYoutube /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <hr />

                    <div className="row align-items-center mb-4">
                        <div className="col-lg-6 col-md-6">
                            <p>&copy; {date} AMAM Fashion. | All Right Reserved | Design & Development by: <a href='https://parvez-rabbi.vercel.app/'>Parvez Rabbi</a></p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="text-end" id={footerCss.getwayIcon}>
                                <p>Payment: </p>
                                <Image src={PaymentGetway} className={footerCss.payment_getway} layout='responsive' width="0" height="0" loading='lazy' alt=""></Image>
                            </div>
                        </div>
                    </div>
                </div>  
            </footer>
        </Sidegap>
    </>
  )
}

export default Footer