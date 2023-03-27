import React from 'react'
import Spacer from '@/components/Spacer'
import Summary from './Summary'
import PaperPlaneRight from '@/components/Paperplaneright'
import AllPartners from './PartnerListing/AllPartners'

const Partner = () => {
  return (
    <Spacer classnames='relative overflow-hidden lg:pb-32'>
      <PaperPlaneRight />
      <Summary />
      <AllPartners />
    </Spacer>
  )
}

export default Partner
