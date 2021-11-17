import React, { useEffect, useState } from 'react';

import { FileView } from 'eco-image-picker';
import type { FileItem } from 'eco-image-picker';

import iconEmpty from '../../assets/icon/iconEmpty.png';

export default () => {
  const [value, setValue] = useState<FileItem[]>([]);

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

  return <FileView value={value} />;
};
