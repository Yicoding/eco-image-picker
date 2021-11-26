import React, { useState, forwardRef } from 'react';

import ImagePicker from '../ImagePicker';
import FileViewer from '../FileViewer';
import Modal from '../Modal';
import { FileInfo, ImagePickerProps } from '../types';

import { getFileExt } from '../utils/tools';

export const FilePicker = forwardRef((props: ImagePickerProps, ref: any) => {
  const { value = [], accept = '*', onFileClick, ...resProps } = props;

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
      <ImagePicker
        ref={ref}
        value={value}
        accept={accept}
        onFileClick={onFileClickHandle}
        {...resProps}
      />
      <Modal
        visible={visible}
        onClose={onCancel}
        footer={[{ text: '关闭', onPress: onCancel }]}
      >
        <FileViewer fileInfo={fileInfo} />
      </Modal>
    </>
  );
});
