import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import AppleLogo from '../AppleLogo'
import Playstore from '../Playstore'

function FooterSocialLinks() {
  return (
    <section className='mt-[1.6875rem] flex lg:flex-row-reverse flex-col  gap-16 lg:gap-[36rem]  lg:justify-end lg:items-center'>
      <section className='flex gap-3 '>
        <div className='rounded-full flex justify-center items-center w-7.5 h-7.5 bg-SoftBackgroundGray'>
          <FaWhatsapp className='text-primary' />
        </div>
        <div className='rounded-full flex justify-center items-center w-7.5 h-7.5 bg-SoftBackgroundGray'>
          <FaTwitter className='text-primary' />
        </div>
        <div className='rounded-full flex justify-center items-center w-7.5 h-7.5 bg-SoftBackgroundGray'>
          <FaInstagram className='text-primary' />
        </div>
        <div className='rounded-full flex justify-center items-center w-7.5 h-7.5 bg-SoftBackgroundGray'>
          <FaLinkedin className='text-primary' />
        </div>
      </section>
      <section className='flex gap-6 flex-col md:flex-row'>
        <div className='rounded-lg border flex items-center w-fit gap-2 border-SoftBackgroundGray py-2 px-4'>
          <Playstore />
          <p className='text-[#061726] text-sm'>Get on Android</p>
        </div>
        <div className='rounded-lg border flex items-center w-fit gap-2 border-SoftBackgroundGray py-2 px-4'>
          <AppleLogo />
          <p className='text-brandBlack text-sm'>Get on iPhone</p>
        </div>
      </section>
    </section>
  )
}

export default FooterSocialLinks
