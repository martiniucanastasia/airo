import { pxToRem } from '@/styles/_common';
import styled from 'styled-components';

const AccordionSummaryStyled = {
  AccordionSummary: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${pxToRem(10)} ${pxToRem(16)};

    background-color: var(--grey-color-tertiary);
    border-radius: ${pxToRem(3)};

    box-shadow: 0px ${pxToRem(14)} ${pxToRem(19)} rgba(0, 0, 0, 0.1);
  `,
};

export { AccordionSummaryStyled };
