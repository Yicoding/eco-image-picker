import React, { useState } from 'react';

// @ts-ignore
import { ImagePicker } from 'eco-image-picker';
import { iconEmpty } from '../../assets/icon';

interface Files {
  url: string; // 图片url
  preview?: string; // 预览图
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 文件说明
  fileName?: string; // 文件名称,包含后缀
  [index: string]: any;
}

export default () => {
  const [value, setValue] = useState<Array<Files>>([
    {
      url: '',
      fssid: 'id-1',
      fileName: 'doc.png',
    },
    {
      url: '',
      fssid: 'id-2',
      fileName: 'doc.png',
    },
  ]);

  // 数组改变
  const onChange = (arr: Array<Files>) => {
    console.log('onChange', arr);
    arr.forEach((item, index) => (item.name = `示例图${index}`));
    setValue(arr);
  };

  // 初始化方法
  const onInit = () => {
    return new Promise((resolve, reject) => {
      const rate = Math.random();
      setTimeout(() => {
        if (rate > 0.1) {
          // 成功
          return resolve({ url: iconEmpty, file: { type: 'image' } });
        }
        return reject('加载失败');
      }, 3000);
    });
  };

  // 实时上传方法
  const onUpload = (item: any): Promise<object | undefined> => {
    return new Promise((resolve, reject) => {
      const rate = Math.random();
      setTimeout(() => {
        if (rate > 0.3) {
          // 成功
          return resolve({ fssid: rate.toString().slice(-6) });
        }
        reject('上传失败');
      }, 3000);
    });
  };

  return (
    <ImagePicker
      value={value}
      onChange={onChange}
      multiple
      max={10}
      mode="cover"
      onUpload={onUpload}
      onInit={onInit}
    />
  );
};
