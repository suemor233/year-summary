import '~/assets/styles/main.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ThemeProvider } from 'next-themes'
import Header from '~/components/layout/BasicLayout/Header'

gsap.registerPlugin(ScrollTrigger)
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
      <div className="bg-pic" />
    </ThemeProvider>
  )
}
