import { pxToRem } from '@/styles/_common';
import styled from 'styled-components';

const NonAuthUserStyled = {
  NonAuthUser: styled.div`
    font-family: var(--font-primary);
    color: var(--white-color-primary);
  `,
  Title: styled.h2`
    font-size: var(--text-2xl);
    font-weight: 700;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: ${pxToRem(20)};
    padding-top: ${pxToRem(100)};
  `,
  Paragraph: styled.p`
    padding: ${pxToRem(6)};
    padding-top: ${pxToRem(30)};
    padding-bottom: ${pxToRem(70)};

    text-align: center;
    font-size: var(--text-xbase);

    & + button {
      margin-bottom: ${pxToRem(40)};
    }
  `,
};

export { NonAuthUserStyled };
