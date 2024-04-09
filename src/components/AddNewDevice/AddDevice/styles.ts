import { pxToRem } from '@/styles/_common';
import styled from 'styled-components';

export const AddDeviceStyled = {
  DeviceContaier: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;

    padding-top: ${pxToRem(40)};
  `,
  AddDevice: styled.div`
    display: flex;
    gap: ${pxToRem(28)};
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${pxToRem(28)};
  `,
  InputContainer: styled.div`
    position: relative;
  `,
  LocationContainer: styled.div`
    display: flex;
    width: 100%;
    gap: ${pxToRem(10)};
  `,
  InputLabel: styled.div`
    font-family: var(--font-primary);
    font-size: var(--text-sm);
    color: var(--white-color-primary);

    margin-bottom: ${pxToRem(10)};
  `,
  DropDownContainer: styled.div`
    flex: 1;
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
    bottom: ${pxToRem(-18)};
    left: ${pxToRem(12)};
  `,
};
