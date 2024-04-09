import { css } from 'styled-components';

import SourceSansProRegular from '@/assets/fonts/source-sans-pro-v21-latin-regular.woff2';
import SourceSansPro600 from '@/assets/fonts/source-sans-pro-v21-latin-600.woff2';
import SourceSansPro700 from '@/assets/fonts/source-sans-pro-v21-latin-700.woff2';
import MontserratRegular from '@/assets/fonts/montserrat-v25-latin-regular.woff2';
import FiraSansRegular from '@/assets/fonts/fira-sans-v16-latin-regular.woff2';
import FiraSans700 from '@/assets/fonts/fira-sans-v16-latin-700.woff2';

export const fontStyles = css`
  /* source-sans-pro-regular - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: url(${SourceSansProRegular}) format('woff2');
  }

  /* source-sans-pro-600 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    src: url(${SourceSansPro600}) format('woff2');
  }

  /* source-sans-pro-700 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    src: url(${SourceSansPro700}) format('woff2');
  }

  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url(${MontserratRegular}) format('woff2');
  }

  /* fira-sans-regular - latin */
  @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${FiraSansRegular}) format('woff2');
  }

  /* fira-sans-700 - latin */
  @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${FiraSans700}) format('woff2');
  }
`;
