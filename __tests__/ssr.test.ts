/**
 * @jest-environment node
 */

import { checkIsPwa, isPwa, checkIsNotPwa, isNotPwa } from "../src";

describe("checkIsPwa for SSR", () => {
  it("should test module when window is not defined", () => {
    expect(checkIsPwa()).toBe(false);
    expect(isPwa).toBe(false);

    expect(checkIsNotPwa()).toBe(true);
    expect(isNotPwa).toBe(true);
  });
});
