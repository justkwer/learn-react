import React, { forwardRef } from 'react';
import { SwitchCatStyled } from '../styled';
import { SwitchCatProps } from '../Forms.model';

export const SwitchCat = forwardRef<HTMLInputElement, SwitchCatProps>((props, ref) => {
  return (
    <SwitchCatStyled>
      Do you want to see the cat?)
      <div className="switch">
        <input ref={ref} type="checkbox" onClick={() => props.validCallback('showCat')} />
        <span className="slider" />
      </div>
    </SwitchCatStyled>
  );
});

export default SwitchCat;
