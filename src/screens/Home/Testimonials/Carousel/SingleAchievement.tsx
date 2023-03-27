import Image from 'next/image'

type Props = {
  imageURL: string
  heading: string
  paragraph: string
}

const SingleAchievement = ({ imageURL, heading, paragraph }: Props) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex mb-5 items-center '>
        <div className='lg:h-[52px] lg:w-[52px] rounded-lg overflow-hidden mr-5 relative h-[42px] w-[42px]'>
          <Image src={imageURL} alt={heading} fill />
        </div>
        <h2 className='font-bold text-primary text-2xl lg:text-5xl'>
          {heading}
        </h2>
      </div>
      <p className='font-extralight text-base lg:text-md text-lightBlue lg:w-[245px]'>
        {paragraph}
      </p>
    </div>
  )
}

export default SingleAchievement

// line-height: 61px;
