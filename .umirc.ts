import { defineConfig } from 'dumi';

const pkg = require('./package.json');

const publicPath =
  process.env.NODE_ENV === 'production'
    ? `https://yicoding.github.io/eco-image-picker/refs/heads/${pkg.branch}/`
    : '/';

const umiConfig = {
  title: 'eco-image-picker',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'site',
  mode: 'site',
  publicPath,
  devServer: {
    port: 8090,
  },
  history: {
    type: 'hash',
  },
  dynamicImport: {},
  hash: true,
  // more config: https://d.umijs.org/config
  extraBabelPlugins: [['import', { libraryName: 'antd-mobile', style: true }]],
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  // 配置具体含义见：https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '回到旧版',
      children: [
        {
          title: 'v1.x',
          path: 'https://yicoding.github.io/eco-image-picker/refs/heads/v1/index.html',
        },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/Yicoding/eco-image-picker',
    },
  ],
  menus: {
    '/components': [
      {
        title: '上传',
        children: ['ImagePicker', 'FilePicker'],
      },
      {
        title: '预览',
        children: ['ImageView', 'FileView'],
      },
      {
        title: '扩展组件',
        children: ['Toast', 'Modal'],
      },
    ],
  },
};

if (process.env.NODE_ENV === 'production') {
  umiConfig.headScripts = [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-N328Y9JJTL',
      async: true,
    },
    {
      content: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-N328Y9JJTL');
      `,
    },
  ];
  umiConfig.chunks = ['vendors', 'umi'];
  umiConfig.chainWebpack = function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true,
            },
          },
        },
      },
    });
  };
}

export default defineConfig(umiConfig);
