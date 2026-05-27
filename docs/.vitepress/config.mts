import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '个人知识库',
  description: '记录问题、项目、阅读和长期思考的个人知识库',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  head: [
    ['meta', { name: 'theme-color', content: '#18736d' }],
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Yolanda的知识库',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '笔记',
        items: [
          { text: '笔记总览', link: '/notes/' },
          { text: 'Inbox', link: '/notes/inbox' },
          { text: '阅读笔记', link: '/notes/reading' },
          { text: '日语学习', link: '/notes/japanese/' },
          { text: '金融监管', link: '/notes/regulatory/' },
          { text: '技术笔记', link: '/notes/technical' }
        ]
      },
      { text: '项目', link: '/projects/' },
      { text: '资源', link: '/resources/' },
      { text: '归档', link: '/archive/' }
    ],
    sidebar: {
      '/notes/': [
        {
          text: '笔记系统',
          collapsed: false,
          items: [
            { text: '总览', link: '/notes/' },
            { text: 'Inbox', link: '/notes/inbox' },
            { text: '笔记模板', link: '/notes/template' }
          ]
        },
        {
          text: '主题笔记',
          collapsed: false,
          items: [
            { text: '阅读笔记', link: '/notes/reading' },
            { text: '日语学习', link: '/notes/japanese/' },
            { text: '日语学习计划', link: '/notes/japanese/plan' },
            { text: '日语单词', link: '/notes/japanese/vocabulary' },
            { text: '日语语法', link: '/notes/japanese/grammar' },
            { text: '日语听力', link: '/notes/japanese/listening' },
            { text: '日语资源', link: '/notes/japanese/resources' },
            { text: '金融监管', link: '/notes/regulatory/' },
            { text: 'SFC 26EC29 开户管控', link: '/notes/regulatory/sfc-26ec29-account-opening-controls' },
            { text: '技术笔记', link: '/notes/technical' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目',
          collapsed: false,
          items: [
            { text: '项目总览', link: '/projects/' },
            { text: '项目模板', link: '/projects/template' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源',
          collapsed: false,
          items: [
            { text: '资源总览', link: '/resources/' },
            { text: '工具箱', link: '/resources/tools' }
          ]
        }
      ],
      '/archive/': [
        {
          text: '归档',
          collapsed: false,
          items: [
            { text: '归档总览', link: '/archive/' },
            { text: '每周回顾', link: '/archive/weekly-review' }
          ]
        }
      ]
    },
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2026'
    }
  }
})
