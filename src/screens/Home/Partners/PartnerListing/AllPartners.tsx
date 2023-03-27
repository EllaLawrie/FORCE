import Singlepartner from './Singlepartner'
import Partnerslist from './Partnerslist.json'

type Props = {}

const AllPartners = () => {
  return (
    <section className='flex flex-wrap justify-center gap-x-4 lg:gap-8'>
      {Partnerslist.partnerlist.map((partner) => (
        <Singlepartner key={partner.image} imageURL={partner.image} />
      ))}
    </section>
  )
}
export default AllPartners
