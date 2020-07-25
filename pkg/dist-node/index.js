'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const checkIsPwa = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(display-mode: standalone)').matches;
  }

  return undefined;
};

exports.default = checkIsPwa;
//# sourceMappingURL=index.js.map
