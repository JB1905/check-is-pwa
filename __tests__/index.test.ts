import MatchMediaMock from 'jest-matchmedia-mock';

import { checkIsPwa, isPwa, checkIsNotPwa, isNotPwa } from '../src';

let matchMedia: MatchMediaMock;

describe('checkIsPwa', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

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

    expect(checkIsNotPwa()).toBe(!expected);
    expect(isNotPwa).toBe(!expected);
  });
});
