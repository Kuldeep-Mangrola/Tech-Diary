import React from 'react'
import kuldeep from '../../src/assets/Kuldeep.jpg'
import react from '../../src/assets/react.svg'
import Kuldeep2 from '../../src/assets/Kuldeep2.jpg'
import KuldeepHere from '../../src/assets/KuldeepHere.jpg'
const Home = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center min-h-screen px-6'>
      <div className='md:w-1/2 flex justify-center'>
          <img src={Kuldeep2} alt="KULDEEP" className=' rounded-full w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300' />            
      </div>
      <div className='md: w-1/2 text-center md:text-left mt-6 md:mt-0'>
          <h1 className='text-4xl sm:text-7xl font-bold mb-4'>
            Hi, it's <span className='text-red-500'>KULDEEP</span>
          </h1>
          <h3 className='text-2xl sm: text-3xl font-semibold mb-4'>
            I'am a <span className='text-red-500'>SOFTWARE DEVELOPER</span>
          </h3>
          <p className='text-sm sm:text-lg mb-6'>
           Aspiring Web Developer with strong foundational knowledge in frontend technologies, including HTML, CSS, JavaScript, and Bootstrap.
           Experienced in building responsive and user-friendly websites with a focus on design and functionality. Currently expanding skills in React and backend technologies to deliver comprehensive web solutions.
           Dedicated to creating impactful digital experiences and continually learning in the ever-evolving field of web development.
          </p>
      </div>
    </section>
  )
}

export default Home
