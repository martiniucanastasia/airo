import { pxToRem } from '@/styles/_common';
import { Sizes } from '@/types';
import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import ButtonBase from '../ButtonBase';
import { IconButtonProps } from '../types';

const getSizeStyles = ({
  size = 'base',
}: ThemedStyledProps<Pick<IconButtonProps, 'size'>, DefaultTheme>) => {
  const mapper: Record<Sizes, FlattenSimpleInterpolation> = {
    base: css`
      & svg {
        width: ${pxToRem(20)};
      }
    `,
    large: css`
      & svg {
        width: ${pxToRem(24)};
      }
    `,
  };

  return mapper[size];
};

export const iconButtonStyled = {
  Button: styled(ButtonBase)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: var(--size);

    & svg {
      width: ${pxToRem(24)};
    }
    ${getSizeStyles}
  `,
};
