import React, { useState } from 'react';

import ImageView from '../ImageView';
import FileViewer from '../FileViewer';
import Modal from '../Modal';
import { FileInfo, ImagePickerProps } from '../types';

import { getFileExt } from '../utils/tools';

export const FileView = (props: ImagePickerProps) => {
  const { value = [], onFileClick, ...resProps } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [fileInfo, setFileInfo] = useState<FileInfo>({});

  const onCancel = () => setVisible((val) => !val);

  const onFileClickHandle = (index: number) => {
    if (typeof onFileClick === 'function') {
      onFileClick(index);
    }
    // 处理文件预览
    const fileName = value[index].fileName;
    const fileType = getFileExt(fileName);
    const url = URL.createObjectURL(value[index]?.file);
    setFileInfo({
      fileName,
      fileType,
      filePath: url,
    });
    onCancel();
    setTimeout(() => URL.revokeObjectURL(url), 10);
  };

  return (
    <>
      <ImageView value={value} onFileClick={onFileClickHandle} {...resProps} />
      <Modal
        visible={visible}
        onClose={onCancel}
        footer={[{ text: '关闭', onPress: onCancel }]}
      >
        <FileViewer fileInfo={fileInfo} />
      </Modal>
    </>
  );
};
