import { pxToRem } from '@/styles/_common';
import styled from 'styled-components';

type TextareaType = {
  status: string;
};

export const AddNewGatewayStyled = {
  GatewayContaier: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;

    padding-top: ${pxToRem(40)};
  `,
  AddNewGateway: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(24)};
    height: 100%;
  `,
  InputContainer: styled.div`
    position: relative;
  `,
  TextareaContainer: styled.div`
    width: 100%;
    max-height: ${pxToRem(160)};
    height: 100%;

    position: relative;
  `,
  Textarea: styled.textarea<TextareaType>`
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
    max-height: ${pxToRem(160)};
    height: 100%;

    border: ${pxToRem(2)} solid transparent;
    border-radius: ${pxToRem(2)};
    padding: ${pxToRem(12)};

    background-color: var(--gray-700);

    &:focus {
      border: ${pxToRem(2)} solid var(--dark-purple-color);
    }

    resize: none;

    border: ${({ status }) =>
      status === 'error' ? `${pxToRem(2)} solid var(--red-color);` : 'none'};
  `,
  InputLabel: styled.div`
    font-family: var(--font-primary);
    font-size: var(--text-sm);
    color: var(--white-color-primary);

    margin-bottom: ${pxToRem(10)};
  `,
  ButtonGroup: styled.div`
    margin-left: auto;
    margin-top: auto;

    max-width: ${pxToRem(420)};
    width: 100%;

    display: flex;
    gap: ${pxToRem(24)};
  `,
  Error: styled.p`
    font-family: var(--font-primary);
    font-size: var(--text-xs);
    color: var(--red-500);

    padding-top: ${pxToRem(4)};

    position: absolute;
    bottom: ${pxToRem(-16)};
    left: ${pxToRem(12)};
  `,
};
