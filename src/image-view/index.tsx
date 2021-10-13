import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Modal } from 'antd-mobile';
import classnames from 'classnames';
import WxImageViewer from 'react-wx-images-viewer';
import FileViewer from 'react-file-viewer';
import { iconPdf } from '../assets/icon';

import s from './styles.module.less';

const noon = () => {};

// 判断文件是否为图片
const veryImage = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    const ext = fileName.split('.')?.[1];
    return [
      'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf((ext as string).toLowerCase()) !== -1;
  }
  return false;
};

interface Files {
  url: string; // 图片url
  preview?: string; // 预览图
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 文件说明
  fileName?: string; // 文件名称,包含后缀
  [index: string]: any;
}

interface ImagePickerProps {
  value?: Array<Files>; // 图片列表
  onChange?: (arr: Array<Files>) => void; // 图片列表改变
  onInit?: (index: number) => Promise<object | undefined>; // 图片初始化加载方法
  width?: string; // 图片宽度，默认80px
  height?: string | number; // 图片高度，默认80px
  config?: Array<'defaultBackGround' | 'defaultDashed' | 'defaultBorder'>; // 图片的额外扩展项,defaultBackGround: 显示默认背景色, defaultDashed: 显示虚线边框, defaultBorder: 显示实线边框
  children?: React.ReactNode; // 选择图片元素，默认为+
  mode?: 'fill' | 'cover' | 'contain' | 'scale-down'; // 图片裁切类型, fill, cover, contain, scale-down
  onFail?: (e: any) => void;
  resize?: boolean; // 高度是否根据宽度计算
  disabledPreview?: boolean; // 是否禁用预览图片
  onGetPreviewUrl?: (index: number) => Promise<string>; // 获取预览图片方法
  onFileClick?: (index: number, item?: Files) => void; // 图片初始化加载方法
}
interface FileInfo {
  fileType?: string;
  filePath?: string;
}

const ImageView = forwardRef((props: ImagePickerProps, ref: any) => {
  const {
    value = [],
    onChange = noon,
    width = '80px',
    height = '80px',
    config = ['defaultBorder'],
    mode = 'fill',
    disabledPreview,
    onInit,
    onGetPreviewUrl,
    onFileClick,
    resize,
  } = props;

  const refSelectDom = useRef<any>(null);
  const refFilesList = useRef<Array<Files>>(value);

  const urlList: string[] = [];
  refFilesList.current.forEach((item: Files) => {
    if (item.preview) {
      urlList.push(item.preview);
    } else if (item.url && veryImage(item?.fileName)) {
      urlList.push(item.url);
    }
  });

  const [isOpen, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [realHeight, setRealHeight] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [fileInfo, setFileInfo] = useState<FileInfo>();

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

  // init
  useEffect(() => {
    if (resize) {
      const calcWidth = getComputedStyle(refSelectDom.current).width;
      setRealHeight(calcWidth);
    }
  }, [resize]);

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
        setFileInfo({
          fileType: fileName?.split('.')?.[1],
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
    console.log('currentIndex', currentIndex);
    setIndex(currentIndex);
    onClose();
  };

  // 计算高度
  const calcHeight = resize ? realHeight : height;

  // 定义占位元素个数
  let spaceNum = 0;
  if (resize) {
    const rowNum = Math.floor(100 / parseFloat(width));
    if (value && value.length > 0 && rowNum > 1) {
      const restNum = value.length % rowNum;
      if (restNum >= 0 && restNum <= rowNum - 1) {
        spaceNum = rowNum - restNum - 1;
      }
    }
  }
  console.log('spaceNum', spaceNum);

  // parent样式
  const classParent = classnames(s.parent, {
    [s.noMargin as string]: value.length < 1,
    [s.marginBottom as string]: resize,
  });

  return (
    <div
      className={classnames(s.root, { [s.justifyContent as string]: resize })}
    >
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
              <div key={index} className={classParent} style={{ width }}>
                <div
                  className={classnames(
                    s.imgBox,
                    ...config.map((todo) => {
                      return s[todo];
                    }),
                  )}
                  style={{ height: calcHeight }}
                >
                  {url && (
                    <img
                      alt=""
                      className={s.img}
                      src={veryImage(fileName) ? url : iconPdf}
                      style={{ objectFit: mode }}
                      onClick={() => onPreview(currentIndex, index)}
                    />
                  )}
                  {errorTip && <div className={s.errorTip}>{errorTip}</div>}
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
      {isOpen && (
        <WxImageViewer onClose={onClose} index={index} urls={urlList} />
      )}
      <Modal
        visible={visible}
        transparent
        className={s.modal}
        onClose={onCancel}
        footer={[{ text: '关闭', onPress: () => onCancel() }]}
      >
        <div className={s.modalContainer}>
          <FileViewer
            fileType={fileInfo?.fileType}
            filePath={fileInfo?.filePath}
          />
        </div>
      </Modal>
    </div>
  );
});

export default ImageView;
