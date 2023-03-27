import Spacer from '@/components/Spacer'
import { TextSummary } from '@/components/Text/TextSummary'
import VideoPlayer from './VideoPlayer'

type Props = {}

const Top = () => {
  return (
    <div className='bg-[#EBF3F5] w-[112px] h-10 rounded-[3.52709px] items-center flex justify-center'>
      <p className='text-sm font-normal text-primary'>Mobileform</p>
    </div>
  )
}

const MobileForm = (props: Props) => {
  return (
    <Spacer classnames='flex flex-col items-center px-6'>
      <TextSummary
        hStyles='lg:w-[350px]'
        pStyles='lg:w-[550px] pb-8'
        top={<Top />}
        header='Get accessible real-time data in Africa'
        paragraph='MobileForms is a Data collection and analytics platform that empowers decision-makers with real-time actionable intelligence gotten directly from individuals living in African communities.'
      />
      <VideoPlayer />
    </Spacer>
  )
}

export default MobileForm
