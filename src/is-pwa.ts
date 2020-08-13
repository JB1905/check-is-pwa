export const checkIsPwa = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(display-mode: standalone)').matches;
  }

  return undefined;
};

export const isPwa = checkIsPwa();
