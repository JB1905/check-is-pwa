/**
 * @jest-environment node
 */

import { checkIsPwa, isPwa, checkIsNotPwa, isNotPwa } from "../src";

describe("checkIsPwa for SSR", () => {
  it("should test module when window is not defined", () => {
    expect(checkIsPwa()).toBe(undefined);
    expect(isPwa).toBe(undefined);

    expect(checkIsNotPwa()).toBe(undefined);
    expect(isNotPwa).toBe(undefined);
  });
});
