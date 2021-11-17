import React from 'react';

import { DocxViewer } from './docx-viewer';
import type { FileInfo } from '../types';

import { veryVideo, veryAudio, veryPdf, veryWord } from '../utils/tools';

type FileViewerProps = {
  fileInfo: FileInfo;
};

export const FileViewer = (props: FileViewerProps) => {
  const { fileInfo } = props;

  if (veryAudio(fileInfo?.fileName)) {
    // 处理音频
    return (
      <audio controls autoPlay style={{ maxWidth: '100%' }}>
        <source src={fileInfo?.filePath} type={`audio/${fileInfo?.fileType}`} />
      </audio>
    );
  }

  if (veryVideo(fileInfo?.fileName)) {
    // 处理视频
    return (
      <video
        style={{ width: '100%', objectFit: 'fill' }}
        controls
        autoPlay
        webkit-playsinline="true"
        playsInline
      >
        <source src={fileInfo?.filePath} type={`video/${fileInfo?.fileType}`} />
      </video>
    );
  }

  if (veryPdf(fileInfo?.fileName)) {
    // 处理PDF
    return (
      <object
        data={fileInfo?.filePath}
        type="application/pdf"
        style={{ width: '100%' }}
      >
        浏览器暂不支持pdf文件预览
      </object>
    );
  }

  if (veryWord(fileInfo?.fileName)) {
    // 处理word文档
    return <DocxViewer fileInfo={fileInfo} />;
  }

  return <div>{fileInfo.fileType}文件暂不支持预览</div>;
};
