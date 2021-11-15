---
title: ImagePicker - 图片上传
order: 0
group:
  path: /
nav:
  title: 组件
  path: /components
---

# ImagePicker 图片选择器

## 基本用法

<code src="./demos/base" />

## 结合 form

<code src="./demos/form" />

## 多选+实时上传

<code src="./demos/onUpload" />

## 自定义选择器(子组件)

<code src="./demos/idCard" />

## 初始化外部请求

<code src="./demos/init" />

## 不同文件类型

<code src="./demos/accept" />

## 不同文件类型限制不同文件大小

<code src="./demos/size" />

## API

### ImagePicker

| 属性            | 说明                                                                                                                                                                                       | 类型                                     | 默认值          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | --------------- |
| value           | 图片文件数组,元素为对象,包含属性 `url`: 图片路径(必填), `preview`: 图片预览图, `loading`: 图片加载状态, `errorTip`: 图片加载失败提示文案,`name`: 图片底部显示的名称;以及业务需要的其它属性 | `Array`                                  | `[]`            |
| onChange        | files 值发生变化触发的回调函数                                                                                                                                                             | `(arr: Array<Files>) => void`            | -               |
| max             | 最大上传文件数量                                                                                                                                                                           | `number`                                 | `1`             |
| quality         | 图片压缩比例,0~1                                                                                                                                                                           | `number`                                 | `默认不压缩`    |
| onUpload        | 图片实时上传方法                                                                                                                                                                           | `(file) => Promise<object or undefined>` | -               |
| onInit          | 图片初始化加载                                                                                                                                                                             | `(file) => Promise<object or undefined>` | -               |
| onFileClick     | 点击单个文件回调法                                                                                                                                                                         | `(index: number) => Promise<string>`     | -               |
| onGetPreviewUrl | 获取预览图片方法                                                                                                                                                                           | `(index: number) => Promise<string>`     | -               |
| accept          | 图片类型                                                                                                                                                                                   | `string`                                 | `image/*`       |
| capture         | 图片选择的方式                                                                                                                                                                             | `string`                                 | -               |
| multiple        | 是否多选                                                                                                                                                                                   | `boolean`                                | `false`         |
| width           | 图片宽度                                                                                                                                                                                   | `string`                                 | `80px`          |
| height          | 图片高度                                                                                                                                                                                   | `string`                                 | `80px`          |
| config          | 图片的额外扩展项,`defaultBorder`: 显示实线边框, `defaultBackGround`: 显示默认背景色, `defaultDashed`: 显示虚线边框                                                                         | `string[]`                               | `defaultBorder` |
| children        | 选择图片元素                                                                                                                                                                               | `React.ReactNode`                        | `default`       |
| disabledSelect  | 是否禁止选择图片                                                                                                                                                                           | `boolean`                                | `false`         |
| disabledPreview | 是否禁用预览图片                                                                                                                                                                           | `boolean`                                | `false`         |
| showRemove      | 是否显示删除按钮                                                                                                                                                                           | `boolean`                                | `true`          |
| replace         | 是否替换图片列表                                                                                                                                                                           | `boolean`                                | `false`         |
| mode            | 图片裁切类型(同 css 中`object-fit`属性), `fill`, `cover`, `contain`, `scale-down`                                                                                                          | `string`                                 | `fill`          |
| size            | 单个文件限制大小，单位 M                                                                                                                                                                   | `number/object`                          | -               |
| sizeType        | 图片大小限制的类型                                                                                                                                                                         | `file/base64`                            | `file`          |
| onFail          | 图片选择失败                                                                                                                                                                               | `(msg: string)=> void`                   | -               |
| ref             | 挂载 input                                                                                                                                                                                 | -                                        | -               |
