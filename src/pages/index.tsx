import React from 'react'

import { pageData } from '~/../config'
import FirstPage from '~/components/in-page/pages/first'
import { PageLagout } from '~/components/layout/BasicLayout/PageLayout'
import PageContent from '../components/layout/BasicLayout/content/PageContent'



const Home = () => {
  return (
    <div className="pt-20 flex flex-col items-center w-full">
      <FirstPage />
      {pageData.map((item) => (
        <PageLagout key={item.title}>
          <PageContent {...item} />
        </PageLagout>
      ))}
    </div>
  )
}

export default Home
