import React, { useState } from 'react';

import { WhiteSpace, Flex, WingBlank } from 'antd-mobile';
import { ImagePicker } from 'eco-image-picker';
import type { FileItem } from 'eco-image-picker';

export default () => {
  const [value, setValue] = useState<FileItem[]>([]);

  // 数组改变
  const onChange = (arr: FileItem[]) => {
    console.log('onChange base', arr);
    setValue(arr);
  };

  return (
    <Flex direction="row" wrap="wrap">
      <WingBlank>
        <ImagePicker value={value} onChange={onChange} quality={0.1} />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          value={value}
          onChange={onChange}
          config={['defaultBorder']}
        />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          showRemove={false}
          value={value}
          onChange={onChange}
          config={['defaultDashed']}
        />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          value={value}
          onChange={onChange}
          config={['defaultBorder', 'defaultBackGround']}
        />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          value={value}
          onChange={onChange}
          config={['defaultDashed', 'defaultBackGround']}
        />
        <WhiteSpace />
      </WingBlank>
    </Flex>
  );
};
