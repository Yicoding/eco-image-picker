import React, { useState, useRef } from 'react';
import { ImageViewProps, FileItem } from '../types';
import WxImageViewer from '../WxImageViewer';

import classnames from 'classnames';
import { veryImage, judeSiteGif } from '../utils/tools';

import iconEmpty from '../assets/icon/iconEmpty.png';

const prefixCls = 'eco-image-view';

export const ImageView = (props: ImageViewProps) => {
  const {
    value = [],
    width = '80px',
    height = '80px',
    config = [],
    mode = 'cover',
    disabledPreview,
    onFileClick,
    onImageClick,
    emptyDesc,
  } = props;

  const refFilesList = useRef<FileItem[]>([]);

  const [isOpen, setOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  // 更新
  refFilesList.current = value;
  const urlList: string[] = [];
  refFilesList.current.forEach((item: FileItem) => {
    if (item.url && veryImage(item?.fileName)) {
      urlList.push(item.url);
    }
  });

  // 关闭图片预览
  const onClose = () => setOpen((val) => !val);

  // 预览图片
  const onPreview = async (currentIndex: number, index: number) => {
    if (disabledPreview) return;
    if (
      veryImage(refFilesList.current[index]?.fileName) &&
      typeof onImageClick === 'function'
    ) {
      // 点击图片时触发
      return onImageClick(index, refFilesList.current[index]);
    }
    if (
      !veryImage(refFilesList.current[index]?.fileName) &&
      typeof onFileClick === 'function'
    ) {
      // 不是图片，点击文件时触发
      return onFileClick(index, refFilesList.current[index]);
    }
    setPhotoIndex(currentIndex);
    onClose();
  };

  return (
    <div className={`${prefixCls}-root`}>
      {value && value.length > 0 ? (
        value.map((item: FileItem, index: number) => {
          const { url, loading, name, errorTip, fileName } = item;
          if (url || errorTip || loading) {
            const currentArr = value.slice(0, index + 1);
            let errorNum = 0;
            for (let i = 0; i < currentArr.length; i++) {
              const { errorTip: ErrorTip, fileName: fileNameItem } =
                currentArr[i];
              if (ErrorTip || !veryImage(fileNameItem)) {
                errorNum++;
              }
            }
            const currentIndex = index - errorNum;
            return (
              <div
                key={index}
                className={`${prefixCls}-parent`}
                style={{ width }}
              >
                <div
                  className={classnames(
                    `${prefixCls}-img-box`,
                    ...config.map((todo) => {
                      return [`${prefixCls}-${todo}`];
                    }),
                  )}
                  style={{ height }}
                >
                  {url && (
                    <img
                      alt=""
                      className={`${prefixCls}-img`}
                      src={judeSiteGif(fileName, url)}
                      style={{ objectFit: mode }}
                      onClick={() => onPreview(currentIndex, index)}
                    />
                  )}
                  {errorTip && (
                    <div className={`${prefixCls}-error-tip`}>{errorTip}</div>
                  )}
                  {loading && (
                    <div className={`${prefixCls}-loading-box`}>
                      <i className={`${prefixCls}-icon-loading`} />
                    </div>
                  )}
                </div>
                {name && <div className={`${prefixCls}-name`}>{name}</div>}
              </div>
            );
          }
        })
      ) : emptyDesc ? (
        <div className={`${prefixCls}-empty-box`}>
          <img
            className={`${prefixCls}-empty-image`}
            src={iconEmpty}
            alt="暂无数据"
          />
          <span className={`${prefixCls}-empty-desc`}>{emptyDesc}</span>
        </div>
      ) : null}
      {isOpen && (
        <WxImageViewer onClose={onClose} index={photoIndex} urls={urlList} />
      )}
    </div>
  );
};
