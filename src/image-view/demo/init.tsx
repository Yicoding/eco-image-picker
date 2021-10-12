import React, { useState } from 'react';

import { ImageView } from 'eco-image-picker';
import { demo } from '../../assets/icon';

interface Files {
  url: string; // 图片url
  preview?: string; // 预览图
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 图片名称
  [index: string]: any;
}

export default () => {
  const [value, setValue] = useState<Array<Files>>([
    {
      url: '',
      fssid: 'id-1',
    },
    {
      url: '',
      fssid: 'id-2',
    },
    {
      url: '',
      fssid: 'id-2',
      file: {
        type: 'pdf',
      },
    },
  ]);

  // 数组改变
  const onChange = (arr: Array<Files>) => {
    console.log('onChange', arr);
    arr.forEach((item, index) => (item.name = `示例图${index}`));
    setValue(arr);
  };

  // 初始化方法
  const onInit = (index: number) => {
    return new Promise((resolve, reject) => {
      const rate = Math.random();
      setTimeout(() => {
        if (rate > 0.1) {
          // 成功
          return resolve({
            url: demo,
            file: { type: value[index]?.file?.type || 'image' },
          });
        }
        return reject('加载失败');
      }, 3000);
    });
  };

  // 点击单个选项
  const onItemClick = (index: number, item: Files) => {
    console.log('onItemClick', index, item);
  };

  return (
    <ImageView
      value={value}
      onChange={onChange}
      mode="cover"
      onInit={onInit}
      onItemClick={onItemClick}
    />
  );
};
