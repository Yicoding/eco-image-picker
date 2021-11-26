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
![GitHub](@/assets/svg/mit.svg)

## 使用

### npm 或 yarn 安装

```shell
npm install eco-image-picker
```

<br />

```shell
yarn add eco-image-picker
```

### 示例

```javascript
import React, { useState } from 'react';
import { ImagePicker } from 'eco-image-picker';

type FileItem = {
  url: string, // 图片url
  loading?: boolean, // 图片是否加载中
  errorTip?: string, // 错误提示
  name?: string, // 文件说明
  fileName?: string, // 文件名称,包含后缀
  [index: string]: any
};

export default () => {
  const [value, setValue] = useState<FileItem[]>([]);

  // 数组改变
  const onChange = (arr: FileItem[]) => setValue(arr);

  return <ImagePicker value={value} onChange={onChange} />;
};
```

## 对应版本

| eco-image-picker | antd-mobile |
| ---------------- | ----------- |
| v1.x             | v2.x        |
| v2.x             | 不依赖      |

## API

- **上传**
  - [ImagePicker] - 图片上传
  - [FilePicker] - 文件上传
- **预览**
  - [ImageView] - 图片预览
  - [FileView] - 文件预览

## 第三方插件

- [react-wx-images-viewer] - 移动端图片浏览 React 组件
- [compressorjs] - JavaScript 图像压缩器
- [mammoth] - docx 到 HTML 转换器

[npm]: https://img.shields.io/npm/v/eco-image-picker.svg
[npm-url]: https://www.npmjs.com/package/eco-image-picker
[imagepicker]: /components/image-picker
[filepicker]: /components/file-picker
[imageview]: /components/image-view
[fileview]: /components/file-view
[react-wx-images-viewer]: https://www.npmjs.com/package/react-wx-images-viewer
[compressorjs]: https://www.npmjs.com/package/compressorjs
[mammoth]: https://www.npmjs.com/package/mammoth
