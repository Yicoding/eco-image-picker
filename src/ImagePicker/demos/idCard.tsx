/**
 * compact: true
 */
import React, { useState } from 'react';

import { Flex } from 'antd-mobile';
// @ts-ignore
import { ImagePicker } from 'eco-image-picker';
import s from './idCard.less';

import iconIdCard from '../../assets/images/icon-idcard.png';
import iconIdCardBack from '../../assets/images/icon-idcard-back.png';
import iconPhoto from '../../assets/images/icon-photo.png';

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
  const [idCard, setIdCard] = useState<Array<Files>>([
    { name: '人像', url: '' },
  ]);
  const [idCardBack, setIdCardBack] = useState<Array<Files>>([
    { name: '国徽', url: '' },
  ]);

  // 实时上传方法
  const onUpload = (item: any): Promise<object | undefined> => {
    console.log('onUpload', item);
    return new Promise((resolve, reject) => {
      const rate = Math.random();
      setTimeout(() => {
        if (rate > 0.3) {
          // 成功
          return resolve({ fssid: rate.toString().slice(-6) });
        }
        reject('上传失败');
      }, 3000);
    });
  };

  // 人像面改变
  const onChangeIdCard = (arr: Array<Files>) => {
    console.log('onChangeIdCard', arr);
    if (arr.length === 0) {
      arr.push({ name: '人像', url: '' });
      return setIdCard(arr);
    }
    setIdCard(arr);
  };

  // 国徽面改变
  const onChangeIdCardBack = (arr: Array<Files>) => {
    if (arr.length === 0) {
      arr.push({ name: '国徽', url: '' });
      return setIdCardBack(arr);
    }
    setIdCardBack(arr);
  };

  return (
    <div className={s.root}>
      <div className={s.item}>
        <ImagePicker
          value={idCard}
          onChange={onChangeIdCard}
          mode="cover"
          width="100%"
          height="90px"
          onUpload={onUpload}
          replace
        >
          <Flex className={s.children} justify="center">
            <img className={s.img} alt="" src={iconIdCard} />
            <img alt="" className={s.iconPhoto} src={iconPhoto} />
          </Flex>
        </ImagePicker>
      </div>
      <div className={s.item}>
        <ImagePicker
          value={idCardBack}
          onChange={onChangeIdCardBack}
          mode="cover"
          width="100%"
          height="90px"
          onUpload={onUpload}
          replace
        >
          <Flex className={s.children} justify="center">
            <img className={s.img} alt="" src={iconIdCardBack} />
            <img alt="" className={s.iconPhoto} src={iconPhoto} />
          </Flex>
        </ImagePicker>
      </div>
    </div>
  );
};
