import { SetStateAction, Dispatch } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import Arrow from '@/components/Arrow'

type Props = {
  heading: string
  paragraph: string
  navigateTo: string
  imageURL: string
  activeOffer: number
  setActiveOffer: Dispatch<SetStateAction<number>>
  service: number
}

const SingleOffer = (props: Props) => {
  const {
    heading,
    paragraph,
    navigateTo,
    imageURL,
    activeOffer,
    setActiveOffer,
    service,
  } = props
  return (
    <section
      className={`flex lg:item-start lg:justify-start lg:gap-1 mb-8 lg:max-w-32`}
      onClick={() => {
        setActiveOffer(service)
      }}
    >
      <section
        className={`opacity-0 transition-all duration-1000 lg:mt-4 ${
          activeOffer === service && 'lg:opacity-100'
        }`}
      >
        <IoMdArrowDropright color='#F9AF21' width={16} height={24} />
      </section>

      <section
        className={`flex flex-col rounded-[5.38754px] py-4 px-5 bg-[#F5F9FA] lg:bg-white lg:opacity-40 cursor-pointer transition-all duration-1000 ${
          activeOffer === service && 'lg:bg-[#F5F9FA] lg:opacity-100'
        }`}
      >
        <h2 className='text-primary text-base font-semibold lg:mb-4'>
          {heading}
        </h2>
        <p className='text-sm font-normal text-lightBlue my-1 lg:mb-4'>
          {paragraph}
        </p>
        <a
          href={navigateTo}
          className='text-secondary text-xs flex items-center'
        >
          Learn More <Arrow classnames='stroke-secondary' />
        </a>
      </section>
      {/* <section className=''>
        <Image src={imageURL} alt={heading} />
      </section> */}
    </section>
  )
}

export default SingleOffer
