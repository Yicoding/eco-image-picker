import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles.less';

const prefixCls = 'eco-toast';

const containers = [] as HTMLDivElement[];

function unmount(container: HTMLDivElement) {
  const unmountResult = ReactDOM.unmountComponentAtNode(container);
  if (unmountResult && container.parentNode) {
    container.parentNode.removeChild(container);
  }
}

type Config = {
  text: string | React.ReactDOM;
  duration?: number;
  mask?: boolean;
};

const show = (config: Config) => {
  const { text, duration = 2500, mask } = config;

  let timer = 0;
  const container = document.createElement('div');
  document.body.appendChild(container);
  hide();
  containers.push(container);

  const TempToast = () => {
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
      if (duration === 0) return;
      timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }, []);

    return <Toast visible={visible} text={text} mask={mask} />;
  };
  ReactDOM.render(<TempToast />, container);
};

const hide = () => {
  while (true) {
    const container = containers.pop();
    if (!container) break;
    unmount(container);
  }
};

interface Props {
  visible?: boolean;
  text?: string | React.ReactDOM;
  mask?: boolean;
}

const Toast: FC<Props> & {
  show: typeof show;
  hide: typeof hide;
} = (props: Props) => {
  const { visible = false, text, mask } = props;

  if (!visible) return null;

  return (
    <div>
      {mask && <div className={`${prefixCls}-mask`} />}
      <div className={`${prefixCls}-root`} aria-hidden="true">
        {text}
      </div>
    </div>
  );
};

Toast.show = show;
Toast.hide = hide;

export default Toast;
