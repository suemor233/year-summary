import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoCloudyNightOutline, IoPartlySunnyOutline } from 'react-icons/io5'

import { useColorMode } from '~/hooks/use-color-mode'

const Header = () => {
  return (
    <nav
      className={
        'min-h-[4rem] flex items-center px-2 justify-between fixed w-full shadow z-10 backdrop-blur-sm'
      }
    >
      <Link className="flex gap-2 items-center cursor-pointer" href={'/'}>
        <Image
          src={'https://y.suemor.com/imagesavatar.jpeg'}
          height={33}
          width={33}
          alt="头像"
          className="rounded-full"
        />
        <h1 className="text-xl text-pink-400">2022 年度总结</h1>
      </Link>
      <Icons />
    </nav>
  )
}

const Icons = () => {
  const { isDark, toggleColorMode } = useColorMode()
  return (
    <div className="flex gap-3 items-center">
      <Link
        href={'https://github.com/suemor233'}
        target="_blank"
        title="github"
      >
        <FaGithub size={25} />
      </Link>
      <div
        onClick={() => toggleColorMode()}
        className="cursor-pointer"
        title={`当前: ${isDark ? '夜间模式' : '白天模式'}`}
      >
        {isDark ? (
          <IoCloudyNightOutline size={20} />
        ) : (
          <IoPartlySunnyOutline size={20} />
        )}
      </div>
    </div>
  )
}

export default Header
