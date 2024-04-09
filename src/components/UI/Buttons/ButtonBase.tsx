import React from 'react';
import { baseStyled as S } from './styles/baseStyles';
import { BaseButtonProps } from './types';

const ButtonBase: React.FC<BaseButtonProps> = ({
  size = 'base',
  onClick,
  variant,
  children,
  className,
}) => (
  <S.Button className={className} variant={variant} size={size} onClick={onClick}>
    {children}
  </S.Button>
);

export default ButtonBase;
