import Arrow from '@/components/Arrow'
import Button from '@/components/Button/Button'
import Paragraph from '@/components/Paragraph/Paragraph'

type Props = {}

const HeroLeft = (props: Props) => {
  return (
    <section className='flex flex-col relative py-12 lg:py-20 px-12 lg:pl-32 items-center pt-8 px-8 overflow-hidden lg:items-start'>
      <section className='items-center justify-center flex incomplete_circle h-2.65 w-11.18 lg:self-start'>
        <Paragraph classnames='font-medium text-sm capitalize leading-5'>
          Fintech - Big data
        </Paragraph>
      </section>
      <h1 className='text-3_8XL font-bold leading-widen text-center lg:text-left text-white my-6'>
        Financial services and reliable data at your finger tips
      </h1>
      <Paragraph classnames='font-thin lg:font-light lg:text-left '>
        We make financial services and reliable data easily accessible to
        everyone. We have the largest financial service and offline distribution
        network in Africa.
      </Paragraph>
      <section className='flex flex-col flex-wrap lg:flex-row lg:flex-nowrap items-center justify-center lg:justify-start '>
        <Button btnType='secondary' className='my-6'>
          Get started
        </Button>

        <Button btnType='ghost' className='text-secondary group hover:text-white hover:bg-transparent'>
          Learn More
          <Arrow classnames='stroke-secondary group-hover:stroke-white' />
        </Button>
      </section>
      <div className='h-[40px] w-[40px] border border-dashed border-secondary rounded-full hidden lg:flex flex-row items-center justify-center self-end mt-24'>
        {' '}
        <Arrow classnames='rotate-[90deg] stroke-secondary ' />{' '}
      </div>
    </section>
  )
}

export default HeroLeft
