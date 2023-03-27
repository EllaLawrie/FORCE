import { useState, useEffect } from 'react'
import Image from 'next/image'

import Spacer from '@/components/Spacer'
import OfferList from './OfferList.json'
import SingleOffer from './SingleOffer'

const AllOffers = () => {
  const [activeOffer, setActiveOffer] = useState(2)

  useEffect(() => {
    let interval = setInterval(() => {
      changeOffer()
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [activeOffer])

  function changeOffer() {
    setActiveOffer((prev) => {
      return prev < 3 ? prev + 1 : prev === 3 ? 1 : prev
    })
  }

  return (
    <Spacer classnames='px-4 lg:px-[6.75rem] items-center flex flex-row gap-9 justify-between'>
      <section>
        {OfferList.offers.map((offer) => {
          return (
            <SingleOffer
              key={offer.id}
              service={offer.id}
              heading={offer.service}
              paragraph={offer.summary}
              navigateTo={offer.url}
              imageURL={offer.image}
              activeOffer={activeOffer}
              setActiveOffer={setActiveOffer}
            />
          )
        })}
      </section>
      <figure className='hidden lg:block'>
        <Image
          src={'/LaptopOffers.svg'}
          alt='laptop'
          height={347}
          width={660}
        />
      </figure>
    </Spacer>
  )
}

export default AllOffers
