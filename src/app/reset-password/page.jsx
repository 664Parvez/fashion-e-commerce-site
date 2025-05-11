import React from 'react'
import Link from 'next/link'
import resetPassCss from "../styles/resetpassword.module.css"

// Component
import Sidegap from '@/components/sidegap'

const ResetPassword = () => {
  return (
    <>
      <Sidegap>
        <div className="text-center my-5">
          <h1>Forget Password</h1>
          <p><Link href="/">Home</Link> | Reset Password</p>
        </div>

        <div id={resetPassCss.reset_password_form_section}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div id={resetPassCss.resetPasswordForm}>
                    <div className="mb-4">
                      <h3 className='text-decoration-underline'>Reset Password</h3>
                    </div>

                    <form action="">
                      <input type="password" className="form-control form-control-lg mt-3" placeholder='Create New Password' name='' />
                      <input type="password" className="form-control form-control-lg mt-3" placeholder='Confirm Password' name='' />

                          <div className='py-4'>
                            <button type="submit" className='btn btn-lg'>Update Password</button>
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

export default ResetPassword