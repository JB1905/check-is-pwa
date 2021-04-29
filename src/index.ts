export const checkIsPwa = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(display-mode: standalone)').matches;
  }

  return false;
};

// TODO fix - value is saved for all calls, not watch matchMedia changes
export const isPwa = checkIsPwa();
