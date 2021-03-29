/**
 * @jest-environment node
 */

import { checkIsPwa, isPwa } from '../src';

describe('checkIsPwa and isPwa for SSR', () => {
  it('should test module when window is not defined', () => {
    expect(checkIsPwa()).toBe(false);
    expect(isPwa).toBe(false);
  });
});
