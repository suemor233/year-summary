import confetti from 'canvas-confetti'
import clsx from 'clsx'
import { gsap } from 'gsap'
import type {
  ButtonHTMLAttributes,
  FC,
  ForwardedRef,
  PropsWithChildren,
} from 'react'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { message } from 'react-message-popup'

import config from '~/../config'
import { PageLagout } from '~/components/layouts/BasicLayout/PageLayout'
import useIsomorphicLayoutEffect from '~/hooks/use-isomorphic-layout-effect'
import { useThumbsUpRequest } from '~/services/thumbsUp'
import { getLike, setLike } from '~/utils/cookie'
import { isMobile } from '~/utils/mobile'



const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
}

const LastPage = () => {
  const [isLike, setisLike] = useState<boolean>(false)

  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { like, reFetch } = useThumbsUpRequest()
  useIsomorphicLayoutEffect(() => {
    animation()
  }, [])

  useEffect(() => {
    setisLike(getLike() ?? false)
  }, [])

  const animation = useCallback(() => {
    gsap.set(titleRef.current, {
      scale: 0.1,
      autoAlpha: 0,
      x: isMobile() ? undefined : '-50vw',
    })

    gsap.set(contentRef.current, {
      autoAlpha: 0,
      x: isMobile() ? undefined : '100vw',
    })

    gsap.set(buttonRef.current, {
      autoAlpha: 0,
    })
    const gsaptime = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        scrub: 1,
        start: 'top 100%',
        end: 'top 50%',
      },
    })
    gsaptime
      .to(titleRef.current, {
        scale: 1,
        autoAlpha: 1,
        x: 0,
      })
      .to(contentRef.current, {
        autoAlpha: 1,
        x: 0,
      })
      .to(buttonRef.current, {
        autoAlpha: 1,
      })
  }, [])
  const handleClick = async () => {
    const res = await fetch(
      `${config.mxConfig?.apiEndpoint}/notes/like/${config.mxConfig?.note}`,
    ).then((res) => res.ok)

    if (!res) {
      setLike('true')
      setisLike(true)
      return message.error('你已经点过赞了')
    }
    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
    message.success('点赞成功')
    if (like?.count) {
      like.count.like++
    }
    reFetch()
    setisLike(true)
    setLike('true')
  }

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star'],
    })

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle'],
    })
  }

  return (
    <PageLagout>
      <div className="text-5xl text-pink-400" ref={titleRef}>
        <h1 className="leading-[2]" ref={titleRef}>
          {config.pagesConfig?.lastConfig?.title || '最后'},
        </h1>
      </div>
      <p className="text-3xl  leading-10 text-pink-400" ref={contentRef}>
        {config.pagesConfig?.lastConfig?.subtitle ||
          '感谢观看，欢迎与我成为朋友哦。'}
      </p>
      <Button
        className={clsx('mt-7')}
        onClick={handleClick}
        ref={buttonRef}
        icon={<FiThumbsUp />}
        isLike={isLike}
      >
        {like?.count.like}
      </Button>
      <canvas />
    </PageLagout>
  )
}

interface ButtonType {
  ref?: ForwardedRef<HTMLButtonElement>
  icon?: React.ReactNode
  isLike?: boolean
}

const Button: FC<
  PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & ButtonType
> = forwardRef(({ isLike, icon, children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={clsx(
        `px-6 py-3 rounded-md text-white hover:bg-orange-500 transition-all duration-100 active:scale-90 active:bg-orange-600 flex items-center gap-2 text-xl`,
        className,
        isLike ? '!bg-red-600' : 'bg-orange-400',
      )}
    >
      {icon}
      {children}
    </button>
  )
})

export default LastPage
