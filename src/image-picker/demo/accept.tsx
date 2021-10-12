import React, { useState } from 'react';

import { ImagePicker } from 'eco-image-picker';

interface Files {
  url: string; // 图片url
  preview?: string; // 预览图
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 图片名称
  [index: string]: any;
}

export default () => {
  const [value, setValue] = useState<Array<Files>>([]);

  // 数组改变
  const onChange = (arr: Array<Files>) => {
    console.log('onChange', arr);
    arr.forEach((item, index) => (item.name = `示例图${index}`));
    setValue(arr);
  };

  // 实时上传方法
  const onUpload = (item: any): Promise<object | undefined> => {
    console.log('onUpload', item);
    return new Promise((resolve, reject) => {
      const rate = Math.random();
      setTimeout(() => {
        if (rate > 0.1) {
          // 成功
          return resolve({ fssid: rate.toString().slice(-6) });
        }
        reject('上传失败');
      }, 3000);
    });
  };

  // 点击单个选项
  const onItemClick = (index: number, item: Files) => {
    console.log('onItemClick', index, item);
  };

  return (
    <ImagePicker
      value={value}
      onChange={onChange}
      multiple
      max={10}
      mode="cover"
      onUpload={onUpload}
      onItemClick={onItemClick}
      accept="*"
      fileFieldName="文件"
    />
  );
};