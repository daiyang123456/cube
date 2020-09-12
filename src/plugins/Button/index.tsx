import React from 'react';
import { Button as AButton } from 'antd';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const Button = ({
  store,
  path,
  indicator,
  runtimeName,
  editorProps,
  // 以下为自身所需
  style,
  onClick,
  ...props
}) => {
  return (
    <span {...editorProps} style={{ ...style, display: 'inline-block' }}>
      {indicator}
      <AButton
        {...props}
        style={{ width: '100%' }}
        onClick={() => typeof onClick === 'function' && onClick()}
      />
    </span>
  );
};

Button.componentInfo = {
  name: 'Button',
  title: '按钮',
  description: '触发操作',
  icon: 'ButtonIcon',
};

Button.defaultProps = {
  children: '文案',
  loading: false,
  style: {
    width: '80px',
  },
};

Button.schema = {
  children: {
    title: '文案',
    type: 'text',
  },
  loading: {
    title: 'loading',
    type: 'text',
  },
  onClick: {
    title: '点击事件',
    type: 'text',
  },
};
