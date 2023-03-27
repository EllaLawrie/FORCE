import Spacer from '@/components/Spacer'
import Carousel from './Carousel/Carousel'
import AllFeedbacks from './Customers/AllFeedbacks'
import Summary from './Summary'

type Props = {}

const Testimonial = (props: Props) => {
  return (
    <Spacer classnames='pt-0 pb-0 overflow-hidden lg:flex lg:flex-col px-6'>
      <Summary />
      <Carousel />
      <AllFeedbacks />
    </Spacer>
  )
}

export default Testimonial
