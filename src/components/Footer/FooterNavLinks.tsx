import React from 'react'
import Image from 'next/image'
import Ndic from '../Ndic'
import footerData from './Footer.json'
import FooterNavLink from './FooterNavLink'

function FooterNavLinks() {
  return (
    <section className='lg:flex  lg:gap-x-24'>
      <section className='flex flex-col gap-[2.1875rem]'>
        <div className='relative w-38 h-[2.375rem]'>
          <Image src={'/logo.svg'} alt='' fill />
        </div>
        <section className='rounded-lg border border-BrandGray w-fit py-[1.1875rem] flex flex-col gap-2 px-6'>
          <section className='flex items-center gap-1'>
            <div className='relative w-[1.7rem] h-[1.77rem]'>
              <Image src={'/CBN.svg'} alt='' fill />
            </div>
            <span className='text-xxs text-WhiteBody'>Licensed by CBN</span>
          </section>
          <section className='flex items-center gap-1'>
            <Ndic />
            <span className='text-xxs text-WhiteBody'>Insured by NDIC</span>
          </section>
        </section>
      </section>
      <section className='flex gap-x-[6.25rem] lg:gap-x-20 mt-9.5 gap-y-[2.57rem] flex-wrap w-4/5	 md:w-full lg:w-2/4 justify-between'>
        <section className=''>
          <h2 className='font-medium text-sm text-brandBlack'>Products</h2>
          <section className='mt-6 flex flex-col gap-4'>
            {footerData.productlinks.map((content, index) => (
              <FooterNavLink key={index} {...content} />
            ))}
          </section>
        </section>
        <section className=''>
          <h2 className='font-medium text-sm text-brandBlack'>Company</h2>
          <section className='mt-6 flex flex-col gap-4'>
            {footerData.companylinks.map((content, index) => (
              <FooterNavLink key={index} {...content} />
            ))}
          </section>
        </section>
        <section className=''>
          <h2 className='font-medium text-sm text-brandBlack'>
            Legal resources
          </h2>
          <section className='mt-6 flex flex-col gap-4'>
            {footerData.legallinks.map((content, index) => (
              <FooterNavLink key={index} {...content} />
            ))}
          </section>
        </section>
      </section>
      <section className='mt-9.5'>
        <h2 className='font-medium text-sm text-brandBlack'>Contact Us</h2>
        <section className='mt-6 flex flex-col gap-4'>
          <p className='text-xs leading-6 text-WhiteBody'>
            Africa <br /> Plot 265, S.E Asebe street <br /> Mabushi, Abuja.
          </p>
          <p className='text-xs leading-6 text-WhiteBody'>
            North America <br /> 814 Mission Street, 6th Floor <br /> San
            Francisco, CA, 94103
          </p>
        </section>
      </section>
    </section>
  )
}

export default FooterNavLinks
