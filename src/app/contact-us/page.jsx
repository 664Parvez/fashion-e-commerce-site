import React from 'react'
import Link from 'next/link'
import contactCss from "../styles/contact-us.module.css"

// Component
import Sidegap from '../../components/sidegap'

// Icons
import { MdArrowOutward, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
        <Sidegap>
            <div className="text-center my-5">
                <h1>Contact Us</h1>
                <p><Link href="/">Home</Link> | Contact Us</p>
            </div>

            <div className={contactCss.contactInfoSection}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 mt-3">
                        <div className="text-center">
                            <FaPhoneAlt className={contactCss.contactInfoIcon} />
                            <p>Phone Number</p>
                            <h4>+0123-456789</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-3">
                        <div className="text-center">
                            <FaRegEnvelope className={contactCss.contactInfoIcon} />
                            <p>Email</p>
                            <h4>info@amamfashion.com</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-3">
                        <div className="text-center">
                            <MdLocationOn className={contactCss.contactInfoIcon} />
                            <p>Address</p>
                            <h4>549 Oak St.Crystal Lake, IL 60014</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className={contactCss.contactFormSection}>
                <h3 className='mb-4'>Send Message</h3>
                <hr />

                <div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mt-4">
                            <label htmlFor="">Full Name</label>
                            <input type="text" className='form-control form-control-lg' placeholder='Enter your name' name='' required />
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4">
                            <label htmlFor="">Email Address</label>
                            <input type="email" className='form-control form-control-lg' placeholder='Enter Email Address' name='' required />
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4">
                            <label htmlFor="">Phone Number</label>
                            <input type="tel" className='form-control form-control-lg' placeholder='Enter Phone Number' name='' required />
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4">
                            <label htmlFor="">Subject</label>
                            <input type="text" className='form-control form-control-lg' placeholder='Subject' name='' required />
                        </div>
                        <div className="col-lg-12 col-md-12 mt-4">
                            <label htmlFor="">Write your Massage</label>
                            <textarea name="" className='form-control form-control-lg' id="" rows={5} placeholder='Message Here'></textarea>
                        </div>
                        <div className="col-lg-12">
                            <button className='btn btn-lg mt-5'>Submit <MdArrowOutward /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={contactCss.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d24209.61373490445!2d-73.9625312!3d40.6695242!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop%20900%20Washington%20Ave%20Brooklyn%2C%20NY%2011238%20United%20States!3m2!1d40.6695242!2d-73.9625312!5e0!3m2!1sen!2sbd!4v1746727011874!5m2!1sen!2sbd" className='rounded' width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Sidegap>
    </>
  )
}

export default ContactUs