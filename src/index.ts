const checkIsPwa = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(display-mode: standalone)').matches;
  }

  return false;
};

export default checkIsPwa;
