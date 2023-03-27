import Spacer from '@/components/Spacer'
import { TextSummary } from '@/components/Text/TextSummary'

type Props = {}

const Services = (props: Props) => {
  return (
    <Spacer>
      <TextSummary
        top={
          <h3 className='text-sm font-medium text-secondary leading-wider'>
            Payforce
          </h3>
        }
        header='Offering A1 financial solutions for small and large businesses'
        paragraph='We provide seamless product experience, and unique tools to help grow your business.  here are our product offerings.'
        containerStyles={'lg:items-start lg:w-7/12'}
        pStyles='lg:text-left'
        hStyles='lg:text-left'
      />
    </Spacer>
  )
}

export default Services
