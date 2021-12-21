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
        title: '展示',
        children: ['ImageView', 'FileView'],
      },
      {
        title: '扩展组件',
        children: ['Toast', 'Modal'],
      },
    ],
  },
};

function addLoader(config) {
  config.module
    .rule('pdf')
    .test(/\.(pdf)$/)
    .use('file-loader')
    .loader(require.resolve('file-loader'));
  config.module
    .rule('docx')
    .test(/\.(docx|doc)$/)
    .use('file-loader')
    .loader(require.resolve('file-loader'));
  config.module
    .rule('media')
    .test(/\.(mp3|wav|ogg|mp4|webm|ogg)$/)
    .use('file-loader')
    .loader(require.resolve('file-loader'));
  config.module
    .rule('xlsx')
    .test(/\.(xlsx)$/)
    .use('file-loader')
    .loader(require.resolve('file-loader'));
}

umiConfig.chainWebpack = function (config, { webpack }) {
  addLoader(config);
};

if (process.env.NODE_ENV === 'production') {
  umiConfig.chunks = ['vendors', 'umi'];
  umiConfig.chainWebpack = function (config, { webpack }) {
    addLoader(config);
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
