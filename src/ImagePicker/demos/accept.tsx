import React, { useState } from 'react';

import { ImagePicker } from 'eco-image-picker';
import type { FileItem } from 'eco-image-picker';

export default () => {
  const [value, setValue] = useState<FileItem[]>([]);

  // 数组改变
  const onChange = (arr: FileItem[]) => {
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
      }, 3000);
    });
  };

  return (
    <ImagePicker
      value={value}
      onChange={onChange}
      multiple
      max={100}
      mode="cover"
      onUpload={onUpload}
      accept="*"
      fileFieldName="文件"
    />
  );
};
