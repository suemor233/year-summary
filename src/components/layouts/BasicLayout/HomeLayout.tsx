import type { FC, PropsWithChildren } from 'react'

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="pt-20 flex flex-col items-center w-full">{children}</div>
  )
}