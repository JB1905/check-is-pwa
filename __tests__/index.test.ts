import matchMedia from '../__mocks__/matchMedia';

import { checkIsPwa, isPwa } from '../src';

describe('checkIsPwa and isPwa', () => {
  afterEach(() => {
    matchMedia.clear();
  });

  it.each([
    ['(display-mode: standalone)', true],
    ['(display-mode: browser)', false],
  ])('should check matchMedia $mediaQuery', (mediaQuery, expected) => {
    matchMedia.useMediaQuery(mediaQuery);

    expect(checkIsPwa()).toBe(expected);
    expect(isPwa).toBe(expected);
  });
});
