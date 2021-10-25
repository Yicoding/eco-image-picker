
// 判断文件是否为图片
export const veryImage = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    const ext = fileName.split('.')?.[fileName.split('.')?.length - 1];
    return [
      'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf((ext as string).toLowerCase()) !== -1;
  }
  return false;
};

// 判断文件是否为视频
export const veryVideo = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    const ext = fileName.split('.')?.[fileName.split('.')?.length - 1];
    return [
      'mp4', 'webm', 'ogg'].indexOf((ext as string).toLowerCase()) !== -1;
  }
  return false;
};

// 判断文件是否为音频
export const veryAudio = (fileName: string | undefined) => {
  if (typeof fileName === 'string') {
    const ext = fileName.split('.')?.[fileName.split('.')?.length - 1];
    return [
      'mp3', 'wav', 'ogg'].indexOf((ext as string).toLowerCase()) !== -1;
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
}