import { config } from '~/../config'
import Finally from '~/components/in-page/pages/finally'
import FirstPage from '~/components/in-page/pages/first'
import PageContent from '~/components/layout/BasicLayout/content/PageContent'
import { PageLagout } from '~/components/layout/BasicLayout/PageLayout'



const Home = () => {
  return (
    <div className="pt-20 flex flex-col items-center w-full">
      <FirstPage />
      {/* {config.pageData.map((item) => (
        <PageLagout key={item.title}>
          <PageContent {...item} />
        </PageLagout>
      ))} */}
      <Finally/>
    </div>
  )
}

export default Home
