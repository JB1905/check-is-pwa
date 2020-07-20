const checkIsPwa = () => {
  if (window) {
    return window.matchMedia('(display-mode: standalone)').matches;
  }

  return undefined;
};

export default checkIsPwa;
