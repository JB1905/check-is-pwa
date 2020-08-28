import MatchMediaMock from 'jest-matchmedia-mock';

import checkIsPwa from '../src';

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

    const status = checkIsPwa();

    expect(status).toBe(expected);
  });
});
