import Hero from '@/components/Hero/Hero';
import HeroLeft from '@/components/Hero/HeroLeft';
import HeroRight from '@/components/Hero/HeroRight';
import Image from 'next/image';

type Props={}

const AboutHero=(Props:Props)=>{

    return(
        <Hero
        classnames='pt-24 pb-44 '
        HeroLeft= {<HeroLeft
            pclassnames= 'text-secondary '
            heading='About Crowdforce'
            subHeading='Know'
            paragraph='To be the company our customers wants us to be, it takes an eclectic group of passionate operators. We value flat hierarchies, clear communication, full ownership and responsibility.'
        />}
        
        HeroRight={<HeroRight
        classnames='lg:pr-20 flex items-center px-4 lg:px-0'
        ImageSection={<Image src={'/AboutImage.png'}  alt='Humans of Crowdforce' width={552} height={308}/>}
        />}
        />
    )
}

export default AboutHero