import React, { useState, useEffect, useRef, useMemo, forwardRef } from 'react';
import { Toast, Modal } from 'antd-mobile';
import classnames from 'classnames';
import Compressor from 'compressorjs';
import FileViewer from 'react-file-viewer';
import WxImageViewer from 'react-wx-images-viewer';

import { veryImage, veryVideo, veryAudio, judeFileTypeName, judeSiteGif } from '../utils/tools';
import { iconFile } from '../assets/icon';

import s from './styles.module.less';

const noon = () => { };

interface Files {
  url: string; // 图片url
  preview?: string; // 预览图
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 文件说明
  fileName?: string; // 文件名称,包含后缀
  [index: string]: any;
}

interface Size {
  [index: string]: number;
}
interface ImagePickerProps {
  value?: Array<Files>; // 图片列表
  max?: number; // 图片最大个数
  onChange?: (arr: Array<Files>) => void; // 图片列表改变
  onUpload?: (file: any) => Promise<object | undefined>; // 图片上传方法
  onInit?: (index: number) => Promise<object | undefined>; // 图片初始化加载方法
  onFileClick?: (index: number, item?: Files) => void; // 点击单个文件
  accept?: string; // 选择的图片类型
  multiple?: boolean; // 是否多选
  capture?: boolean | "user" | "environment"; // 图片选择的方式
  width?: string; // 图片宽度，默认80px
  height?: string | number; // 图片高度，默认80px
  config?: Array<'defaultBackGround' | 'defaultDashed' | 'defaultBorder'>; // 图片的额外扩展项,defaultBackGround: 显示默认背景色, defaultDashed: 显示虚线边框, defaultBorder: 显示实线边框
  children?: React.ReactNode; // 选择图片元素，默认为+
  mode?: 'fill' | 'cover' | 'contain' | 'scale-down'; // 图片裁切类型, fill, cover, contain, scale-down
  size?: number | Size; // 图片大小限制，单位: M
  onFail?: (e: any) => void;
  disabledSelect?: boolean; // 是否禁用选择图片
  disabledPreview?: boolean; // 是否禁用预览图片
  onGetPreviewUrl?: (index: number) => Promise<string>; // 获取预览图片方法
  showRemove?: boolean; // 是否显示删除按钮
  replace?: boolean; // 是否替换图片列表
  quality?: number; // 图片压缩比例
}

interface FileInfo {
  fileName?: string;
  fileType?: string;
  filePath?: string;
}

