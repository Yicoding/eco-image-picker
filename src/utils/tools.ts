import {
  iconFile,
  iconAudio,
  iconVideo,
  iconExcel,
  iconPdf,
  iconWord,
} from '../assets/icon';

// 空函数
export const noon = () => {};

// 获取文件后缀名
export const getFileExt = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    return fileName.split('.')?.[fileName.split('.')?.length - 1];
  }
  return 'undefined';
};

// 判断文件是否为图片
export const veryImage = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    const ext = getFileExt(fileName);
    return (
      [
        'png',
        'jpg',
        'jpeg',
        'bmp',
        'gif',
        'webp',
        'psd',
        'svg',
        'tiff',
      ].indexOf((ext as string).toLowerCase()) !== -1
    );
  }
  return false;
};

// 判断文件是否为视频
export const veryVideo = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    const ext = getFileExt(fileName);
    return ['mp4', 'webm', 'ogg'].indexOf((ext as string).toLowerCase()) !== -1;
  }
  return false;
};

// 判断文件是否为音频
export const veryAudio = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    const ext = getFileExt(fileName);
    return ['mp3', 'wav', 'ogg'].indexOf((ext as string).toLowerCase()) !== -1;
  }
  return false;
};

// 判断文件是否为excel
export const veryExcel = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    const ext = getFileExt(fileName);
    return ['xls', 'xlsx'].indexOf((ext as string).toLowerCase()) !== -1;
  }
  return false;
};

// 判断文件是否为word
export const veryWord = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    const ext = getFileExt(fileName);
    return ['doc', 'docx'].indexOf((ext as string).toLowerCase()) !== -1;
  }
  return false;
};

// 判断文件是否为pdf
export const veryPdf = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    const ext = getFileExt(fileName);
    return ['pdf'].indexOf((ext as string).toLowerCase()) !== -1;
  }
  return false;
};

export const judeFileTypeName = (type: string | undefined) => {
  const fileType: string = type?.split('/')?.[0] || '';
  let fileTypeName = '文件';
  switch (fileType) {
    case 'image':
      fileTypeName = '图片';
      break;
    case 'audio':
      fileTypeName = '音频';
      break;
    case 'video':
      fileTypeName = '视频';
      break;
    default:
      break;
  }
  return fileTypeName;
};

export const judeSiteGif = (fileName: string | undefined, url: string) => {
  if (typeof fileName === 'string') {
    if (veryImage(fileName)) {
      return url;
    }
    if (veryVideo(fileName)) {
      return iconVideo;
    }
    if (veryAudio(fileName)) {
      return iconAudio;
    }
    if (veryExcel(fileName)) {
      return iconExcel;
    }
    if (veryWord(fileName)) {
      return iconWord;
    }
    if (veryPdf(fileName)) {
      return iconPdf;
    }
  }
  return iconFile;
};
