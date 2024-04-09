import { pxToRem } from '@/styles/_common';
import styled, { css, DefaultTheme, keyframes, ThemedStyledProps } from 'styled-components';
import { IconButton } from '../UI/Buttons';

import { ISettingsPanel } from './types';

const showPanel = keyframes`
  0% {
    transform: translateX(360px);
  }
  100% {
    transform: translateX(0);
  }
`;

const hidePanel = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(360px);
  }
`;

const PanelIsActivestyles = ({
  isActive,
}: ThemedStyledProps<Pick<ISettingsPanel, 'isActive'>, DefaultTheme>) => {
  if (isActive)
    return css`
      animation: ${showPanel} 0.45s;
    `;
  else
    return css`
      animation: ${hidePanel} 0.3s forwards;
    `;
};

const SettingsPanelStyled = {
  Container: styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  `,
  SettingsPanel: styled.div<Pick<ISettingsPanel, 'isActive'>>`
    max-width: ${pxToRem(360)};
    width: 100%;

    background-color: var(--light-black-color);
    padding: ${pxToRem(16)};
    padding-top: ${pxToRem(30)};

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    overflow: auto;

    ${PanelIsActivestyles};
  `,
  CloseButton: styled(IconButton)`
    position: absolute;

    right: ${pxToRem(16)};
    top: ${pxToRem(30)};

    min-height: 0px;
    min-width: 0px;
  `,
};

export { SettingsPanelStyled };
