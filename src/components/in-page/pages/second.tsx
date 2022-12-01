import { gsap } from 'gsap'
import React, { useEffect } from 'react'

const SecondPage = () => {
  useEffect(() => {
    gsap.set('.month', {
      scale: 0.1,
      autoAlpha: 0,
      rotation: 180,
    })

    gsap.set('.detail', {
      autoAlpha: 0,
    })
    const gsaptime = gsap.timeline({
      scrollTrigger: {
        trigger: '.month',
        scrub: 1,
        markers: true,
        start: 'top 100%',
        end: 'top 30%',
      },
    })
    gsaptime
      .to('.month', {
        scale: 1,
        autoAlpha: 1,
        rotation: 360,
        ease: 'power2',
      })
      .to('.detail', {
        autoAlpha: 1,
      })
  }, [])
  return (
    <div className="h-screen flex  max-w-[52rem] flex-col justify-center">
      <div className="text-5xl month">
        <h1 className="leading-[1]">一月,</h1>
        <h1 className="leading-[2]">开始了前端的学习</h1>
      </div>
      <p className="text-3xl detail text-gray-700">
        因为有一点三件套的基础，我便直接开始了前端工程化的探索
      </p>
    </div>
  )
}

export default SecondPage
