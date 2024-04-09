import { pxToRem } from '@/styles/_common';
import styled from 'styled-components';

const DeviceCardStyled = {
  DeviceCard: styled.button`
    font-family: var(--font-primary);
    font-size: var(--text-base);
    font-weight: 700;
    color: var(--white-color-primary);

    display: flex;
    align-items: center;
    gap: ${pxToRem(20)};

    width: 100%;
    height: ${pxToRem(75)};
    background-color: var(--grey-color-tertiary);
    padding: ${pxToRem(10)};

    box-shadow: 0px ${pxToRem(20)} ${pxToRem(20)} rgba(0, 0, 0, 0.1);
    border-radius: ${pxToRem(2)};

    cursor: pointer;
  `,
  Icon: styled.div`
    aspect-ratio: 1 / 1;
    width: ${pxToRem(48)};
    height: ${pxToRem(48)};

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    background-color: var(--primary-color);
    border-radius: 50%;

    svg {
      position: absolute;
      right: ${pxToRem(-10)};
    }
  `,
  Description: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  Title: styled.div``,
  Address: styled.div`
    font-size: var(--text-xs);
    font-weight: 400;
    color: var(--light-grey-color-variant-2);
    padding-top: ${pxToRem(8)};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
};

export { DeviceCardStyled };
