import React from 'react'
import { BsGithub, BsInstagram, BsDribbble } from 'react-icons/bs'
import menuItems from '../components/navbar.data'

const Footer = () => {

  const data = [
    {
      id: 1,
      icon: <BsInstagram />,
      path: 'https://instagram.com/_rommyth'
    },
    {
      id: 2,
      icon: <BsGithub />,
      path: 'https:/github.com/rommyth'
    },
    {
      id: 3,
      icon: <BsDribbble />,
      path: 'https://dribbble.com/kharommy'
    }
  ]
  return (
    <footer className='bg-black'>
      <div className='container mx-auto pt-6'>
        <div className='text-white flex flex-wrap justify-center gap-2 pb-4'>
          {
            menuItems.map((menuItem, i) => (
              <div key={i}>
                <a href={`#` + menuItem.path} className='p-4 text-xs hover:text-purple-500 duration-200'>
                  {menuItem.label}
                </a>
              </div>
            ))
          }
        </div>
        <div className='flex justify-center items-center gap-2 text-white'>
          {
            data.map((item) => (
              <a key={item.id} href={item.path} target='_blank' rel="noreferrer">
                <div className='p-2 uppercase tracking-widest hover:text-purple-500 duration-200 cursor-pointer'>{item.icon}</div>
              </a>
            ))
          }
        </div>
        <div className='text-center text-white text-tiny opacity-70 pt-8 pb-24 lg:pb-5'>
          &copy; Made by Love ❤ 2022 | rommyth
        </div>
      </div>
    </footer>
  )
}

export default Footer