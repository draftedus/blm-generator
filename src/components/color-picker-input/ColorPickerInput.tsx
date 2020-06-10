import React, { FC, useState } from 'react';
import { ChromePicker } from 'react-color';
import { SpacedInput } from '../../App.styled';
import { Cover, PopOver, RelativeContainer } from './ColorPickerInput.styled';

type $ColorPickerPropTypes = {
  value: string;
  onChange: (value: string) => void;
};

/**
 * A text input with color picker popup
 */
const ColorPickerInput: FC<$ColorPickerPropTypes> = ({
  value,
  onChange,
}: $ColorPickerPropTypes) => {
  const [active, setActive] = useState(false);
  return (
    <RelativeContainer>
      <SpacedInput
        type="text"
        value={value}
        onChange={(e) => onChange(e?.target?.value)}
        onFocus={() => setActive(true)}
      />
      {active ? (
        <PopOver>
          <Cover onClick={() => setActive(false)} />
          <ChromePicker
            styles={{ default: { picker: { width: '100%' } } }}
            disableAlpha={true}
            color={value}
            onChange={(c) => onChange(c.hex)}
          />
        </PopOver>
      ) : null}
    </RelativeContainer>
  );
};

export default ColorPickerInput;
