// references:
// https://github.com/testing-library/jest-dom
// https://testing-library.com/docs/

import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
