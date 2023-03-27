import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { ThemeContextProvider } from '@/themes/context/themeContext'
import { Be_Vietnam_Pro } from '@next/font/google'
import type { AppProps } from 'next/app'

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['100', '200', '300', '600', '400', '700', '800', '900', '500']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${BeVietnamPro.style.fontFamily};
        }
      `}</style>
      <ThemeContextProvider>
        <Component {...pageProps} />
        <Footer />
      </ThemeContextProvider>
    </>
  )
}
