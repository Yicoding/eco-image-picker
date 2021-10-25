import React, { useState } from 'react';

import { ImageView } from 'eco-image-picker';
import { veryImage } from '../../utils/tools';

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

  const [value, setValue] = useState<Array<Files>>([]);

  // 数组改变
  const onChange = (arr: Array<Files>) => setValue(arr);
  
  return (
    <ImageView
      value={value}
      onChange={onChange}
      mode="cover"
      emptyDesc="暂无数据"
    />
  );
};
