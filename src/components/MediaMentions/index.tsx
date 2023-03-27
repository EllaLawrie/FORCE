import React from 'react'
import Image from 'next/image'
import imageArr from './MediaMentions.json'

type Props = {
  classnames?: string
}

export default function MediaMentions({ classnames }: Props) {
  return (
    <>
      <section
        className={`bg-SoftBackgroundGray  overflow-x-scroll w-full lg:px-[5.75rem] ${classnames}`}
      >
        <div className='xl:px-[2.496rem] w-full pl-4 py-[2.875rem]'>
          <h3 className='text-primary font-bold'>Media mentions</h3>
          <div className='flex items-center w-full mt-[4.8125rem] gap-[3.625rem] lg:gap-12'>
            {imageArr.map((item) => (
              <Image
                key={item.height}
                src={item.src}
                alt=''
                width={item.width}
                height={item.height}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
