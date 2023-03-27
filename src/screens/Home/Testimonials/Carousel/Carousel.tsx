import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

// LOCAL IMPORTS
import Achievements from './Achievements.json'
import NextArrow from './Next'
import SingleAchievement from './SingleAchievement'

type Props = {}

const Carousel = (props: Props) => {
  return (
    <section className='mt-10'>
      <div className='lg:hidden'>
      <AliceCarousel
        mouseTracking
        disableDotsControls={true}
        infinite={true}
        renderNextButton={() => {
          return (
            <p className='w-8 h-8 items-center flex justify-center absolute right-0 top-0 bg-secondary rounded-full'>
              <NextArrow />
            </p>
          )
        }}
        renderPrevButton={() => {
          return <p className='hidden' />
        }}
      >
        {Achievements.map((achievement) => (
          <SingleAchievement
            key={achievement.metric}
            imageURL={achievement.image}
            paragraph={achievement.suammry}
            heading={achievement.metric}
          />
        ))}
      </AliceCarousel>
      </div>
      <div className='hidden lg:flex gap-x-36 lg:mb-14'>
      {Achievements.map((achievement) => (
          <SingleAchievement
            key={achievement.metric}
            imageURL={achievement.image}
            paragraph={achievement.suammry} 
            heading={achievement.metric}
          />
        ))}
      </div>
      
    </section>
  )
}

// width: 32px;
// height: 32px;
// left: 337px;
// top: 3483px;

export default Carousel
