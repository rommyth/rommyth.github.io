import React from 'react'
import Navbar from '../components/navbar'
import { BsGithub, BsDribbble, BsChevronCompactDown } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import CV from '../assets/CV-RommyTH.pdf'

const Header = () => {

  const socials = (
    <>
      <a href='https://github.com/rommyth' aria-label='Github' className='text-white duration-200 ease-in-out hover:text-purple-500' target='_blank' rel="noreferrer"><BsGithub className='w-4 h-4' /></a>
      <a href='https://dribbble.com/kharommy' aria-label='Dribbble' className='text-white duration-200 ease-in-out hover:text-purple-500' target='_blank' rel="noreferrer"><BsDribbble className='w-4 h-4' /></a>
      <a href='#contact' aria-label='Contact' className='text-white duration-200 ease-in-out hover:text-purple-500'><HiMail className='w-4 h-4' /></a>
    </>
  );

  return (
    <header id='home' className='bg-hero-pattern bg-cover relative after:absolute after:block after:w-full after:h-full after:opacity-70 after:bg-black after:bottom-zero'>
      <div className='container h-screen md:h-fit lg:h-screen mx-auto px-5 lg:px-0 relative z-10'>
        <Navbar />
        <article>
          <div className='py-28 lg:py-0 lg:h-screen/4 text-white lg:flex lg:grid-cols-2 gap-12 justify-center lg:items-center'>
            <div className='flex flex-col gap-4'>
              <div className='text-xs text-center tracking-2 text-purple-500 flex justify-center lg:justify-start before:block before:w-6 before:h-px before:bg-purple-500 items-center gap-2'>
                <h5>HELLO THERE</h5>
              </div>
              <div className='lg:text-5xl text-2xl font-serif text-center lg:text-left'>
                <h2 className='leading-normal'>I'm Rommy Taufik Hidayat</h2>
                <h2 className='leading-normal'>I'm Frontend Developer</h2>
              </div>
              <div className='mt-16 hidden lg:flex gap-3'>
                {socials}
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-center lg:justify-start lg:flex-col gap-5 mt-14 lg:-mt-12'>
              <a href={CV} name="CV RommyTH" download className='px-5 py-3 border-2 font-light text-center text-xs tracking-widest transition-all duration-300 hover:bg-white/20'><small>DOWNLOAD CV</small></a>
              <a href='#portofolio' className='px-5 py-3 border-2 font-light text-center text-xs tracking-widest transition-all duration-300 hover:bg-white/20'><small>LATEST PROJECT</small></a>
            </div>
            <div className='lg:hidden flex gap-3 mt-10 justify-center'>
              {socials}
            </div>
          </div>
          <div className='absolute hidden lg:block left-zero right-zero bottom-8 text-white text-xs tracking-2 opacity-90'>
            <div className='flex flex-col items-center gap-2'>
              <small>SCROLL DOWN</small>
              <BsChevronCompactDown className='animate-bounce' />
            </div>
          </div>
        </article>
      </div >
    </header >
  )
}

export default Header