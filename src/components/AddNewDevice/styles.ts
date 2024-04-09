import { pxToRem } from '@/styles/_common';
import styled from 'styled-components';

export const AddNewDeviceStyled = {
  AddNewDevice: styled.div`
    width: ${pxToRem(900)};
    height: ${pxToRem(530)};

    display: flex;
    flex-direction: column;
  `,
  Title: styled.h2`
    font-family: var(--font-primary);
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--white-color-primary);

    padding-bottom: ${pxToRem(35)};
  `,
};
