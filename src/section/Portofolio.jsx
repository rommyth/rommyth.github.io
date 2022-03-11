import React from 'react'
import SectionHeader from '../components/section-header'
import Card from '../components/card'

const Portofolio = () => {
  return (
    <section id='portofolio' className='py-20 px-5 lg:px-0 bg-gray-200'>
      <div className='container mx-auto xl:px-36'>
        <SectionHeader
          page='portofolio'
          title='Latest Projects'
          slogan='Here you can find some of the project that i made recently'
        />
        <Card />
      </div>
    </section>
  )
}

export default Portofolio