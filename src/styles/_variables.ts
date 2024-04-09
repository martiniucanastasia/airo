import { css } from 'styled-components';

const colors = css`
  --primary-color: #6202ee;
  --secondary-color: #242c35;

  --dark-purple-color: #7a1eff; // todo! remove
  --very-dark-purple-color: #4b1797; // todo! remove
  --light-purple-color: #9e00d6; // todo! remove
  --violet-900: #7a1eff; // --dark-purple-color
  --violet-600: #9e00d6; // --light-purple-color
  --indigo-200: #e6e6f9; // --light-purple-color-2
  --purple-950: #432280;
  --purple-900: #4b1797; // --very-dark-purple-color
  --purple-600: #a154f2;

  --white-color-primary: #ffffff;
  --white-color-secondary: #fcfcfe;

  --black-color: #000000;

  --light-black-color: #30363d; // todo! remove
  --grey-color-primary: rgba(255, 255, 255, 0.25); // todo! remove
  --grey-color-secondary: rgba(255, 255, 255, 0.6); // todo! remove
  --grey-color-tertiary: #3c444c; // todo! remove
  --light-grey-color-variant-1: #c4c4c4; // todo! remove
  --light-grey-color-variant-2: #acafb1; // todo! remove
  --gray-900: #30363d; // --light-black-color
  --gray-800: rgba(255, 255, 255, 0.25); // --grey-color-primary
  --gray-700: #3c444c; // --grey-color-tertiary
  --gray-600: rgba(255, 255, 255, 0.6); // --grey-color-secondary
  --gray-500: #acafb1; // --light-grey-color-variant-2
  --gray-400: #c4c4c4; // --light-grey-color-variant-1

  --neutral-600: #432280; // --dark-grey-color-variant-1

  --green-gradient-opacity-color: linear-gradient(180deg, #acf254 0%, #20944e 100%); // todo! remove
  --blue-to-pirple-gradient-color: linear-gradient(40.77deg, #a154f2 4.86%, #5ac8fa 84.61%), #c4c4c4; // todo! remove
  --lime-to-green-gradient-color: linear-gradient(40.77deg, #3e8525 4.86%, #acf254 64.67%), #c4c4c4; // todo! remove
  // instead of all gradient colors
  --lime-900: #3e8525;
  --lime-800: #20944e;
  --lime-400: #acf254;

  --blue-400: #5ac8fa;

  --yellow-to-yellow-gradient-color: linear-gradient(40.77deg, #dbff00 4.86%, #ffc700 84.61%),
    linear-gradient(51.28deg, #ffc700 12.08%, #ff5c00 80.18%); // todo! remove
  --yellow-600: #ffc700;
  --yellow-400: #dbff00;

  --orange-to-orange-gradient-color: linear-gradient(51.28deg, #ffc700 12.08%, #ff5c00 80.18%),
    #c4c4c4; // todo! remove
  --orange-700: #ff5c00;

  --red-to-red-gradient-color: linear-gradient(51.28deg, #ff5c00 12.08%, #f41414 80.18%), #c4c4c4; // todo! remove
  --red-800: #ea212d; // --dark-red-color
  --red-700: #f41414;
  --red-500: #eb5757; // --red-color

  --red-color: #eb5757; // todo! remove
  --dark-red-color: #ea212d; // todo! remove
`;

const fontSizes = css`
  --text-2xl: clamp(1.25rem, calc(1.18rem + 0.36vw), 1.5rem); // min 20, max 24
  --text-base: clamp(0.88rem, calc(0.84rem + 0.18vw), 1rem); // min 14, max 16
  --text-xbase: clamp(0.81rem, calc(0.78rem + 0.18vw), 0.94rem); // min 13, max 15
  --text-sm: clamp(0.75rem, calc(0.71rem + 0.18vw), 0.88rem); // min 12, max 14
  --text-xs: clamp(0.69rem, calc(0.67rem + 0.09vw), 0.75rem); // min 11, max 12
  --text-xxs: clamp(0.56rem, calc(0.54rem + 0.09vw), 0.63rem); // min 9, max 10
`;

const spaceSizes = css`
  --space-s: clamp(0.63rem, calc(0.45rem + 0.89vw), 1.25rem); // min 10, max 20
`;

const fontFamilies = css`
  --font-primary: 'Source Sans Pro';
  --font-secondary: 'Montserrat';
`;

export const variables = css`
  :root {
    ${colors}
    ${fontSizes}
    ${spaceSizes}
    ${fontFamilies}
  }
`;


