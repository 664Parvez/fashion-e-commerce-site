import React from 'react'
import Link from 'next/link'
import forgetPassCss from "../styles/forgetpassword.module.css"

// Component
import Sidegap from '@/components/sidegap'

const ForgetPassword = () => {
  return (
    <>
      <Sidegap>
        <div className="text-center my-5">
          <h1>Forget Password</h1>
          <p><Link href="/">Home</Link> | Forget Password</p>
        </div>

        <div id={forgetPassCss.forget_password_form_section}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div id={forgetPassCss.forgetPasswordForm}>
                    <div className="mb-4">
                      <h3 className='text-decoration-underline'>Forget Password?</h3>
                    </div>

                    <form action="">
                      <input type="email" className="form-control form-control-lg mt-3" placeholder='Email Address' name='' />

                          <div className='py-4'>
                            <button type="submit" className='btn btn-lg'>Reset Password</button>
                          </div>

                          <div className="text-center">
                            <p>Remember your password? <Link href="/login">Login Here</Link></p>
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

export default ForgetPassword