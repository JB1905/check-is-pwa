/**
 * @jest-environment node
 */

import { checkIsPwa, isPwa } from '../src';

describe('checkIsPwa for SSR', () => {
  it('should test module when window is not defined', () => {
    const status = checkIsPwa();

    expect(status).toBe(undefined);
    expect(isPwa).toBe(undefined);
  });
});
