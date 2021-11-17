import React, { useState } from 'react';

import { Button } from 'antd-mobile';
import { Modal } from 'eco-image-picker';

export default () => {
  const [visible, setvisible] = useState<boolean>(false);

  const onClose = () => setvisible((val) => !val);

  return (
    <div>
      <Button inline type="primary" onClick={onClose}>
        open
      </Button>
      <Modal visible={visible} footer={[{ text: '关闭', onPress: onClose }]}>
        modal
      </Modal>
    </div>
  );
};
