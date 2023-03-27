import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/Button'

function NavLinks() {
  return (
    <section className='hidden lg:flex lg:items-center lg:justify-start w-full px-[4.625rem] gap-[2.625rem] py-[1.25rem]'>
      <Image
        src={'/MainLogo.svg'}
        alt='Crowdforce Log'
        height={150}
        width={150}
      />
      <nav className='flex item-center justify-between grow'>
        <ul className='flex items-center justify-start gap-10'>
          <li>
            <Link className='text-[13px] text-white' href='/'>
              Payforce
            </Link>
          </li>
          <li>
            <Link className='text-[13px] text-white' href='/about'>
              About Us
            </Link>
          </li>
          <li>
            <Link className='text-[13px] text-white' href='/'>
              FAQs
            </Link>
          </li>
        </ul>

        <div className='flex justify-start items-center gap-10'>
          <Link className='text-[13px] text-white' href='/'>
            Career
          </Link>
          <Button
            className='hidden lg:w-48 lg:block text-primary'
            btnType='secondary'
          >
            Contact Us
          </Button>
        </div>
      </nav>
    </section>
  )
}

export default NavLinks
