import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/docs/',
  lang: 'zh-CN',
  title: 'VuePress',
  description: '个人知识库',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      {
        text: '知识库',
        link: '/subassembly/directives/limitNumber.md'
      }
    ],
    sidebarDepth: 3, // 本页面的侧边栏深度
    contributors: true,//贡献者列表
    lastUpdated: true,//最后更新时间
    docsDir: 'docs',//文档目录
    docsBranch: 'master',//文档分支
    docsRepo: 'https://github.com/whale-ye/docs.git/subassembly/directives/limitNumber',//文档仓库

    sidebar: {
      '/subassembly/': [
        {
          title: '自定义指令',
          text: '自定义指令',
          prefix: 'directives/',
          children: [
            {
              text: '限制数字输入',
              link: 'limitNumber.md',
            }
          ]
        },
        {
          title: '算法题',
          text: '算法题',
          prefix: 'algorithm/',
          children: [
            {
              title: '排序',
              text: '排序',
              prefix: 'sort/',
              children: [
                {
                  text: '冒泡排序1',
                  link: 'bubbleSort.md',
                },
                {
                  text: '快速排序',
                  link: 'quikSort.md',
                }
              ]
            },
            {
              title: '矩阵',
              text: '矩阵',
              prefix: 'ff/',
              children: [
                {
                  text: '矩阵1',
                  link: 'index.md',
                },
              ]
            },
          ]
        },
      ],
    }
  }),
  
  bundler: viteBundler(),
})
