import { TextSummary } from '@/components/Text/TextSummary'
import Spacer from '@/components/Spacer'

const Summary = () => {
  return (
    <Spacer classnames='pt-36 pb-0'>
      <TextSummary
        top={
          <h3 className='text-sm font-medium text-secondary leading-wider lg:text-center lg:text-base'>
            Our partners
          </h3>
        }
        header='Trusted by thousands of businesses.'
        hStyles='lg:text-center'
        paragraph='Meet the dreamers and the doers.'
        pStyles='lg:hidden'
        containerStyles={'mb-16'}
      />
    </Spacer>
  )
}

export default Summary
