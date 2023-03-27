import Button from '@/components/Button/Button'
import Spacer from '@/components/Spacer'
import { TextSummary } from '@/components/Text/TextSummary'

type Props = {}

const Signup = (props: Props) => {
  return (
    <Spacer classnames='pt-28 pb-28 bg-primary items-center flex flex-col'>
      <TextSummary 
        hStyles='text-white'
        pStyles='text-[#fff]'
        header={'Win with Crowdforce'}
        header2={'Join thousands of successful businesses'}
        paragraph='Businesses trust Crowdforce for all their business needs'
      />
      <Button btnType='secondary'>Get started</Button>
    </Spacer>
  )
}

export default Signup
