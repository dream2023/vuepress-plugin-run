module.exports = {
  cache: true,
  title: "vuepress-plugin-run",
  description: "在线运行Vue单文件",
  plugins: [
    [
      require('../../src/index'),
      {
        reverse: true
      }
    ]
  ],
  themeConfig: {
    repo: 'dream2023/vuepress-plugin-run',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { text: '🥚指南', link: '/' },
    ],
    sidebar: [
      {
        title: '🥚 开始',
        path: '/',
        collapsable: false,
      }
    ]
  }
}
