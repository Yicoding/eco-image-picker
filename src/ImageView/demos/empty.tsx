import React, { useState } from 'react';

import { ImageView } from 'eco-image-picker';
import type { FileItem } from 'eco-image-picker';

export default () => {
  const [value, setValue] = useState<FileItem[]>([]);

  return <ImageView value={value} emptyDesc="暂无数据" />;
};
