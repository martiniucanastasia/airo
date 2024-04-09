import { pxToRem } from '@/styles/_common';
import { Sizes, Statuses, Variants } from '@/types';
import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import { InputType } from './types';

const getVariantsStyles = ({
  variant = 'primary',
}: ThemedStyledProps<Pick<InputType, 'variant'>, DefaultTheme>) => {
  const mapper: Record<Variants, FlattenSimpleInterpolation> = {
    primary: css`
      background-color: var(--gray-700);

      &:focus {
        border: ${pxToRem(2)} solid var(--dark-purple-color);
      }
    `,
    secondary: css`
      background-color: transparent;
      border: ${pxToRem(1)} solid var(--grey-color-primary);
      border-radius: ${pxToRem(17)};
    `,
    tertiary: css``,
  };

  return mapper[variant];
};

const getSizesStyles = ({
  size = 'base',
}: ThemedStyledProps<Pick<InputType, 'size'>, DefaultTheme>) => {
  const mapper: Record<Sizes, FlattenSimpleInterpolation> = {
    base: css`
      --size: ${pxToRem(30)};
    `,
    large: css`
      --size: ${pxToRem(36)};
    `,
  };

  return mapper[size];
};

const getStatusStyles = ({
  status = 'none',
}: ThemedStyledProps<Pick<InputType, 'status'>, DefaultTheme>) => {
  const mapper: Record<Statuses, FlattenSimpleInterpolation> = {
    none: css``,
    error: css`
      border: ${pxToRem(2)} solid var(--red-color);
    `,
    success: css``,
  };

  return mapper[status];
};

const getLabelStyles = ({
  status = 'none',
}: ThemedStyledProps<Pick<InputType, 'status'>, DefaultTheme>) => {
  const mapper: Record<Statuses, FlattenSimpleInterpolation> = {
    none: css``,
    error: css`
      color: var(--red-color);
    `,
    success: css``,
  };

  return mapper[status];
};

const getIsActiveStyled = ({
  isActive,
}: ThemedStyledProps<Pick<InputType, 'isActive'>, DefaultTheme>) => {
  if (!isActive)
    return css`
      background: transparent;
      cursor: auto;

      &:focus {
        border: none;
        color: transparent;
        text-shadow: 0 0 0 var(--grey-color-secondary);
      }

      &:hover {
        cursor: default;
      }
    `;
};

const InputStyled = {
  Container: styled.div<Pick<InputType, 'size'>>`
    position: relative;

    ${getSizesStyles};

    height: var(--size);
    border-radius: ${pxToRem(2)};
  `,
  Input: styled.input<
    Pick<InputType, 'variant' | 'status' | 'iconLeft' | 'iconRight' | 'isActive'>
  >`
    font-family: var(--font-primary);
    font-size: var(--text-sm);

    &::placeholder {
      color: var(--grey-color-secondary);
    }
    color: var(--grey-color-secondary);

    &:focus {
      outline: none;
    }

    width: 100%;
    height: 100%;

    padding-left: ${({ iconLeft }) => (iconLeft ? `${pxToRem(30)}` : `${pxToRem(12)}`)};
    padding-right: ${({ iconRight }) => (iconRight ? `${pxToRem(30)}` : `${pxToRem(12)}`)};

    border: ${pxToRem(2)} solid transparent;
    border-radius: ${pxToRem(2)};

    ${getVariantsStyles};
    ${getStatusStyles};
    ${getIsActiveStyled}
  `,
  Label: styled.div<Pick<InputType, 'status'>>`
    ${getLabelStyles}
  `,
  IconLeft: styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-left: ${pxToRem(12)};
    display: flex;

    color: var(--white-color-primary);
    cursor: pointer;
  `,
  IconRight: styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: ${pxToRem(12)};
    display: flex;

    color: var(--gray-500);
    cursor: pointer;
  `,
};

export { InputStyled };
