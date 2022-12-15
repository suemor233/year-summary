import config from '~/../config'
import PageCenter from '~/components/in-page/Center'
import FirstPage from '~/components/in-page/First'
import LastPage from '~/components/in-page/Last'

import { HomeLayout } from '~/components/layouts/BasicLayout/HomeLayout'
import { PageLagout } from '~/components/layouts/BasicLayout/PageLayout'

const Home = () => {
  return (
    <HomeLayout>
      <FirstPage />
      <CenterPage />
      <LastPage />
    </HomeLayout>
  )
}

const CenterPage = () => {
  return (
    <>
      {config.pagesConfig?.centerConfig?.map((item) => (
        <PageLagout key={item.title}>
          <PageCenter {...item} />
        </PageLagout>
      ))}
    </>
  )
}

export default Home
