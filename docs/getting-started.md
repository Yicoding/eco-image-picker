---
title: 快速上手
order: 0
group:
  title: 快速上手
nav:
  title: 指南
  path: /docs
---

# 快速上手

[![npm][npm]][npm-url]
![GitHub](https://shopmushi.com/configFile/assets/mit.svg)

## 使用

### npm 或 yarn 安装

```shell
npm install eco-image-picker@1.x
```

<br />

```shell
yarn add eco-image-picker@1.x
```

### 示例

```javascript
import React, { useState } from 'react';
import { ImagePicker } from 'eco-image-picker';

type Files = {
  url: string, // 图片url
  preview?: string, // 预览图
  loading?: boolean, // 图片是否加载中
  errorTip?: string, // 错误提示
  name?: string, // 文件说明
  fileName?: string, // 文件名称,包含后缀
  [index: string]: any,
};

export default () => {
  const [value, setValue] = useState < Array < Files >> [];

  // 数组改变
  const onChange = (arr: Array<Files>) => setValue(arr);

  return <ImagePicker value={value} onChange={onChange} />;
};
```

## API

- **上传**
  - [ImagePicker] - 图片上传
- **预览**
  - [ImageView] - 图片预览

## 第三方组件

- [react-wx-images-viewer] - 移动端图片浏览 React 组件
- [compressorjs] - JavaScript 图像压缩器
- [react-file-viewer] - 文件预览
- [antd-mobile] - Ant 移动端组件库

[npm]: https://img.shields.io/npm/v/eco-image-picker.svg
[npm-url]: https://www.npmjs.com/package/eco-image-picker
[imagepicker]: /components/image-picker
[imageview]: /components/image-view
[react-wx-images-viewer]: https://www.npmjs.com/package/react-wx-images-viewer
[compressorjs]: https://www.npmjs.com/package/compressorjs
[react-file-viewer]: https://www.npmjs.com/package/react-file-viewer
[antd-mobile]: https://www.npmjs.com/package/antd-mobile
