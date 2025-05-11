import React from 'react'
import Link from 'next/link'
import loginCss from "../styles/login.module.css"

// Component
import Sidegap from '@/components/sidegap'

const Login = () => {
  return (
    <>
        <Sidegap>
            <div className="text-center my-5">
              <h1>Login</h1>
              <p><Link href="/">Home</Link> | Login</p>
            </div>

            <div id={loginCss.login_form_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div id={loginCss.loginForm}>
                                <div className="mb-4">
                                    <h3 className='text-decoration-underline'>Login</h3>
                                </div>

                                <form action="">
                                    <input type="email" className="form-control form-control-lg mt-3" placeholder='Email Address' name='' />
                                    <input type="password" className="form-control form-control-lg mt-3" placeholder='Password' name='' />
                                    
                                    <div className="mt-3">
                                        <Link href="/forget-password">Forget Password?</Link>
                                    </div>

                                    <div className='py-4'>
                                        <button type="submit" className='btn btn-lg'>Login</button>
                                    </div>

                                    <div className="text-center">
                                        <p>Not a member yet? <Link href="/signup">Register Now</Link></p>
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

export default Login