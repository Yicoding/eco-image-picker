export type FileInfo = {
  fileName?: string;
  fileType?: string;
  filePath?: string;
};

export type FileItem = {
  url: string; // 缩略图url
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 文件说明
  fileName?: string; // 文件名称,包含后缀
  [index: string]: any;
};

export type Size = {
  default: number;
  [index: string]: number;
};

export interface ImagePickerProps {
  value?: FileItem[]; // 图片列表
  onChange?: (arr: FileItem[]) => void; // 图片列表改变
  max?: number; // 图片最大个数
  onUpload?: (file: any) => Promise<object | undefined>; // 图片上传方法
  onImageClick?: (index: number, item?: FileItem) => void; // 点击单个图片
  onFileClick?: (index: number, item?: FileItem) => void; // 点击单个文件
  accept?: string; // 选择的图片类型
  multiple?: boolean; // 是否多选
  capture?: boolean | 'user' | 'environment'; // 图片选择的方式
  width?: string; // 图片宽度，默认80px
  height?: string | number; // 图片高度，默认80px
  config?: Array<'defaultBackGround' | 'defaultDashed' | 'defaultBorder'>; // 图片的额外扩展项,defaultBackGround: 显示默认背景色, defaultDashed: 显示虚线边框, defaultBorder: 显示实线边框
  children?: React.ReactNode; // 选择图片元素，默认为+
  mode?: 'fill' | 'cover' | 'contain' | 'scale-down'; // 图片裁切类型, fill, cover, contain, scale-down
  size?: number | Size; // 图片大小限制，单位: M
  sizeType?: 'file' | 'base64'; // 图片大小限制的类型，file大小或者base64大小
  onFail?: (e: any) => void; // 图片选择失败回调
  disabledSelect?: boolean; // 是否禁止选择图片
  disabledPreview?: boolean; // 是否禁用预览图片
  showRemove?: boolean; // 是否显示删除按钮
  replace?: boolean; // 是否替换图片列表
  quality?: number; // 图片压缩比例
}

export interface ImageViewProps {
  value?: FileItem[]; // 图片列表
  width?: string; // 图片宽度，默认80px
  height?: string | number; // 图片高度，默认80px
  emptyDesc?: string; // 是否显示空状态图片
  config?: Array<'defaultBackGround' | 'defaultDashed' | 'defaultBorder'>; // 图片的额外扩展项,defaultBackGround: 显示默认背景色, defaultDashed: 显示虚线边框, defaultBorder: 显示实线边框
  mode?: 'fill' | 'cover' | 'contain' | 'scale-down'; // 图片裁切类型, fill, cover, contain, scale-down
  disabledPreview?: boolean; // 是否禁用预览图片
  onFileClick?: (index: number, item?: FileItem) => void; // 图片初始化加载方法
  onImageClick?: (index: number, item?: FileItem) => void; // 点击单个图片
}
