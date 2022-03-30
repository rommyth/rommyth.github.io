import React from 'react'
import SectionHeader from '../components/section-header'
import SkillsTag from '../components/skills-tag'

const About = () => {
  return (
    <section id='about' className='container mx-auto py-20 lg:px-0 xl:px-36'>
      <div className='relative flex justify-center w-full  items-center'>
        <div className='absolute top-0 left-32 h-72 w-72 bg-amber-500 rounded-full -z-10 mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000'></div>
        <div className='absolute top-10  h-72 w-72 bg-purple-500 rounded-full -z-10 mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000'></div>
        <div className='absolute top-0 right-32 h-72 w-72 bg-green-500 rounded-full -z-10 mix-blend-multiply filter blur-xl opacity-50 animate-blob'></div>
      </div>
      <SectionHeader
        page='about'
        title='Personal Info'
        slogan='Get to know more about me.'
      />

      <article className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 lg:py-14 px-5 lg:px-0 text-center lg:text-left'>
        <div>
          <h5 className='font-bold mb-3'>Hello,</h5>
          <p className='font-serif mb-3'>My name is Rommy Taufik Hidayat and I’m a passionate Frontend Web Developer using web technologies to build amazing products and focusing on solving problems for different industries using the power of techology.</p>
          <p className='font-serif'>I will love to hear from you. Whether it’s a project, job opportuity, or just a chat. Feel love to contact me.</p>
        </div>
        <div>
          <h5 className='font-bold mb-3'>Skills</h5>
          <SkillsTag />
        </div>
      </article>
    </section>
  )
}

export default About