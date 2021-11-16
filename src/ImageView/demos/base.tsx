import React, { useEffect, useState } from 'react';

// @ts-ignore
import { ImageView } from 'eco-image-picker';

import iconEmpty from '../../assets/icon/iconEmpty.png';

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

  useEffect(() => {
    setValue([
      {
        url: '',
        loading: true,
        fileName: 'a.png',
      },
      {
        url: '',
        loading: true,
        fileName: 'b.png',
      },
      {
        url: '',
        loading: true,
        fileName: 'c.png',
      },
    ]);
    setTimeout(() => {
      setValue([
        {
          url: iconEmpty,
          loading: false,
          fileName: 'a.png',
        },
        {
          url: iconEmpty,
          loading: false,
          fileName: 'b.png',
        },
        {
          url: iconEmpty,
          loading: false,
          fileName: 'c.png',
        },
      ]);
    }, 2500);
  }, []);

  return <ImageView value={value} />;
};
