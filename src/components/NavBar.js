import React from 'react'
import Link from 'next/link'

export const NavBar = () => {
    return (
        <div className='p-10 text-center font-bold text-xl'>
            <Link className='no-underline px-4' href="/"> Home</Link>
            <Link className='no-underline px-4' href="/all-realizations/page.js"> AllRealizations</Link>

        </div>
    )
}
