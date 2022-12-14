import '~/assets/styles/main.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Header from '~/components/layout/BasicLayout/Header'

gsap.registerPlugin(ScrollTrigger)
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>2022 年终总结</title>
      </Head>
      <ThemeProvider attribute="class">
        <Header />
        <Component {...pageProps} />
        <div className="bg-pic" />
      </ThemeProvider>
    </>
  )
}
