import React, { useState, forwardRef } from 'react';

import ImagePicker from '../ImagePicker';
import Toast from '../Toast';
import type { ImagePickerProps, FileItem } from '../ImagePicker';

import classnames from 'classnames';

import {
  noon,
  veryImage,
  veryVideo,
  veryAudio,
  judeFileTypeName,
  judeSiteGif,
  getFileExt,
} from '../utils/tools';

type FileInfo = {
  fileName?: string;
  fileType?: string;
  filePath?: string;
};

export const FilePicker = forwardRef((props: ImagePickerProps, ref: any) => {
  const { value = [], accept = '*', onFileClick, ...resProps } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [fileInfo, setFileInfo] = useState<FileInfo>();

  const onCancel = () => setVisible((val) => !val);

  const onFileClickHandle = (index: number) => {
    if (typeof onFileClick === 'function') {
      onFileClick(index);
    }
    // 处理文件预览
    const fileName = value[index].fileName;
    const fileType = getFileExt(fileName);
    setFileInfo({
      fileName,
      fileType,
      filePath: value[index]?.url,
    });
    onCancel();
  };

  return (
    <ImagePicker
      value={value}
      accept={accept}
      onFileClick={onFileClickHandle}
      {...resProps}
    />
  );
});
