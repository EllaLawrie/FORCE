import { ReactNode } from 'react'
import Nav from '../Navigation/Nav'

type Props = {
  HeroLeft: ReactNode
  HeroRight: ReactNode
  PaperPlane?: ReactNode
  classnames?: string
}
const Hero = (props: Props) => {
  const { HeroLeft, HeroRight, PaperPlane, classnames } = props
  return (
    <section className='hero_section  lg: hero_section_lg '>
      <Nav />
      <section
        className={`hero flex flex-wrap lg:flex-nowrap items-center relative ${classnames}`}
      >
        {PaperPlane}
        {HeroLeft}
        {HeroRight}
      </section>
    </section>
  )
}
export default Hero
