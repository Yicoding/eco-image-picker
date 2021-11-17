import React, { useState, useRef, useMemo, forwardRef } from 'react';
import { ImagePickerProps, FileItem } from '../types';

import Toast from '../Toast';
import WxImageViewer from 'react-wx-images-viewer';

import classnames from 'classnames';
import Compressor from 'compressorjs';
import { noon, veryImage, judeFileTypeName, judeSiteGif } from '../utils/tools';

import iconFile from '../assets/icon/iconFile.png';

const prefixCls = 'eco-image-picker';

export const ImagePicker = forwardRef((props: ImagePickerProps, ref: any) => {
  const {
    value = [],
    onChange = noon,
    max = 1,
    accept = 'image/*',
    multiple,
    capture,
    width = '80px',
    height = '80px',
    config = ['defaultBackGround'],
    children,
    mode = 'cover',
    size,
    sizeType = 'file',
    disabledPreview,
    disabledSelect,
    onUpload,
    onFail = noon,
    onFileClick,
    onImageClick,
    showRemove = true,
    replace,
    quality,
  } = props;

  const refInput = ref || useRef<any>(null);
  const refFilesList = useRef<FileItem[]>([]);

  const [isOpen, setOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [temporaryArray, setTemporaryArray] = useState<FileItem[]>([]);

  // 更新
  refFilesList.current = value;
  const urlList: string[] = [];
  refFilesList.current.forEach((item: FileItem) => {
    if (item?.url && veryImage(item?.fileName)) {
      urlList.push(item.url);
    }
  });

  // 有效个数
  const validLength = useMemo(() => {
    let num = 0;
    for (let i = 0; i < value.length; i++) {
      const { url, errorTip } = value[i];
      if (url || errorTip) {
        num++;
      }
    }
    return num;
  }, [value]);

  // 关闭图片预览
  const onClose = () => setOpen((val) => !val);

  // 图片压缩
  const compress = (file: any) => {
    return new Promise((resolve) => {
      new Compressor(file, {
        quality,
        success: (result: Blob) => resolve(result),
        error: (err) => {
          console.log('图片压缩失败，将返回原文件：', err.message);
          resolve(file);
        },
      });
    });
  };

  // 图片处理
  const parseFile = async (file: any, index: number, validLength: number) => {
    let data: any = file;
    if (quality && veryImage(file?.name)) {
      console.log('compress before', file);
      data = await compress(file);
      console.log('compress after', data);
    }
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onload = (e) => {
        const dataURL = (e.target as any).result;
        if (!dataURL) {
          reject(`Fail to get the ${index} image`);
          return;
        }
        resolve(
          Object.assign({}, value[validLength + index], {
            file: data,
            url: dataURL,
            fileName: file?.name,
          }),
        );
      };
    });
  };

  // 图片改变
  const onChangeHandle = (e: any) => {
    const fileSelectorEl = e.target;
    const { files } = fileSelectorEl;
    if (!files || !files.length) {
      return (fileSelectorEl.value = '');
    }
    console.log('files', files);
    const restNum = max - (replace ? 0 : validLength);
    if (files.length > (replace ? max : restNum)) {
      Toast.show({ text: `文件最多不超过${max}张` });
    }
    const restFileList = Array.from(files).slice(0, restNum);
    const temporaryCopyArray = restFileList.map(() => {
      return { url: iconFile, loading: true };
    });
    setTemporaryArray(temporaryCopyArray);
    const imageParsePromiseList = [];
    for (let i = 0; i < restFileList.length; i++) {
      imageParsePromiseList.push(parseFile(restFileList[i], i, validLength));
    }
    refFilesList.current = refFilesList.current.filter(
      (item) => item.url || item.errorTip,
    ); // 过滤有效值
    const index = replace ? 0 : refFilesList.current.length;
    Promise.all(imageParsePromiseList)
      .then((imageItems: any[]) => {
        if (typeof onUpload === 'function') {
          imageItems.forEach((item: FileItem) => (item.loading = true));
        }
        const filterList = imageItems.filter((item: FileItem) => {
          if (size) {
            // 限制文件大小
            let sizeNum = 10;
            if (typeof size === 'number') {
              // 统一限制文件大小
              sizeNum = size;
            } else {
              // 自定义单独文件格式大小
              sizeNum = size?.default;
              const fileType: string = item?.file?.type?.split('/')?.[0];
              if (size[fileType]) {
                sizeNum = size[fileType];
              }
            }
            if (sizeType === 'file' && item.file.size > sizeNum * 1024 * 1024) {
              Toast.show({
                text: `${judeFileTypeName(
                  item.file?.type,
                )}大小不能超过${sizeNum}M`,
              });
              return false;
            } else if (
              sizeType === 'base64' &&
              item?.url?.length > sizeNum * 1024 * 1024
            ) {
              Toast.show({
                text: `${judeFileTypeName(
                  item.file?.type,
                )}大小不能超过${sizeNum}M`,
              });
              return false;
            }
          }
          return true;
        });
        if (replace) {
          refFilesList.current = [...filterList];
        } else {
          refFilesList.current = refFilesList.current.concat(filterList);
        }
        onChange(refFilesList.current);
        setTemporaryArray([]);
        if (typeof onUpload === 'function') {
          for (let i = 0; i < refFilesList.current.length; i++) {
            const item = refFilesList.current[i];
            if (i >= index) {
              onUpload(item)
                .then((res: any) => {
                  refFilesList.current[i] = Object.assign(
                    {},
                    refFilesList.current[i],
                    res,
                    { loading: false },
                  );
                  refFilesList.current = [...refFilesList.current];
                  setTimeout(() => onChange(refFilesList.current), 10);
                })
                .catch((err) => {
                  refFilesList.current[i] = Object.assign(
                    {},
                    refFilesList.current[i],
                    {
                      url: '',
                      loading: false,
                      errorTip: err || '上传失败',
                    },
                  );
                  refFilesList.current = [...refFilesList.current];
                  setTimeout(() => onChange(refFilesList.current), 10);
                });
            }
          }
        }
        fileSelectorEl.value = '';
      })
      .catch((error) => {
        onFail(error);
        fileSelectorEl.value = '';
        setTemporaryArray([]);
      });
  };

  // 选择图片
  const inputClick = () => {
    if (disabledSelect) return;
    refInput && refInput.current && refInput.current.click();
  };

  // 删除图片
  const onRemove = (index: number) => {
    let ableDelete = true;
    for (let i = 0; i < refFilesList.current.length; i++) {
      const { loading } = refFilesList.current[i];
      if (loading) {
        ableDelete = false;
        break;
      }
    }
    if (!ableDelete) {
      return Toast.show({ text: '文件上传中，请稍后操作' });
    }
    refFilesList.current.splice(index, 1);
    refFilesList.current = [...refFilesList.current];
    onChange(refFilesList.current);
  };

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
      <input
        className={`${prefixCls}-hidden`}
        ref={refInput}
        type="file"
        accept={accept}
        multiple={multiple}
        capture={capture}
        onChange={onChangeHandle}
      />
      {value &&
        value.length > 0 &&
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
                  {showRemove && (
                    <i
                      className={`${prefixCls}-icon-remove`}
                      onClick={() => onRemove(index)}
                    />
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
        })}
      {temporaryArray &&
        temporaryArray.length > 0 &&
        temporaryArray.map((item: FileItem, index: number) => {
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
                <img
                  alt=""
                  className={`${prefixCls}-img`}
                  src={item.url}
                  style={{ objectFit: mode }}
                />
                <div className={`${prefixCls}-loading-box`}>
                  <i className={`${prefixCls}-icon-loading`} />
                </div>
              </div>
            </div>
          );
        })}
      {validLength + temporaryArray?.length < max && (
        <div
          className={`${prefixCls}-parent-select`}
          style={{ width }}
          onClick={inputClick}
        >
          {children ? (
            children
          ) : (
            <div
              style={{ height }}
              className={classnames(`${prefixCls}-children-ele`, [
                ...config.map((todo) => {
                  return [`${prefixCls}-${todo}`];
                }),
              ])}
            />
          )}
        </div>
      )}
      {isOpen && (
        <WxImageViewer onClose={onClose} index={photoIndex} urls={urlList} />
      )}
    </div>
  );
});
