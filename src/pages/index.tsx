import {
  AllOffers,
  Downloadprompt,
  HomeHero,
  MediaMentions,
  MobileForm,
  Partner,
  Services,
  Signup,
  Testimonial
} from '@/screens/Home'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Crowdforce</title>
        <meta name='description' content='Crowdforce' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HomeHero />
        <Services />
        <AllOffers />
        <MobileForm />
        <Signup />
        <Testimonial />
        <Partner />
        <Downloadprompt />
        <MediaMentions />
      </main>
    </>
  )
}
