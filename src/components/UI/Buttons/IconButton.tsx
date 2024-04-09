import React from 'react';
import { iconButtonStyled as S } from './styles/iconButtonStyles';
import { IconButtonProps } from './types';

const IconButton: React.FC<IconButtonProps> = ({ ...props }) => <S.Button {...props} />;

export default IconButton;
