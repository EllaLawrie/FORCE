import Image from 'next/image'

import { TextSummary } from '@/components/Text/TextSummary'
import Spacer from '@/components/Spacer'
import Personnel from './management.json'

export default function Management() {
  return (
    <Spacer classnames='lg:py-[8rem]'>
      <TextSummary
        top={
          <h3 className='text-sm font-medium text-secondary leading-wider'>
            Management
          </h3>
        }
        header='The force behind Crowdforce'
        paragraph='We have a team of experts with varying experiences across banking, consumer research, data analysis and finance. Our co-founders were part of the team that built the most successful banking solution for micro-finance banks in Sub-saharan Africa.'
        paragraph2='So no matter who you are or where you live in Nigeria, we are here because of you. We know the pain that comes with using a regular bank and we will make things work better for everyone.'
        bottom={
          <p className='font-medium text-base text-brandBlack leading-7 mt-3'>
            May the Force be with us all.
          </p>
        }
        containerStyles={'lg:w-9/12 lg:m-auto'}
      />

      <section className='mt-[3.688rem] flex flex-col lg:flex-row items-center justify-center gap-6'>
        {Personnel.management.map((item, index) => {
          return (
            <div key={item.name}>
              <figure>
                <Image
                  src={item.image}
                  width={264}
                  height={302}
                  alt={item.name}
                />
                <figcaption className='font-bold text-base text-center block mt-6 text-primary'>
                  {item.name}
                </figcaption>
                <span className='block mt-1 text-center text-WhiteBody'>
                  {item.role}
                </span>
              </figure>
            </div>
          )
        })}
      </section>
    </Spacer>
  )
}
