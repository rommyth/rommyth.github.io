import React from 'react'

const SectionHeader = ({ page, title, slogan, isWhite }) => {
  return (
    <div className='text-center'>
      <h5 className='text-md tracking-widest font-bold text-purple-500 uppercase'>{page}</h5>
      <h2 className='text-4xl font-serif font-bold' style={{ color: isWhite ? 'white' : 'black' }}>{title}</h2>
      <p className='mt-5 font-medium text-sm' style={{ color: isWhite ? 'white' : 'black' }}>{slogan}</p>
    </div>
  )
}

export default SectionHeader