import Hero from '@/components/Hero/Hero'
import HeroLeft from '@/components/Hero/HeroLeft'
import PaperPlane from '@/components/PaperPlane'
import HeroRight from '@/components/Hero/HeroRight'
import Image from 'next/image'

type Props = {}
const HomeHero = (props: Props) => {
  return (
    <Hero
      PaperPlane={<PaperPlane classnames='lg:left-20 lg:-top-[80px]' />}
      HeroLeft={
        <HeroLeft
        classnames='incomplete_circle justify-center'
          heading='Financial services and reliable data at your finger tips'
          subHeading='Fintech - Big data'
          paragraph='We make financial services and reliable data easily accessible to everyone. We have the largest financial service and offline distribution network in Africa.'
          arrow={true}
          leftButton={true}
          leftButtonText='Get started'
          rightButton={true}
          rightButtonText='Learn More'
        />
      }
      HeroRight={
        <HeroRight
        classnames='hidden lg:block w-full'
        ImageSectionsm={ <Image src={'/banner.png'} alt='POS' width={300} height={250} />}
        ImageSection= {<Image src={'/bannerLg.svg'} alt='POS' fill className='Hero-image'  />}
        />
    }
    />
  )
}
export default HomeHero