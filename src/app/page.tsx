"use client"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

import FirstPage from '~/components/in-page/pages/first'
import SecondPage from '~/components/in-page/pages/second'
import ThirdPage from '../components/in-page/pages/third';

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
  return (
    <div className="pt-20 flex flex-col items-center w-full">
      <FirstPage />
      <SecondPage />
      <ThirdPage/>
      {/* <ThirdPage/> */}
    </div>
  )
}

export default Page
