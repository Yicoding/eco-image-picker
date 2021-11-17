import React, { useState } from 'react';

import { FileView } from 'eco-image-picker';
import type { FileItem } from 'eco-image-picker';

export default () => {
  const [value, setValue] = useState<FileItem[]>([]);

  return <FileView value={value} emptyDesc="暂无数据" />;
};
