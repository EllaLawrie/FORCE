import {
  Management,
  Empowerment,
  RolesCta,
  AboutHero,
  AllProgress,
  MediaMentions,
} from '@/screens/About'
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
        <AboutHero />
        <Management />
        <AllProgress />
        <Empowerment />
        <RolesCta />
        <MediaMentions classnames='lg:mt-[8rem] lg:mb-[1.5rem]' />
      </main>
    </>
  )
}
