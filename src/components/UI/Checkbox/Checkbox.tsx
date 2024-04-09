import { Dispatch, SetStateAction, useState } from 'react';
import { CheckboxStyledMask as M, CheckboxStyled as F } from './styles/checkboxStyles';
import { ReactComponent as CheckSvg } from '../../../assets/svg/checkmark.svg';

export interface CheckboxProps {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

export const Checkbox = ({ isChecked, setIsChecked }: CheckboxProps) => {
  const handleChange = (): void => {
    setIsChecked(!isChecked);
  };
  return (
    <F.Label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <M.CheckboxMask isChecked={isChecked}>
        <CheckSvg />
      </M.CheckboxMask>
    </F.Label>
  );
};
