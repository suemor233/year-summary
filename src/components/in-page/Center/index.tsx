import { gsap } from 'gsap'
import Image from 'next/image'
import type { FC } from 'react'
import { useRef } from 'react'
import type { CenterConfig } from '~/types/config'

import useIsomorphicLayoutEffect from '../../../hooks/use-isomorphic-layout-effect'
const PageCenter: FC<CenterConfig> = ({
  title,
  subtitle,
  description,
  image,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.set(textRef.current, {
      autoAlpha: 0,
    })

    image &&
      gsap.set(imageRef.current, {
        scale: 0,
        autoAlpha: 0,
      })
    const gsaptime = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        scrub: 1,

        start: 'start 90%',
        end: 'center 60%',
      },
    })
    gsaptime.to(textRef.current, {
      autoAlpha: 1,
    })
    image &&
      gsaptime.to(imageRef.current, {
        scale: 1,
        autoAlpha: 1,
      })
  }, [])

  return (
    <>
      <div ref={ref}>
        <section ref={textRef}>
          <div className="text-4xl flex flex-col gap-5 text-pink-400">
            <h1>{title},</h1>
            <h2>{subtitle}</h2>
          </div>
          <p className="text-2xl text-pink-400 leading-[1.6] mt-3">
            {description}
          </p>
        </section>

        {image && (
          <div ref={imageRef} className="w-full flex justify-center">
            <Image
              src={image.src}
              alt="比赛奖状"
              width={image.width ?? 900}
              height={image.height ?? 600}
              className="mt-5"
            />
          </div>
        )}
      </div>
    </>
  )
}

export default PageCenter
