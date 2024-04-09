import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import { pxToRem } from '@/styles/_common';
import { CheckboxProps } from '../Checkbox';

const getCheckedColor = ({
  isChecked = false,
}: ThemedStyledProps<Pick<CheckboxProps, 'isChecked'>, DefaultTheme>) => {
  const mapper: Record<string, FlattenSimpleInterpolation> = {
    true: css`
      background-color: var(--white-color-primary);
      border: none;
      svg path {
        stroke: currentColor;
        visibility: visible;
      }
    `,
    false: css`
      border: 1px solid var(--white-color-primary);
      svg path {
        visibility: hidden;
      }
    `,
  };
  return mapper[`${isChecked}`];
};

export const CheckboxStyled = {
  Label: styled.label`
    display: inline-flex;
    position: relative;
    align-items: center;
    user-select: none;
    font-family: 'Lato';
    color: var(--light-gray-text-color);
    font-size: var(--text-base);

    cursor: pointer;
    input {
      opacity: 0;
    }
  `,
};

export const CheckboxStyledMask = {
  CheckboxMask: styled.div<{ isChecked: boolean }>(
    ({ isChecked }) => css`
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${pxToRem(14)};
      height: ${pxToRem(14)};
      padding: ${pxToRem(3)};
      border-radius: 50%;

      ${getCheckedColor}
    `
  ),
};
