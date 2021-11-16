import React, { useState } from 'react';

import { Flex } from 'antd-mobile';
import { ImagePicker } from 'eco-image-picker';
import type { FileItem } from 'eco-image-picker';

import s from './idCard.less';

import iconIdCard from '../../assets/images/icon-idcard.png';
import iconIdCardBack from '../../assets/images/icon-idcard-back.png';
import iconPhoto from '../../assets/images/icon-photo.png';

export default () => {
  const [idCard, setIdCard] = useState<FileItem[]>([]);
  const [idCardBack, setIdCardBack] = useState<FileItem[]>([]);

  // 实时上传方法
  const onUpload = (item: any): Promise<object | undefined> => {
    console.log('onUpload', item);
    return new Promise((resolve, reject) => {
      const rate = Math.random();
      setTimeout(() => {
        if (rate > 0.1) {
          // 成功
          return resolve({ fssid: rate.toString().slice(-6) });
        }
        reject('上传失败');
      }, 3000);
    });
  };

  // 人像面改变
  const onChangeIdCard = (arr: FileItem[]) => {
    console.log('onChangeIdCard', arr);
    setIdCard(arr);
  };

  // 国徽面改变
  const onChangeIdCardBack = (arr: FileItem[]) => {
    console.log('onChangeIdCardBack', arr);
    setIdCardBack(arr);
  };

  return (
    <div className={s.root}>
      <div className={s.item}>
        <ImagePicker
          value={idCard}
          onChange={onChangeIdCard}
          width="100%"
          height="90px"
          onUpload={onUpload}
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
          width="100%"
          height="90px"
          onUpload={onUpload}
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
