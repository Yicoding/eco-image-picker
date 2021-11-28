import React, { useState } from 'react';

import { FilePicker } from 'eco-image-picker';
import type { FileItem } from 'eco-image-picker';

export default () => {
  const [value, setValue] = useState<FileItem[]>([]);

  // 数组改变
  const onChange = (arr: FileItem[]) => {
    console.log('onChange', arr);
    setValue(arr);
  };

  return (
    <FilePicker
      value={value}
      onChange={onChange}
      multiple
      max={30}
      mode="cover"
      size={{
        image: 0.1,
        audio: 1,
        video: 1,
        application: 0.1,
        default: 10,
      }}
    />
  );
};
