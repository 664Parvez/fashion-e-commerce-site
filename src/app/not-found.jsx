import React from 'react'
import Link from 'next/link'
import notFoundCss from "./styles/not-found.module.css"

// Icons
import { MdArrowOutward } from "react-icons/md";

const NotFound = () => {
  return (
    <>
        <div className="text-center" id={notFoundCss.errorMessage}>
            <h1>Oops!</h1>
            <h2>404 - Page Not Found.</h2>
            <p>Could not find requested resource</p>
            <div className="mt-4">
                <Link href="/">Return Home <MdArrowOutward /></Link>
            </div>
        </div>
    </>
  )
}

export default NotFound