import React, { useState } from 'react';
import { Input } from 'antd';
import { StoreValueView } from '../../StoreValueView';

export const TextEditor = ({ schema, value, onChange, store }) => {
  const { flexDirection = 'row', alignItems = 'center' } = schema;
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={'prop-item-editor-wrapper'}
      style={{
        display: 'flex',
        flexDirection,
        justifyContent: 'space-between',
        alignItems,
      }}
    >
      <p>
        {schema.title || '文本'}
        <span>{schema.desc}</span>
      </p>
      <div>
        <StoreValueView store={store} visible={focused} value={value} onChange={onChange}>
          <Input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            onChange={(e) => {
              const value = e.target.value;
              onChange(value);
            }}
          ></Input>
        </StoreValueView>
      </div>
    </div>
  );
};
