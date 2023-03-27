import { TextSummary } from '@/components/Text/TextSummary'
import Spacer from '@/components/Spacer'
import Button from '@/components/Button/Button'

export default function RolesCta() {
  return (
    <Spacer>
      <TextSummary
        header='Join the crowdforce team'
        paragraph=''
        containerStyles={'lg:w-6/12 lg:m-auto'}
        bottom={
          <Button className='text-white mt-1'>See available roles</Button>
        }
      />
    </Spacer>
  )
}
