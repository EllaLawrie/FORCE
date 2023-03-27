import React from 'react'
import Arrow from '../Arrow'
import Image from 'next/image'


function FooterBottom() {
  const year = new Date().getFullYear()
  return (
    <section>
      <section className='mt-[7.0625rem] lg:flex gap-x-20 items-center'>
        <p className=' text-[0.675rem] lg:text-sm text-WhiteBody text-center'>
          Crowdforce is the leading digital service provider in Nigeria. For
          over 8 years, we have delivered quality and outstanding services
          ranging from our digital banking services, API integration, e-commerce
          to our data and research services.{' '}
        </p>
      </section>

      <section className='mt-[3.125rem] flex flex-col items-center'>
        <section className='flex divide-x divide-BrandGray'>
          <section className='px-2'>
            <div className='relative w-[4.375rem] h-[1.0625rem]'>
              <Image src={'/Copyofcrowdforce_2.svg'} alt='' fill />
            </div>
          </section>

          <section className='px-2'>
            <div className='relative w-[4.375rem] h-[1.0625rem]'>
              <Image src={'/fairmoney-logo_new 1.svg'} alt='' fill />
            </div>
          </section>
        </section>
      </section>

      <section className='mt-[1.125rem]'>
        <p className='max-w-[19.19rem] lg:max-w-[29rem]  text-center text-[0.675rem] lg:text-sm text-WhiteBody mx-auto'>
          © {year} PayForce - a product of CrowdForce - All Rights Reserved
        </p>
      </section>
    </section>
  )
}

export default FooterBottom
