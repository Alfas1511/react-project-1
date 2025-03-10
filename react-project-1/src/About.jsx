import React from 'react'
import photo1 from '../public/images/alfas_pic.jpg';

function About() {
    return (
        <div className='flex'>
            <div className='bg-amber-500 w-1/2 h-[100vh] flex justify-center items-center'>
                <div className='flex-col'>
                    <h1 className='text-5xl'>ALFAS SALIM</h1>
                    <p className='text-2xl'>Software Developer</p>
                </div>
            </div>
            <div className='flex w-1/2 h-[100vh] justify-center items-center'>
                <div className='flex-col justify-center items-center'>
                    <div className='flex justify-center'>
                        <img src={photo1} className='rounded-full' />
                    </div>
                    <p className='p-5 text-justify font-medium'>
                        I am a skilled Laravel Web Developer with 1.4 years of experience in designing and developing dynamic web applications. I specialize in backend development, providing efficient API services for mobile and web applications. My expertise includes database management, query optimization, and project deployment across different environments. I am proficient in Laravel, PHP, MySQL, and modern web technologies, ensuring scalable and high-performance applications. Passionate about problem-solving and continuous learning, I thrive in collaborative development environments to deliver robust digital solutions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About