import '~/assets/styles/main.css'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import type { FC, PropsWithChildren } from 'react'

import Header from '~/components/layouts/BasicLayout/Header'
import config from '~/config'
import { gsapPlugins } from '~/utils/plugin'

gsapPlugins.registerAndRun([ScrollTrigger])

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const HeadView = () => {
    return (
      <Head>
        <title>{config.baseConfig?.siteTitle}</title>
      </Head>
    )
  }

  const BackGroundImage = () => {
    return (
      <div
        className="fixed inset-0 opacity-80 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${config.baseConfig?.backgroundImage})`,
        }}
      />
    )
  }
  return (
    <>
      <HeadView />
      <ThemeProvider attribute="class">
        <Header />
        {children}
        <BackGroundImage />
      </ThemeProvider>
    </>
  )
}
