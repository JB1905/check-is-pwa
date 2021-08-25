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
    {
      mediaQuery: '(display-mode: standalone)',
      expected: true,
    },
    {
      mediaQuery: '(display-mode: browser)',
      expected: false,
    },
  ])('should check matchMedia $mediaQuery', ({ mediaQuery, expected }) => {
    matchMedia.useMediaQuery(mediaQuery);

    const status = checkIsPwa();

    expect(status).toBe(expected);
  });
});
