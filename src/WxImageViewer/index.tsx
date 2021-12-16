import React, { useEffect } from 'react';

import WxImageViewer from 'react-wx-images-viewer';
import { noon } from '../utils/tools';

type Props = {
  onClose?: () => void;
  index?: number;
  urls?: string[];
};

export default (props: Props) => {
  const { onClose = noon, index = 0, urls = [] } = props;

  useEffect(() => {
    document.body.classList.add('fixed-body');
    return () => {
      document.body.classList.remove('fixed-body');
    };
  }, []);

  const clickHandle = (e: any) => {
    if (/pointer/.test(e.target.className)) {
      return;
    }
    onClose();
  };

  return (
    <div onClick={clickHandle}>
      <WxImageViewer onClose={onClose} urls={urls} index={index} />
    </div>
  );
};
