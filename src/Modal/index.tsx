import React from 'react';

import { noon } from '../utils/tools';

import './styles.less';

const prefixCls = 'eco-modal';

export interface Action {
  text: string;
  onPress?: () => void | Promise<any>;
  style?: React.CSSProperties;
}
export interface ModalProps {
  visible?: boolean;
  children?: React.ReactNode;
  footer?: Action[];
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const { visible = false, children, footer = [], onClose = noon } = props;

  if (!visible) return null;

  const footerDom =
    footer.length > 0 ? (
      <div className={`${prefixCls}-btn-group`}>
        {footer.map((button, i) => (
          <div
            key={i}
            className={`${prefixCls}-btn`}
            onClick={button.onPress}
            style={button.style}
          >
            {button.text}
          </div>
        ))}
      </div>
    ) : null;

  return (
    <div>
      <div className={`${prefixCls}-mask`} onClick={onClose} />
      <div className={`${prefixCls}-root`}>
        <div className={`${prefixCls}-content`}>{children}</div>
        {footerDom}
      </div>
    </div>
  );
};

export default Modal;
