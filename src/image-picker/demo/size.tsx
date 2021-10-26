import React, { useState } from 'react';

import { ImagePicker } from 'eco-image-picker';

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
  const [value, setValue] = useState<Array<Files>>([]);

  // 数组改变
  const onChange = (arr: Array<Files>) => {
    console.log('onChange', arr);
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
          return resolve({
            fssid: rate.toString().slice(-6),
            fileName: item?.file?.name,
          });
        }
        reject('上传失败');
      }, 1000);
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
      accept="*"
      fileFieldName="文件"
      size={{
        'image': 1,
        'audio': 1,
        'video': 0.5,
        'application': 0.05,
        'default': 0.01
      }}
      sizeType="base64"
    />
  );
};
