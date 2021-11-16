import React, { useState, useEffect } from 'react';

import './styles.less';

const prefixCls = 'eco-modal';

interface ModalProps {
  visible?: boolean;
  children?: React.ReactDOM;
}

const Modal = (props: ModalProps) => {
  const { visible = false, children } = props;

  if (!visible) return null;

  return (
    <div>
      <div className={`${prefixCls}-mask`} />
      <div className={`${prefixCls}-root`} aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

export default Modal;
