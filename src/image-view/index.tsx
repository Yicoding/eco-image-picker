import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Modal } from 'antd-mobile';
import classnames from 'classnames';
import FileViewer from 'react-file-viewer';
import WxImageViewer from 'react-wx-images-viewer';

import { veryImage, veryAudio, veryVideo } from '../utils/tools';
import { iconPdf } from '../assets/icon';

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
  disabledPreview?: boolean; // 是否禁用预览图片
  onGetPreviewUrl?: (index: number) => Promise<string>; // 获取预览图片方法
  onFileClick?: (index: number, item?: Files) => void; // 图片初始化加载方法
}

interface FileInfo {
  fileName?: string;
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
  } = props;

  const refFilesList = useRef<Array<Files>>(value);

  const [isOpen, setOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [fileInfo, setFileInfo] = useState<FileInfo>();

  const urlList: string[] = [];
  refFilesList.current.forEach((item: Files) => {
    if (item.preview) {
      urlList.push(item.preview);
    } else if (item.url && veryImage(item?.fileName)) {
      urlList.push(item.url);
    }
  });

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
    console.log('currentIndex', currentIndex);
    setPhotoIndex(currentIndex);
    onClose();
  };

  // parent样式
  const classParent = classnames(s.parent, {
    [s.noMargin as string]: value.length < 1
  });

  return (
    <div
      className={s.root}
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
                  style={{ height }}
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

export default ImageView;
