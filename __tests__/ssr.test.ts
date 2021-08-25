/**
 * @jest-environment node
 */

import checkIsPwa from '../src';

describe('checkIsPwa for SSR', () => {
  it('should test the module when the window is not defined', () => {
    const status = checkIsPwa();

    expect(status).toBe(false);
  });
});
