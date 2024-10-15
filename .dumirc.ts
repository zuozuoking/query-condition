import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/query-condition/',
  publicPath:'/query-condition/',
  themeConfig: {
    name: '依铭',
  },
  title: '依铭组件库',
  // favicons: ['/favicon.png'], //创建图标的 meta 头标签
});
