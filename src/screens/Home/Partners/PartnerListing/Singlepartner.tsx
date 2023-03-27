import Image from 'next/image'
type Props = {
  imageURL: string
}

const Singlepartner = ({ imageURL }: Props) => {
  return (
    <div className='lg:h-[74px] lg:w-[110.92px]  overflow-hidden h-[76.81px] w-[60px] flex flex-wrap items-center'>
      <Image height={100} width={100} src={imageURL} alt='partner' />
    </div>
  )
}
export default Singlepartner
