import type { FC, PropsWithChildren } from 'react'

export const FirstLagout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        'h-[98vh] flex items-center text-3xl flex-col text-blue-400 gap-3 max-w-[52rem]'
      }
    >
      {children}
    </div>
  )
}
