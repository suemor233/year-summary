import { defineConfig } from '~/types/config'

export default defineConfig({
  baseConfig: {
    siteTitle: '2022 年终总结',
    backgroundImage: 'https://y.suemor.com/imagesyear-bg.png',
  },
  headerConfig: {
    title: '2022 年终总结',
    avatar: 'https://y.suemor.com/imagesavatar.jpeg',
    github: 'https://github.com/suemor233/year-summary',
  },
  pagesConfig: {
    firstConfig: {
      title: '2022',
      subtitle: '年终总结',
    },
    centerConfig: [
      {
        title: '一月',
        subtitle: '决定学习前端',
        description: '中职组 Android 开发比赛过后，选择了往前端领域发展。',
        image: { src: 'https://y.suemor.com/imagessmarthome-prize.jpg' },
      },
      {
        title: '寒假',
        subtitle: '开始三件套的学习',
        description: '了解前端最基础的语法，并搭建了第一个 Hexo 博客。',
      },
      {
        title: '三月',
        subtitle: '黑暗的一月',
        description: '学校过于糟糕，被迫参加教师技能大赛，代替老师写了个 App。',
      },
      {
        title: '四月',
        subtitle: '开始前端工程化的探索',
        description:
          '准备学习 Vue2，但发现自己连 es6 都不会，只能回滚基础，最后在懵懵懂懂中学完了 Vue2 的基础部分。',
      },
      {
        title: '五月',
        subtitle: '代码先从模仿写起',
        description:
          '尝试学习 mx-admin 的代码，提了几个简单的 PR，逐渐补足我的知识盲区，并仿照其架构写了一个简单的管理系统。',
        image: {
          src: 'https://fastly.jsdelivr.net/gh/suemor233/static@main/img/n-admin-6.jpg',
        },
      },
      {
        title: '暑假',
        subtitle: '开始接触 React',
        description:
          '有了先前的基础，整体学习轻松许多，并用 Next.js 写了个简单的引导页。同时也初步学习了 Node.js 和 NestJS，尝试进行全栈开发。',
        image: {
          src: 'https://fastly.jsdelivr.net/gh/suemor233/static@main/img/nav1.jpg',
        },
      },
      {
        title: '九月',
        subtitle: '噩梦再袭',
        description:
          '先是强制去参加完去不懂的硬件比赛。又是被莫名其妙的拉进系部创新团队当纯纯工具人，最终自己写了一个失物招领微信小程序。',
        image: {
          src: 'https://fastly.jsdelivr.net/gh/suemor233/static@main/img/IMG_0616.PNG',
          width: 250,
          height: 700,
        },
      },
      {
        title: '剩下几个月',
        subtitle: '继续前行',
        description:
          '用 Next.js 写了一个自己的博客，以及初步学习了下打包的相关知识。',
        image: { src: 'https://y.suemor.com/imagessuemor-blog-home-3.jpg' },
      },
    ],
    lastConfig: {
      title: '最后',
      subtitle: '感谢观看，欢迎与我成为朋友哦。',
    },
  },
  mxConfig: {
    apiEndpoint:  'http://localhost:2333'
   ,
    note: '10',
  },
})
