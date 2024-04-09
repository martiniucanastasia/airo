import styled from 'styled-components';
import { pxToRem } from '@/styles/_common';

export const SwitchButton = styled.div`
  content: '';
  position: absolute;

  left: 0;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: ${pxToRem(50)};

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
  background: var(--gray-500);
  transition: all 0.2s ease;

  cursor: pointer;
`;

export const Switch = {
  Label: styled.label`
    display: flex;
    align-items: center;
    position: relative;
  `,
  Input: styled.input`
    appearance: none;

    width: ${pxToRem(34)};
    height: ${pxToRem(14)};
    border-radius: ${pxToRem(7)};
    background-color: var(--indigo-200);
    transition: opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease;

    cursor: pointer;

    &:checked {
      background-color: var(--purple-900);
    }

    &:checked + ${SwitchButton} {
      left: ${pxToRem(15)};
      background-color: var(--primary-color);
    }
  `,
};
