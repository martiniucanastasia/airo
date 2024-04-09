import styled, { css } from 'styled-components';
import { pxToRem } from '@/styles/_common';
import { ToggleTabsProps } from './ToggleTabs';

const getActiveStyles = ({ index, activeTab }: { index: number; activeTab: number }) => {
  if (index === activeTab)
    return css`
      color: var(--white-color-primary);
      background-color: var(--primary-color);
      font-weight: 700;
    `;
  else {
    return css`
      color: var(--gray-600);
      background-color: var(--gray-700);
      font-weight: 400;
    `;
  }
};

export const TabsStyled = {
  TabWrapper: styled.div<Pick<ToggleTabsProps, 'tabWrapperWidth'>>`
    display: flex;

    max-width: ${({ tabWrapperWidth }) =>
      tabWrapperWidth ? `${pxToRem(tabWrapperWidth)}` : 'auto'};
    width: ${({ tabWrapperWidth }) => (tabWrapperWidth ? `100%` : 'auto')};
  `,

  Tab: styled.button`
    width: 100%;
    padding: ${pxToRem(6)} ${pxToRem(25)};
    line-height: ${pxToRem(24)};
    font-size: var(--text-base);
    border-radius: 2px;
    font-family: var(--font-primary);
    cursor: pointer;

    ${getActiveStyles}

    :not(:last-child) {
      margin-right: 1.5px;
    }
  `,
};
