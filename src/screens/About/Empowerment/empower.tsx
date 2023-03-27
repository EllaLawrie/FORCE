import { TextSummary } from '@/components/Text/TextSummary'
import Spacer from '@/components/Spacer'
import Humanity from './empowerment.json'
import Image from 'next/image'

export default function Empowerment() {
  return (
    <Spacer classnames='lg:py-[8rem]'>
      <TextSummary
        top={
          <h3 className='text-sm font-medium text-secondary leading-wider'>
            How we are
          </h3>
        }
        header='Putting the force in Crowdforce'
        paragraph='We empower humanity with digital inclusion and help businesses, NGOs, and the government find the industry & market research they need. Founded in 2013, CrowdForce provides trusted industry and market research for public and private organizations, and financial services to individuals through our agent network. We’re located in the United States of America and Nigeria with 54 employees and 13000+ active agents/merchants. We’re proud of the work we do, our employees and our clients.'
        containerStyles={'lg:w-6/12 lg:m-auto'}
      />

      <section className='flex items-center justify-center gap-6'>
        {Humanity.empowerment.map((item) => {
          return (
            <div key={item.image} className='mt-4'>
              <Image src={item.image} width={550} height={332} alt='' />
            </div>
          )
        })}
      </section>
    </Spacer>
  )
}
