import checkIsPwa from '../src';

describe('checkIsPwa', () => {
  it('should ', () => {
    const status = checkIsPwa();

    expect(status).toBe(true);
  });

  it('should ', () => {
    const status = checkIsPwa();

    expect(status).toBe(false);
  });

  it('should ', () => {
    const status = checkIsPwa();

    expect(status).toBe(undefined);
  });
});
