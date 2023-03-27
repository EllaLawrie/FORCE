import AllDownloadButtons from '@/components/Button/Downloadprompt/AllDownloadButtons'
import Spacer from '@/components/Spacer'
import { TextSummary } from '@/components/Text/TextSummary'
import Image from 'next/image'
import Button from '@/components/Button/Button'

type Props = {}

const Signup = (props: Props) => {
  return (
    <Spacer classnames='bg-primary lg:grid lg:grid-cols-2 lg:px-1.5'>
      <div className='hidden md:flex items-center justify-center'>
        <div>
          <Image src='/weAreImage.png' alt='weAre' width={453} height={412} />
        </div>
      </div>
      <div className='items-center flex flex-col lg:justify-center lg:items-start'>
        <TextSummary
          top={
            <h3 className='text-sm font-medium text-secondary leading-wider'>
              We are
            </h3>
          }
          hStyles='text-white lg:text-[32px]  lg:text-left lg:leading-normal'
          pStyles='text-[#fff] lg:text-left lg:w-11/12 lg:mb-6'
          header={`Empowering Africa’s financial future one transaction at a time.`}
          paragraph='The easy and convenient way for Africans to manage their money. Spend, save, send and invest money across Africa.'
          containerStyles={'lg:items-start w-10/12'}
        />
        <AllDownloadButtons />
        <Button
          className='hidden mt-5 lg:w-[22.25rem] lg:block'
          btnType='secondary'
        >
          Create free account
        </Button>
      </div>
    </Spacer>
  )
}
export default Signup
