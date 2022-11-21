import clsx from 'clsx'
import { gsap } from 'gsap'
import React from 'react'
import { useEffect } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'

const FirstPage = () => {
  useEffect(() => {
    const gsapTime = gsap.timeline()
    gsap.set('.year', {
      x: '-50vw',
      opacity: 1,
      scale: 0.1,
    })
    gsap.set('.title', {
      x: '100vw',
      opacity: 1,
      scale: 0.1,
    })

    gsapTime
      .to('.year', {
        x: '0%',
        scale: 1,
        duration: .8,
        ease: 'back',
      })
      .to('.title', {
        x: '0%',
        duration: .8,
        scale: 1,
        ease: 'back',
      })
      .to('.chevron-down', {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1,
        opacity: 1,
      })
  }, [])
  return (
    <div
      className={clsx(
        'h-[98vh] flex items-center text-3xl flex-col text-blue-400 gap-3 max-w-[52rem]',
        'first',
      )}
    >
      <div className="flex-[4] justify-center flex flex-col mt-[10rem]">
        <h1 className="text-9xl font-ui year opacity-0 text-center">2022</h1>
        <h2 className="text-7xl font-bold opacity-0 title">年度总结</h2>
      </div>
      <div className="flex-1  text-blue-500 chevron-down text-4xl opacity-0 ">
        <IoChevronDownOutline />
      </div>
    </div>
  )
}

export default FirstPage
