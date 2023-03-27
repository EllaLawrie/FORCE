import Image from 'next/image'

const HeroRight = () => {
  return (
    <section className='relative flex h-96 lg:h-full overflow-hidden w-full lg:py-14 lg:pl-32'>
      <section className='absolute bottom-0 right-0 lg:hidden'>
        <Image src={'/banner.png'} alt='POS' width={300} height={250} />
      </section>
      <section className='hidden lg:block'>
        <Image src={'/bannerLg.svg'} alt='POS' width={500} height={500} />
      </section>
    </section>
  )
}

//     clip-path: circle(194% at 50% -50%);

export default HeroRight
