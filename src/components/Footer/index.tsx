import Spacer from '../Spacer'
import FooterBottom from './FooterBottom'
import FooterNavLinks from './FooterNavLinks'
import FooterSocialLinks from './FooterSocialLinks'

function Footer() {
  return (
    <Spacer>
      <footer className='py-[2.3125rem] px-4 lg:px-0'>
        <FooterNavLinks />
        <FooterSocialLinks />
        <FooterBottom />
      </footer>
    </Spacer>
  )
}

export default Footer
