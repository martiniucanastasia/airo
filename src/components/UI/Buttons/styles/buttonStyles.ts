import { pxToRem } from '@/styles/_common';
import styled from 'styled-components';
import ButtonBase from '../ButtonBase';

export const buttonStyled = {
  Button: styled(ButtonBase)`
    --p: 0 ${pxToRem(20)};
    width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  `,
};
