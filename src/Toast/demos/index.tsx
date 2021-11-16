import React from 'react';

import { Button } from 'antd-mobile';
import { Toast } from 'eco-image-picker';

export default () => {
  const openLoadign = () => {
    Toast.show({ text: Math.random().toString(32).slice(-8) });
  };

  return (
    <div>
      <Button inline type="primary" onClick={openLoadign}>
        open
      </Button>
    </div>
  );
};
