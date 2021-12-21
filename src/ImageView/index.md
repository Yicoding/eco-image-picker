---
title: ImageView - 图片展示
order: 0
group:
  path: /
nav:
  title: 组件
  path: /components
---

# ImageView 图片展示

## 基本用法

<code src="./demos/base" />

## 为空状态

<code src="./demos/empty" />

## API

| 属性            | 说明                                                                                                                                                                | 类型                                 | 默认值  |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------- | :------ |
| value           | 图片文件数组,元素为对象,包含属性 `url`: 图片路径(必填), `loading`: 图片加载状态, `errorTip`: 图片加载失败提示文案,`name`: 图片底部显示的名称;以及业务需要的其它属性 | `Array`                              | `[]`    |
| width           | 图片宽度                                                                                                                                                            | `string`                             | `80px`  |
| height          | 图片高度                                                                                                                                                            | `string`                             | `80px`  |
| config          | 图片的额外扩展项,`defaultBorder`: 显示实线边框, `defaultBackGround`: 显示默认背景色, `defaultDashed`: 显示虚线边框                                                  | `string[]`                           | -       |
| disabledPreview | 是否禁止预览图片                                                                                                                                                    | `boolean`                            | `false` |
| mode            | 图片裁切类型(同 css 中`object-fit`属性), `fill`, `cover`, `contain`, `scale-down`                                                                                   | `string`                             | `cover` |
| onImageClick    | 点击单个图片回调法                                                                                                                                                  | `(index: number) => Promise<string>` | -       |
| onFileClick     | 点击单个文件回调法                                                                                                                                                  | `(index: number) => Promise<string>` | -       |
