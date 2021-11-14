export default {
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: {
    type: 'babel',
    lazy: true,
  },
  cssModules: true,
  lessInBabelMode: true,
  runtimeHelpers: true,
  extraBabelPlugins: [['import', { libraryName: 'antd-mobile', style: true }]],
};
