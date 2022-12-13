import confetti from 'canvas-confetti'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'

import { getScrollTop } from '~/utils/scrollTop'

import useIsomorphicLayoutEffect from '../../layout/AnimationLayout/useIsomorphicLayoutEffect'

const FirstPage = () => {
  const iconRef = useRef<HTMLDivElement>(null)
  const yearRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const firework = () => confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.7 },
  })

  useIsomorphicLayoutEffect(() => {
    const gsapTime = gsap.timeline()
    gsap.set(yearRef.current, {
      x: '-50vw',
      opacity: 1,
      scale: 0.1,
    })
    gsap.set(titleRef.current, {
      x: '100vw',
      opacity: 1,
      scale: 0.1,
    })

    gsapTime
      .to(yearRef.current, {
        x: '0%',
        scale: 1,
        duration: 0.8,
        ease: 'back',
      })
      .to(titleRef.current, {
        x: '0%',
        duration: 0.8,
        scale: 1,
        ease: 'back',
        onComplete: () => {
          if (getScrollTop() < 250) {
            firework()
          }
        },
      })
      .to(iconRef.current, {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1,
        opacity: 1,
      })
  }, [])
  return (
    <div
      className={
        'h-[98vh] flex items-center text-3xl flex-col text-blue-400 gap-3 max-w-[52rem]'
      }
    >
      <div className="flex-[4] justify-center flex flex-col mt-[10rem] cursor-pointer select-none" onClick={firework}>
        <h1
          className="text-9xl font-ui year opacity-0 text-center"
          ref={yearRef}
        >
          2022
        </h1>
        <h2 className="text-7xl font-bold opacity-0 title" ref={titleRef}>
          年度总结
        </h2>
      </div>
      <div
        className="flex-1 text-blue-500 chevron-down text-5xl opacity-0 "
        ref={iconRef}
      >
        <IoChevronDownOutline />
      </div>
    </div>
  )
}

export default FirstPage
