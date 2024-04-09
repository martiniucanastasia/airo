import { pxToRem } from '@/styles/_common';
import { Sizes, Variants } from '@/types';
import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import { BaseButtonProps } from '../types';

// --size - button height
const getSizeStyles = ({
  size = 'base',
}: ThemedStyledProps<Pick<BaseButtonProps, 'size'>, DefaultTheme>) => {
  const mapper: Record<Sizes, FlattenSimpleInterpolation> = {
    base: css`
      --size: ${pxToRem(34)};
    `,
    large: css`
      --size: ${pxToRem(40)};
      --font-weight: 600;
    `,
  };

  return mapper[size];
};

const getVariantStyles = ({
  variant = 'primary',
}: ThemedStyledProps<Pick<BaseButtonProps, 'variant'>, DefaultTheme>) => {
  const mapper: Record<Variants, FlattenSimpleInterpolation> = {
    primary: css`
      --bg-color: var(--primary-color);

      &:hover {
        --bg-color: var(--dark-purple-color);
      }

      &:active {
        --bg-color: var(--very-dark-purple-color);
      }
    `,
    secondary: css`
      --bg-color: var(--light-black-color);
      --border: ${pxToRem(1)} solid var(--grey-color-secondary);
    `,
    tertiary: css``,
  };

  return mapper[variant];
};

export const baseStyled = {
  Button: styled.button<Pick<BaseButtonProps, 'variant' | 'size'>>`
    --p: 0;
    --size: ${pxToRem(40)};
    --font-size: var(--text-base);
    --border: ${pxToRem(1)} solid transparent;
    --border-radius: ${pxToRem(2)};
    --text-color: var(--white-color-primary);
    transition: background-color 0.4s ease;

    ${getSizeStyles};
    ${getVariantStyles};

    color: var(--text-color);
    padding: var(--p);
    min-height: var(--size);
    background: var(--bg-color);
    font-family: var(--font-primary);
    font-size: var(--font-size);
    font-weight: var(--font-weight, 400);
    border: var(--border);
    border-radius: var(--border-radius);
    cursor: pointer;
  `,
};
