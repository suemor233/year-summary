import { gsap } from 'gsap'
import React, { useEffect } from 'react'

const ThirdPage = () => {
  useEffect(() => {
    gsap.set('.month2', {
      scale: 0.1,
      autoAlpha: 0,
      x: '-50vw',
    })

    gsap.set('.detail2', {
      autoAlpha: 0,
      x: '100vw',
    })
    const gsaptime = gsap.timeline({
      scrollTrigger: {
        trigger: '.month2',
        scrub: 1,
        markers: true,
        start: 'top 100%',
        end: 'top 50%',
      },
    })
    gsaptime
      .to('.month2', {
        scale: 1,
        autoAlpha: 1,
        x: 0,
      })
      .to('.detail2', {
        autoAlpha: 1,
        x: 0,
      })
  }, [])
  return (
    <div className="h-screen flex max-w-[52rem] flex-col justify-center">
      <div className="text-5xl month2">
        <h1 className="leading-[1]">二月,</h1>
        <h1 className="leading-[2]">开始了前端的学习</h1>
      </div>
      <p className="text-3xl text-gray-700 detail2">
        因为有少许三件套的基础，我便直接开始了前端工程化的探索
      </p>
      <p className="text-3xl text-gray-700 detail2">
        因为有少许三件套的基础，我便直接开始了前端工程化的探索
      </p>
    </div>
  )
}

export default ThirdPage
