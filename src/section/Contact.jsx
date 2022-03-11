import React from 'react'
import FormContact from '../components/form-contact'
import SectionHeader from '../components/section-header'

const Contact = () => {
  return (
    <section id='contact' className='pt-20 px-5 bg-zinc-800 xl:px-36'>
      <SectionHeader
        page='contact'
        title='Say Hello'
        slogan='Submit the form below so i can get back to you as soon as possible.'
        isWhite={true}
      />
      <article className='container mx-auto py-14 w-full lg:w-2/4 xl:w-3/4'>
        <div className='grid grid-cols-1 md:grid-cols-custom lg:grid-cols-custom gap-8 items-center text-white'>
          <div>
            <FormContact />
          </div>
          <div className='md:hidden lg:hidden text-center my-2'>
            <div className='text-tiny font-semibold text-zinc-500 flex gap-2 justify-center items-center before:block before:w-8 before:h-px before:bg-zinc-500 after:block after:w-8 after:h-px after:bg-zinc-500'>
              <span>ATAU</span>
            </div>
          </div>
          <div className='flex flex-col lg:-mt-16 md:-mt-20 gap-8 text-xs lg:text-tiny xl:text-xs text-center md:text-left lg:text-left'>
            <div className='flex flex-col gap-2 tracking-widest'>
              <h5 className='opacity-70'>PHONE</h5>
              <a href='https://api.whatsapp.com/send?phone=+6283154991683' className='font-serif duration-200 hover:text-purple-500'>+62 831 5499 1683  </a>
            </div>
            <div className='flex flex-col gap-2 tracking-widest'>
              <h5 className='opacity-70'>EMAIL</h5>
              <a href='mailto:rommy.taufik.hidayat@gmail.com' className='font-serif duration-200 hover:text-purple-500 '>rommy.taufik.hidayat@gmail.com </a>
            </div>
            <div className='flex flex-col gap-2 tracking-widest'>
              <h5 className='opacity-70'>ADDRESS</h5>
              <a href='https://www.google.com/maps/place/Katapang,+Bandung+Regency,+West+Java/@-7.0062241,107.5287583,13z/data=!3m1!4b1!4m5!3m4!1s0x2e68eeaf40bd5d3b:0xd8c0e82bdf582a38!8m2!3d-7.0075521!4d107.5564326'
                className='font-serif duration-200 hover:text-purple-500'>Kab. Bandung, Jawa Barat  </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Contact