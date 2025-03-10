import React from 'react'

function Navbar() {
    return (
        <div>
            <div className='bg-red-500 flex flex-col justify-center lg:flex-row lg:justify-between px-12 py-4 items-center'>
                <div className=''>
                    <h1 className='font-bold text-3xl'>PORTFOLIO</h1>
                </div>
                <div className=''>
                    <ul className='flex space-x-6'>
                        <li>About Me</li>
                        <li>Experience</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar