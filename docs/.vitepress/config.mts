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
          { text: '粤语学习', link: '/notes/cantonese/' },
          { text: '金融监管', link: '/notes/regulatory/' },
          { text: 'Web3', link: '/notes/web3/' },
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
          text: '通用笔记',
          collapsed: false,
          items: [
            { text: '阅读笔记', link: '/notes/reading' },
            { text: '技术笔记', link: '/notes/technical' }
          ]
        },
        {
          text: '语言学习',
          collapsed: false,
          items: [
            {
              text: '日语',
              collapsed: true,
              items: [
                { text: '总览', link: '/notes/japanese/' },
                { text: '学习计划', link: '/notes/japanese/plan' },
                { text: '单词', link: '/notes/japanese/vocabulary' },
                { text: '语法', link: '/notes/japanese/grammar' },
                { text: '听力', link: '/notes/japanese/listening' },
                { text: '资源', link: '/notes/japanese/resources' }
              ]
            },
            {
              text: '粤语',
              collapsed: true,
              items: [
                { text: '总览', link: '/notes/cantonese/' },
                { text: '学习计划', link: '/notes/cantonese/plan' },
                { text: '词汇', link: '/notes/cantonese/vocabulary' },
                { text: '发音与粤拼', link: '/notes/cantonese/pronunciation' },
                { text: '常用表达', link: '/notes/cantonese/phrases' },
                { text: '听力', link: '/notes/cantonese/listening' },
                { text: '资源', link: '/notes/cantonese/resources' }
              ]
            }
          ]
        },
        {
          text: '专业主题',
          collapsed: false,
          items: [
            {
              text: '金融监管',
              collapsed: false,
              items: [
                { text: '总览', link: '/notes/regulatory/' },
                { text: 'SFC 26EC29 开户管控', link: '/notes/regulatory/sfc-26ec29-account-opening-controls' }
              ]
            },
            {
              text: 'Web3 与虚拟货币',
              collapsed: false,
              items: [
                { text: '总览', link: '/notes/web3/' },
                { text: '基础概念', link: '/notes/web3/basics' },
                { text: '虚拟货币', link: '/notes/web3/crypto-assets' },
                { text: '钱包与交易所', link: '/notes/web3/wallets-exchanges' },
                { text: '风险与合规', link: '/notes/web3/risks-compliance' },
                { text: '术语表', link: '/notes/web3/glossary' },
                { text: '研究笔记', link: '/notes/web3/research-notes' }
              ]
            }
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
