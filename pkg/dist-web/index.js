const checkIsPwa = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(display-mode: standalone)').matches;
  }

  return undefined;
};

export default checkIsPwa;
//# sourceMappingURL=index.js.map
