import type { FC, PropsWithChildren } from 'react'

export const PageLagout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="h-screen flex   flex-col justify-center items-center px-12">
      <div className="w-[55rem] text-left lg:max-w-[55rem] tablet:w-auto">
        {children}
      </div>
    </main>
  )
}
