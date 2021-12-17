# eco-image-picker

[![npm][npm]][npm-url]
![GitHub](https://shopmushi.com/configFile/assets/mit.svg)

基于 `react` 扩展的移动端图片/文件上传组件

[查看文档和示例][site]

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

## 贡献

### commit 格式

- **格式**

```bash
type(scope?): subject
```

- **示例**

```bash
chore: run tests on travis ci
fix(server): send cors headers
feat(blog): add comment section
```

- **type**

| 值       | 说明                                                                             |
| -------- | -------------------------------------------------------------------------------- |
| build    | 影响构建系统或外部依赖项的更新（示例范围：gulp, broccoli, npm）                  |
| ci       | 对 CI 配置文件和脚本的更改(例如 scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | 其他不修改 src 或测试文件的更改                                                  |
| docs     | 只改变文档                                                                       |
| feat     | 新功能                                                                           |
| fix      | bug 修复                                                                         |
| perf     | 改进性能的代码更改                                                               |
| refactor | 既不修复 bug 也不添加新功能的代码更改                                            |
| revert   | 还原以前的提交                                                                   |
| style    | 不影响代码含义的更改(white-space、格式、缺少分号等)                              |
| test     | 添加缺失的测试或纠正现有的测试                                                   |

- **使用 `cz` 生成**

> 格式参考 [What is commitlint]

原来使用 `git commit -m "xx"` 改为以下命令（交互方式填写提交信息）：

```bash
yarn commit
```

或

```bash
npm run commit
```

[npm]: https://img.shields.io/npm/v/eco-image-picker.svg
[npm-url]: https://www.npmjs.com/package/eco-image-picker
[imagepicker]: /components/image-picker
[filepicker]: /components/file-picker
[imageview]: /components/image-view
[fileview]: /components/file-view
[react-wx-images-viewer]: https://www.npmjs.com/package/react-wx-images-viewer
[compressorjs]: https://www.npmjs.com/package/compressorjs
[mammoth]: https://www.npmjs.com/package/mammoth
[what is commitlint]: https://github.com/conventional-changelog/commitlint#what-is-commitlint
[site]: https://yicoding.github.io/eco-image-picker