const ImagePicker = forwardRef((props: ImagePickerProps, ref: any) => {
  const {
    value = [],
    max = 1,
    onChange = noon,
    accept = 'image/*',
    multiple,
    capture,
    width = '80px',
    height = '80px',
    config = ['defaultBorder'],
    children,
    mode = 'fill',
    size,
    disabledPreview,
    disabledSelect,
    onUpload,
    onInit,
    onFail = noon,
    onGetPreviewUrl,
    onFileClick,
    showRemove = true,
    replace,
    quality,
  } = props;

  const refInput = ref || useRef<any>(null);
  const refSelectDom = useRef<any>(null);
  const refFilesList = useRef<Array<Files>>([]);

  const [isOpen, setOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [fileInfo, setFileInfo] = useState<FileInfo>();
  const [temporaryArray, setTemporaryArray] = useState<Array<Files>>([]);

  refFilesList.current = value;
  const urlList: string[] = [];
  refFilesList.current.forEach((item: Files) => {
    if (item.preview) {
      urlList.push(item.preview);
    } else if (item.url && veryImage(item?.fileName)) {
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
  const onCancel = () => setVisible((val) => !val);

  // 初始化
  const init = (index: number) => {
    if (onInit) {
      onInit(index)
        .then((res: any) => {
          refFilesList.current[index] = Object.assign(
            {},
            refFilesList.current[index],
            res,
            { loading: false },
          );
          refFilesList.current = [...refFilesList.current];
          setTimeout(() => onChange(refFilesList.current), 10);
        })
        .catch((err) => {
          refFilesList.current[index] = Object.assign(
            {},
            refFilesList.current[index],
            {
              url: '',
              loading: false,
              errorTip: err || '加载失败',
            },
          );
          refFilesList.current = [...refFilesList.current];
          setTimeout(() => onChange(refFilesList.current), 10);
        });
    }
  };

  // 处理初始化加载
  useEffect(() => {
    // 处理初始化加载
    if (typeof onInit === 'function') {
      for (let i = 0; i < refFilesList.current.length; i++) {
        refFilesList.current.forEach((item: Files) => {
          item.loading = true;
          item.isInit = true;
        });
        refFilesList.current = [...refFilesList.current];
        onChange(refFilesList.current);
        init(i);
      }
    }
  }, []);

  // 图片压缩
  const compress = (file: any) => {
    return new Promise((resolve) => {
      new Compressor(file, {
        quality,
        success: (result: Blob) => {
          resolve(result);
        },
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
      console.log('压缩前', file);
      data = await compress(file);
      console.log('compress data', data);
    }
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = (e.target as any).result;
        if (!dataURL) {
          reject(`Fail to get the ${index} image`);
          return;
        }
        console.log('validLength + index', validLength + index, value);
        resolve(
          Object.assign({}, value[validLength + index], {
            file: data,
            url: dataURL,
            fileName: file?.name
          }),
        );
      };
      reader.readAsDataURL(data);
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
      Toast.info(`文件最多不超过${max}张`);
    }
    const restFileList = Array.from(files).slice(0, restNum);
    const temporaryCopyArray = restFileList.map(() => {
      return { url: iconFile, loading: true }
    });
    setTemporaryArray(temporaryCopyArray);
    const imageParsePromiseList = [];
    for (let i = 0; i < restFileList.length; i++) {
      imageParsePromiseList.push(parseFile(restFileList[i], i, validLength));
    }
    refFilesList.current = refFilesList.current.filter(
      (item) => (item.url || item.errorTip)
    ); // 过滤有效值
    const index = replace ? 0 : refFilesList.current.length;
    Promise.all(imageParsePromiseList)
      .then((imageItems: any[]) => {
        if (typeof onUpload === 'function') {
          imageItems.forEach((item: Files) => (item.loading = true));
        }
        const filterList = imageItems.filter((item: Files) => {
          console.log('item.size', item.file.size, item.file);
          if (size) { // 限制文件大小
            let sizeNum = 10;
            if (typeof size === 'number') { // 统一限制文件大小
              sizeNum = size;
            } else { // 自定义单独文件格式大小
              const fileType: string = item?.file?.type?.split('/')?.[0];
              if (size[fileType]) {
                sizeNum = size[fileType];
              }
            }
            if (item.file.size > sizeNum * 1024 * 1024) {
              return Toast.info(`${judeFileTypeName(item.file?.type)}大小不能超过${sizeNum}M`);
            }
          }
          return item;
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
      return Toast.info('文件上传中，请稍后操作');
    }
    refFilesList.current.splice(index, 1);
    refFilesList.current = [...refFilesList.current];
    onChange(refFilesList.current);
  };

  // 预览图片
  const onPreview = async (currentIndex: number, index: number) => {
    if (disabledPreview) return;
    if (!veryImage(refFilesList.current[index]?.fileName)) {
      // 不是图片
      if (typeof onFileClick === 'function') {
        return onFileClick(index, refFilesList.current[index]);
      } else {
        // 下载
        const fileName = refFilesList.current[index].fileName;
        const fileType = fileName?.split('.')?.[1];
        setFileInfo({
          fileName,
          fileType,
          filePath: refFilesList.current[index]?.url,
        });
        return onCancel();
      }
    }
    if (
      !refFilesList.current[index].preview &&
      typeof onGetPreviewUrl === 'function'
    ) {
      // 加载大图
      const preview: string = await onGetPreviewUrl(index);
      refFilesList.current[index].preview = preview;
      refFilesList.current = [...refFilesList.current];
      onChange(refFilesList.current);
    }
    setPhotoIndex(currentIndex);
    onClose();
  };

  return (
    <div
      className={s.root}
    >
      <input
        className={s.hidden}
        ref={refInput}
        type="file"
        accept={accept}
        multiple={multiple}
        capture={capture}
        onChange={onChangeHandle}
      />
      {value &&
        value.length > 0 &&
        value.map((item: Files, index: number) => {
          const { url, loading, name, errorTip, isInit, fileName } = item;
          if (url || errorTip || isInit) {
            const currentArr = value.slice(0, index + 1);
            let errorNum = 0;
            for (let i = 0; i < currentArr.length; i++) {
              const { errorTip: ErrorTip, fileName: fileNameItem } = currentArr[i];
              if (ErrorTip || !veryImage(fileNameItem)) {
                errorNum++;
              }
            }
            const currentIndex = index - errorNum;
            return (
              <div key={index} className={s.parent} style={{ width }}>
                <div
                  className={classnames(
                    s.imgBox,
                    ...config.map((todo) => {
                      return s[todo];
                    }),
                  )}
                  style={{ height }}
                >
                  {url && (
                    <img
                      alt=""
                      className={s.img}
                      src={judeSiteGif(fileName, url)}
                      style={{ objectFit: mode }}
                      onClick={() => onPreview(currentIndex, index)}
                    />
                  )}
                  {errorTip && <div className={s.errorTip}>{errorTip}</div>}
                  {showRemove && (
                    <i
                      className={s.iconRemove}
                      onClick={() => onRemove(index)}
                    />
                  )}
                  {loading && (
                    <div className={s.loadingBox}>
                      <i className={s.loading} />
                    </div>
                  )}
                </div>
                {name && <div className={s.name}>{name}</div>}
              </div>
            );
          }
        })}
      {temporaryArray &&
        temporaryArray.length > 0 &&
        temporaryArray.map((item: Files, index: number) => {
            return (
              <div key={index} className={s.parent} style={{ width }}>
                <div
                  className={classnames(
                    s.imgBox,
                    ...config.map((todo) => {
                      return s[todo];
                    }),
                  )}
                  style={{ height }}
                >
                  <img
                    alt=""
                    className={s.img}
                    src={item.url}
                    style={{ objectFit: mode }}
                  />
                  <div className={s.loadingBox}>
                    <i className={s.loading} />
                  </div>
                </div>
              </div>
            );
        })}
      {validLength < max && (
        <div
          className={s.parentSelect}
          style={{ width }}
          ref={refSelectDom}
          onClick={inputClick}
        >
          {children ? (
            children
          ) : (
            <div
              style={{ height }}
              className={classnames(s.childrenEle, [
                ...config.map((todo) => {
                  return s[todo];
                }),
              ])}
            />
          )}
          {max === 1 && value[0] && value[0].name && (
            <div className={s.name} style={{ width }}>
              {value[0].name}
            </div>
          )}
        </div>
      )}
      {isOpen && (
        <WxImageViewer onClose={onClose} index={photoIndex} urls={urlList} />
      )}
      <Modal
        visible={visible}
        transparent
        className={s.modal}
        onClose={onCancel}
        footer={[{ text: '关闭', onPress: () => onCancel() }]}
      >
        <div className={s.modalContainer}>
          {
            veryAudio(fileInfo?.fileName) ?
              <audio controls autoPlay>
                <source src={fileInfo?.filePath} type={`audio/${fileInfo?.fileType}`} />
              </audio> :
              veryVideo(fileInfo?.fileName) ?
                <video height="240" style={{ width: '100%' }} controls autoPlay webkit-playsinline playsInline>
                  <source src={fileInfo?.filePath} type={`video/${fileInfo?.fileType}`} />
                </video> :
                <FileViewer
                  fileType={fileInfo?.fileType}
                  filePath={fileInfo?.filePath}
                />
          }
        </div>
      </Modal>
    </div>
  );
});

export default ImagePicker;
