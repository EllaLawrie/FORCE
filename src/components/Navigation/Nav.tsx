import { Logo, NavItems } from './index'
import NavLinks from './NavLinks'

type Props = {}

const Nav = (props: Props) => {
  return (
    <header>
      <nav
        aria-label='Crowdforce Navigation'
        className='flex items-center justify-between bg-white nav lg:justify-start lg:bg-transparent h-15 px-5 py-[1.25rem] lg:h-20 lg:px-16'
      >
        <Logo />
        <NavItems />
        <NavLinks />
      </nav>
    </header>
  )
}

export default Nav
