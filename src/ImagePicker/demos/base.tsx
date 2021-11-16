import React, { useState } from 'react';

import { WhiteSpace, Flex, WingBlank } from 'antd-mobile';
// @ts-ignore
import { ImagePicker } from 'eco-image-picker';

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

  // 数组改变
  const onChange = (arr: Array<Files>) => {
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
          config={['defaultBackGround']}
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
