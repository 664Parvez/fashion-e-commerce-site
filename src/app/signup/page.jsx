import React from 'react'
import Link from 'next/link'
import SignupCss from "../styles/signup.module.css"

// Component
import Sidegap from '@/components/sidegap'

const Signup = () => {
  return (
    <>
        <Sidegap>
            <div className="text-center my-5">
              <h1>Signup</h1>
              <p><Link href="/">Home</Link> | Signup</p>
            </div>

            <div id={SignupCss.signup_form_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div id={SignupCss.signupForm}>
                                <div className="mb-4">
                                    <h3 className='text-decoration-underline'>Registration</h3>
                                </div>

                                <form action="">
                                    <input type="text" className="form-control form-control-lg mt-3" placeholder='Enter your name' name='' />
                                    <input type="email" className="form-control form-control-lg mt-3" placeholder='Enter your email' name='' />
                                    <input type="password" className="form-control form-control-lg mt-3" placeholder='Create Password' name='' />
                                    <input type="password" className="form-control form-control-lg mt-3" placeholder='Confirm Password' name='' />

                                    <input type="checkbox" name="" id="" className='mt-4' /> <span>I Accept all terms and conditions</span>

                                    <div className='py-4'>
                                        <button type="submit" className='btn btn-lg'>Register Now</button>
                                    </div>

                                    <div className="text-center">
                                        <p>Already have an account? <Link href="/login">Login Now</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </div>
        </Sidegap>
    </>
  )
}

export default Signup