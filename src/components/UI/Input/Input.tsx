import { ChangeEvent } from 'react';
import { InputStyled as S } from './styles';
import { InputType } from './types';

const Input = ({
  placeholder,
  label,
  iconLeft,
  iconRight,
  status,
  variant,
  value,
  onChange,
  size,
  registerValue,
  isActive,
}: InputType) => {
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;

    if (!onChange) return;

    if (isActive) {
      onChange(target.value);
    } else if (isActive === undefined) {
      onChange(target.value);
    }
  };
  return (
    <>
      <S.Container size={size}>
        {iconLeft && <S.IconLeft>{iconLeft}</S.IconLeft>}
        <S.Input
          placeholder={placeholder}
          variant={variant}
          status={status}
          iconLeft={iconLeft}
          iconRight={iconRight}
          value={value}
          {...registerValue}
          onChange={(event) => {
            inputChangeHandler(event);
            registerValue?.onChange(event);
          }}
          isActive={isActive === undefined ? true : isActive}
          disabled={isActive === undefined ? false : !isActive}
        />
        {iconRight && <S.IconRight>{iconRight}</S.IconRight>}
      </S.Container>
      {label && <S.Label status={status}>{label}</S.Label>}
    </>
  );
};

export default Input;
