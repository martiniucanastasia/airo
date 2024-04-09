import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { SwitchButton, Switch as S } from './styles/switchStyles';

interface SwitchProps {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

export const Switch = ({ isChecked, setIsChecked }: SwitchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked);
  };

  return (
    <S.Label>
      <S.Input type="checkbox" checked={isChecked} onChange={handleChange} />
      <SwitchButton />
    </S.Label>
  );
};
