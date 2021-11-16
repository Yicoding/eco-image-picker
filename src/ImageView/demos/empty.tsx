import React, { useState } from 'react';

// @ts-ignore
import { ImageView } from 'eco-image-picker';

interface Files {
  url: string; // 图片url
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 文件说明
  fileName?: string; // 文件名称,包含后缀
  [index: string]: any;
}

export default () => {
  const [value, setValue] = useState<Array<Files>>([]);

  return <ImageView value={value} emptyDesc="暂无数据" />;
};
